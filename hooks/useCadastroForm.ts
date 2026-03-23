'use client'

import { useState, useCallback } from 'react'
import type { CadastroFormData, CadastroFormErrors, PaymentMode, ScriptResponse } from '@/types'
import { maskCpf, maskPhone, maskCep } from '@/lib/masks'
import { isRequiredFilled, isValidCpf, isValidCep } from '@/lib/validators'
import { SCRIPT_URL, VIACEP_URL } from '@/lib/constants'

const INITIAL_DATA: CadastroFormData = {
  nome: '',
  cpf: '',
  telefone: '',
  email: '',
  cep: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
  complemento: '',
  benNome: '',
  benCpf: '',
  benNasc: '',
  pagamento: '',
  diaPreferido: null,
  termosAceitos: false,
}

interface ViaCepResponse {
  logradouro?: string
  bairro?: string
  localidade?: string
  uf?: string
  erro?: boolean
}

export function useCadastroForm() {
  const [data, setData] = useState<CadastroFormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<CadastroFormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const setField = useCallback(
    <K extends keyof CadastroFormData>(field: K, value: CadastroFormData[K]) => {
      setData((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    },
    [],
  )

  const handleMaskedInput = useCallback(
    (field: 'cpf' | 'telefone' | 'cep' | 'benCpf', raw: string) => {
      const masked =
        field === 'cpf' || field === 'benCpf'
          ? maskCpf(raw)
          : field === 'telefone'
            ? maskPhone(raw)
            : maskCep(raw)
      setField(field, masked)
    },
    [setField],
  )

  const handleCepChange = useCallback(
    async (raw: string) => {
      const masked = maskCep(raw)
      setField('cep', masked)

      const digits = masked.replace(/\D/g, '')
      if (digits.length !== 8) return

      try {
        const res = await fetch(VIACEP_URL(digits))
        const json: ViaCepResponse = await res.json()
        if (!json.erro) {
          setData((prev) => ({
            ...prev,
            rua: json.logradouro ?? prev.rua,
            bairro: json.bairro ?? prev.bairro,
            cidade: json.localidade && json.uf ? `${json.localidade} - ${json.uf}` : prev.cidade,
          }))
        }
      } catch {
        // silently ignore CEP lookup failures
      }
    },
    [setField],
  )

  const handlePaymentChange = useCallback(
    (mode: PaymentMode) => {
      setField('pagamento', mode)
      if (mode !== 'mensal') setField('diaPreferido', null)
    },
    [setField],
  )

  const validate = useCallback((): boolean => {
    const newErrors: CadastroFormErrors = {}

    if (!isRequiredFilled(data.nome)) newErrors.nome = 'Por favor, informe o nome completo.'
    if (!isValidCpf(data.cpf)) newErrors.cpf = 'CPF inválido (11 dígitos).'
    if (!isValidCep(data.cep)) newErrors.cep = 'CEP inválido.'
    if (!isRequiredFilled(data.rua)) newErrors.rua = 'Informe a rua.'
    if (!isRequiredFilled(data.numero)) newErrors.numero = 'Informe o número.'
    if (!isRequiredFilled(data.bairro)) newErrors.bairro = 'Informe o bairro.'
    if (!isRequiredFilled(data.cidade)) newErrors.cidade = 'Informe a cidade.'
    if (!data.pagamento) newErrors.pagamento = 'Selecione uma modalidade de pagamento.'
    if (!data.termosAceitos) newErrors.termos = 'Você precisa aceitar os termos para continuar.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [data])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!validate()) return

      const pagamentoStr =
        data.pagamento === 'mensal'
          ? `Mensal (dia ${data.diaPreferido ?? 'não definido'})`
          : 'Por sessão'

      const payload = {
        timestamp: new Date().toLocaleString('pt-BR'),
        nome: data.nome,
        cpf: data.cpf,
        telefone: data.telefone,
        email: data.email,
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        complemento: data.complemento,
        benNome: data.benNome,
        benCpf: data.benCpf,
        benNasc: data.benNasc,
        pagamento: pagamentoStr,
        termos: 'Aceito',
      }

      setSubmitting(true)
      try {
        const res = await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(payload),
        })
        const json: ScriptResponse = await res.json()
        if (json.result === 'success') {
          setSubmitted(true)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          throw new Error('Script returned error')
        }
      } catch {
        alert('Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.')
      } finally {
        setSubmitting(false)
      }
    },
    [data, validate],
  )

  return {
    data,
    errors,
    submitting,
    submitted,
    setField,
    handleMaskedInput,
    handleCepChange,
    handlePaymentChange,
    handleSubmit,
  }
}
