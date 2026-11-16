"use client";

import { useState, useCallback } from "react";
import type {
  CadastroFormData,
  CadastroFormErrors,
  ScriptResponse,
} from "@/types";
import { maskCpf, maskPhone, maskCep } from "@/lib/masks";
import { isRequiredFilled, isValidCpf, isValidCep } from "@/lib/validators";
import { VIACEP_URL } from "@/lib/constants";

// Opções da pergunta "Como conheceu a Fono Nathália Machado".
// O texto da opção é o que vai para a planilha.
export const COMO_CONHECEU_OUTRO = "Outro";
export const COMO_CONHECEU_OPCOES = [
  "Indicação de alguém (amigo, familiar, outro paciente)",
  "Indicação de profissional (médico, escola, outro terapeuta)",
  "Instagram",
  "Pesquisa no Google",
  "Google Maps",
  "ChatGPT ou outra inteligência artificial",
  COMO_CONHECEU_OUTRO,
] as const;

const INITIAL_DATA: CadastroFormData = {
  nome: "",
  cpf: "",
  telefone: "",
  email: "",
  cep: "",
  rua: "",
  numero: "",
  bairro: "",
  cidade: "",
  complemento: "",
  benNome: "",
  benCpf: "",
  benNasc: "",
  comoConheceu: "",
  comoConheceuOutro: "",
  termosAceitos: false,
};

interface ViaCepResponse {
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

// Ordem visual dos campos no formulário — usada para rolar até o primeiro erro.
const FIELD_ORDER: (keyof CadastroFormErrors)[] = [
  "nome",
  "cpf",
  "cep",
  "rua",
  "numero",
  "bairro",
  "cidade",
  "benNome",
  "benCpf",
  "benNasc",
  "comoConheceu",
  "comoConheceuOutro",
  "termos",
];

function scrollToFirstError(errs: CadastroFormErrors) {
  const firstKey = FIELD_ORDER.find((key) => errs[key]);
  if (!firstKey) return;

  const el = document.getElementById(`cad-${firstKey}`);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "center" });

  if (
    el instanceof HTMLInputElement ||
    el instanceof HTMLSelectElement ||
    el instanceof HTMLTextAreaElement
  ) {
    // preventScroll: o foco não cancela a animação suave do scrollIntoView
    el.focus({ preventScroll: true });
  }
}

export function useCadastroForm() {
  const [data, setData] = useState<CadastroFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<CadastroFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Vira true quando a pessoa abre os termos (quadro expansível ou página dedicada).
  // Só depois disso o checkbox de aceite pode ser marcado.
  const [termosLidos, setTermosLidos] = useState(false);

  const setField = useCallback(
    <K extends keyof CadastroFormData>(
      field: K,
      value: CadastroFormData[K],
    ) => {
      setData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    [],
  );

  const handleMaskedInput = useCallback(
    (field: "cpf" | "telefone" | "cep" | "benCpf", raw: string) => {
      const masked =
        field === "cpf" || field === "benCpf"
          ? maskCpf(raw)
          : field === "telefone"
            ? maskPhone(raw)
            : maskCep(raw);
      setField(field, masked);
    },
    [setField],
  );

  const handleCepChange = useCallback(
    async (raw: string) => {
      const masked = maskCep(raw);
      setField("cep", masked);

      const digits = masked.replace(/\D/g, "");
      if (digits.length !== 8) return;

      try {
        const res = await fetch(VIACEP_URL(digits));
        const json: ViaCepResponse = await res.json();
        if (!json.erro) {
          setData((prev) => ({
            ...prev,
            rua: json.logradouro ?? prev.rua,
            bairro: json.bairro ?? prev.bairro,
            cidade:
              json.localidade && json.uf
                ? `${json.localidade} - ${json.uf}`
                : prev.cidade,
          }));
        }
      } catch {
        // silently ignore CEP lookup failures
      }
    },
    [setField],
  );

  const marcarTermosLidos = useCallback(() => setTermosLidos(true), []);

  const validate = useCallback((): CadastroFormErrors => {
    const newErrors: CadastroFormErrors = {};

    if (!isRequiredFilled(data.nome))
      newErrors.nome = "Por favor, informe o nome completo.";
    if (!isValidCpf(data.cpf)) newErrors.cpf = "CPF inválido.";
    if (!isValidCep(data.cep)) newErrors.cep = "CEP inválido.";
    if (!isRequiredFilled(data.rua)) newErrors.rua = "Informe a rua.";
    if (!isRequiredFilled(data.numero)) newErrors.numero = "Informe o número.";
    if (!isRequiredFilled(data.bairro)) newErrors.bairro = "Informe o bairro.";
    if (!isRequiredFilled(data.cidade)) newErrors.cidade = "Informe a cidade.";
    if (!isRequiredFilled(data.benNome))
      newErrors.benNome = "Informe o nome do beneficiário.";
    if (!isValidCpf(data.benCpf))
      newErrors.benCpf = "CPF do beneficiário inválido.";
    if (!data.benNasc)
      newErrors.benNasc = "Informe a data de nascimento.";
    if (!data.comoConheceu)
      newErrors.comoConheceu = "Por favor, conte como nos conheceu.";
    else if (
      data.comoConheceu === COMO_CONHECEU_OUTRO &&
      !isRequiredFilled(data.comoConheceuOutro)
    )
      newErrors.comoConheceuOutro = "Conte para nós onde nos conheceu.";
    if (!data.termosAceitos)
      newErrors.termos = "Você precisa aceitar os termos para continuar.";

    setErrors(newErrors);
    return newErrors;
  }, [data]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        scrollToFirstError(validationErrors);
        return;
      }

      const payload = {
        timestamp: new Date().toLocaleString("pt-BR"),
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
        comoConheceu:
          data.comoConheceu === COMO_CONHECEU_OUTRO
            ? `Outro — ${data.comoConheceuOutro.trim()}`
            : data.comoConheceu,
        pagamento: "",
        termos: "Aceito",
      };

      setSubmitting(true);
      try {
        const res = await fetch("/api/cadastro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const json: ScriptResponse = await res.json();
        if (json.result === "success") {
          setSubmitted(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          throw new Error(json.message ?? "Erro ao enviar cadastro");
        }
      } catch {
        alert(
          "Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.",
        );
      } finally {
        setSubmitting(false);
      }
    },
    [data, validate],
  );

  return {
    data,
    errors,
    submitting,
    submitted,
    termosLidos,
    setField,
    handleMaskedInput,
    handleCepChange,
    marcarTermosLidos,
    handleSubmit,
  };
}
