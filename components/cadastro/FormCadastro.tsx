'use client'

import { useCadastroForm } from '@/hooks/useCadastroForm'
import { cn } from '@/lib/utils'

const fieldBase =
  'w-full border border-cream-alt rounded-lg px-3.5 py-2.5 font-sans text-[0.88rem] font-light text-ink bg-cream outline-none transition-all duration-200 focus:border-honey focus:shadow-[0_0_0_3px_rgba(196,131,74,0.12)] focus:bg-white'

const fieldError = 'border-red-500'

interface FieldProps {
  label: string
  required?: boolean
  optional?: boolean
  error?: string
  children: React.ReactNode
}

function Field({ label, required, optional, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-ink-muted">
        {label}
        {required && <span className="text-honey ml-0.5">*</span>}
        {optional && (
          <span className="text-[0.65rem] text-ink-muted/70 normal-case tracking-normal font-light ml-1">
            (opcional)
          </span>
        )}
      </label>
      {children}
      {error && <p className="text-[0.72rem] text-red-500">{error}</p>}
    </div>
  )
}

function SectionCard({ title, subtitle, icon, children }: {
  title: string
  subtitle?: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl shadow-card px-9 py-8 mb-5">
      <div className="flex items-center gap-2.5 font-serif text-xl font-medium text-forest tracking-wide uppercase mb-1.5">
        <span className="text-honey">{icon}</span>
        {title}
      </div>
      {subtitle && (
        <p className="text-[0.8rem] text-ink-muted font-light leading-[1.5] mb-6">{subtitle}</p>
      )}
      {children}
    </div>
  )
}

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const CardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const DocIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
  </svg>
)

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

export default function FormCadastro() {
  const {
    data,
    errors,
    submitting,
    submitted,
    setField,
    handleMaskedInput,
    handleCepChange,
    handlePaymentChange,
    handleSubmit,
  } = useCadastroForm()

  if (submitted) {
    return (
      <div className="bg-forest rounded-xl px-10 py-12 text-center mb-5">
        <div className="text-4xl mb-4">✅</div>
        <h2 className="font-serif text-[1.8rem] font-normal text-white mb-3">
          Cadastro enviado com sucesso!
        </h2>
        <p className="text-[0.88rem] text-white/75 leading-[1.7]">
          Obrigada! Seus dados foram recebidos.
          <br />
          Em breve entraremos em contato pelo WhatsApp para confirmar os detalhes do atendimento.
        </p>
      </div>
    )
  }

  return (
    <form id="cadastroForm" onSubmit={handleSubmit} noValidate>
      {/* 1. Responsável financeiro */}
      <SectionCard
        title="Responsável Financeiro"
        subtitle="Dados de quem realizará o pagamento e constará na nota fiscal."
        icon={<UserIcon />}
      >
        <div className="grid gap-4">
          <Field label="Nome completo" required error={errors.nome}>
            <input
              type="text"
              value={data.nome}
              onChange={(e) => setField('nome', e.target.value)}
              placeholder="Nome do responsável financeiro"
              autoComplete="name"
              className={cn(fieldBase, errors.nome && fieldError)}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="CPF" required error={errors.cpf}>
              <input
                type="text"
                value={data.cpf}
                onChange={(e) => handleMaskedInput('cpf', e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                className={cn(fieldBase, errors.cpf && fieldError)}
              />
            </Field>
            <Field label="Telefone / WhatsApp" optional>
              <input
                type="tel"
                value={data.telefone}
                onChange={(e) => handleMaskedInput('telefone', e.target.value)}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className={fieldBase}
              />
            </Field>
          </div>

          <Field label="E-mail" optional>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setField('email', e.target.value)}
              placeholder="seu@email.com"
              className={fieldBase}
            />
          </Field>
        </div>

        <div className="h-px bg-cream-alt my-5" />

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 mb-4">
          <Field label="CEP" required error={errors.cep}>
            <input
              type="text"
              value={data.cep}
              onChange={(e) => handleCepChange(e.target.value)}
              placeholder="00000-000"
              maxLength={9}
              className={cn(fieldBase, errors.cep && fieldError)}
            />
          </Field>
          <Field label="Rua / Logradouro" required error={errors.rua}>
            <input
              type="text"
              value={data.rua}
              onChange={(e) => setField('rua', e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.rua && fieldError)}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Número" required error={errors.numero}>
            <input
              type="text"
              value={data.numero}
              onChange={(e) => setField('numero', e.target.value)}
              placeholder="Nº"
              className={cn(fieldBase, errors.numero && fieldError)}
            />
          </Field>
          <Field label="Bairro" required error={errors.bairro}>
            <input
              type="text"
              value={data.bairro}
              onChange={(e) => setField('bairro', e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.bairro && fieldError)}
            />
          </Field>
          <Field label="Cidade / UF" required error={errors.cidade}>
            <input
              type="text"
              value={data.cidade}
              onChange={(e) => setField('cidade', e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.cidade && fieldError)}
            />
          </Field>
          <div className="sm:col-span-3">
            <Field
              label="Complemento"
              optional
            >
              <input
                type="text"
                value={data.complemento}
                onChange={(e) => setField('complemento', e.target.value)}
                placeholder="Apto, bloco, referência..."
                className={fieldBase}
              />
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* 2. Beneficiário */}
      <SectionCard
        title="Beneficiário do Atendimento"
        subtitle="Quem irá receber o atendimento fonoaudiológico. Pode ser o próprio responsável ou outra pessoa."
        icon={<UsersIcon />}
      >
        <div className="grid gap-4">
          <Field label="Nome completo do beneficiário" optional>
            <input
              type="text"
              value={data.benNome}
              onChange={(e) => setField('benNome', e.target.value)}
              placeholder="Nome de quem receberá o atendimento"
              className={fieldBase}
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="CPF do beneficiário" optional>
              <input
                type="text"
                value={data.benCpf}
                onChange={(e) => handleMaskedInput('benCpf', e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                className={fieldBase}
              />
            </Field>
            <Field label="Data de nascimento" optional>
              <input
                type="date"
                value={data.benNasc}
                onChange={(e) => setField('benNasc', e.target.value)}
                className={fieldBase}
              />
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* 3. Pagamento */}
      <SectionCard
        title="Modalidade de Pagamento"
        subtitle="Escolha como prefere organizar os pagamentos. Aceitamos Pix, dinheiro e cartão."
        icon={<CardIcon />}
      >
        <div className="flex flex-col gap-3">
          {(['sessao', 'mensal'] as const).map((mode) => (
            <label
              key={mode}
              className={cn(
                'flex items-start gap-3.5 bg-cream border rounded-lg px-4 py-4 cursor-pointer transition-all duration-200',
                data.pagamento === mode
                  ? 'border-honey bg-honey/5'
                  : 'border-cream-alt hover:border-honey-light',
              )}
            >
              <input
                type="radio"
                name="pagamento"
                value={mode}
                checked={data.pagamento === mode}
                onChange={() => handlePaymentChange(mode)}
                className="mt-0.5 w-4 h-4 accent-honey"
              />
              <div>
                <p className="text-[0.88rem] font-medium text-ink mb-0.5">
                  {mode === 'sessao' ? 'Pagamento por sessão' : 'Pagamento mensal'}
                </p>
                <p className="text-[0.78rem] text-ink-muted font-light leading-[1.5]">
                  {mode === 'sessao'
                    ? 'Cada sessão paga individualmente, sempre até o dia do atendimento. Sem compromisso mensal.'
                    : 'Pagamento em data fixa todo mês. Escolha o dia que funciona melhor para você.'}
                </p>
              </div>
            </label>
          ))}
        </div>

        {data.pagamento === 'mensal' && (
          <div className="mt-4 p-4 bg-cream border border-honey-light rounded-lg">
            <p className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-ink-muted mb-3 block">
              Escolha o dia preferido para pagamento mensal
            </p>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 28 }, (_, i) => i + 1).map((dia) => (
                <button
                  key={dia}
                  type="button"
                  onClick={() => setField('diaPreferido', dia)}
                  className={cn(
                    'w-9 h-9 rounded-full border text-[0.82rem] font-normal transition-all duration-200 flex items-center justify-center',
                    data.diaPreferido === dia
                      ? 'bg-honey border-honey text-white font-medium'
                      : 'bg-white border-cream-alt text-ink-soft hover:border-honey hover:text-honey',
                  )}
                >
                  {dia}
                </button>
              ))}
            </div>
            {data.diaPreferido && (
              <p className="mt-2.5 text-[0.8rem] text-forest font-normal">
                Dia {data.diaPreferido} de cada mês
              </p>
            )}
          </div>
        )}

        {errors.pagamento && (
          <p className="text-[0.72rem] text-red-500 mt-2">{errors.pagamento}</p>
        )}
      </SectionCard>

      {/* 4. Termos */}
      <SectionCard title="Aceite dos Termos" icon={<DocIcon />}>
        <label
          className={cn(
            'flex items-start gap-3.5 p-5 rounded-lg cursor-pointer transition-all duration-200 border',
            errors.termos ? 'border-red-400 bg-red-50' : 'border-honey-light bg-honey/5',
          )}
        >
          <input
            type="checkbox"
            checked={data.termosAceitos}
            onChange={(e) => setField('termosAceitos', e.target.checked)}
            className="mt-0.5 w-5 h-5 accent-honey flex-shrink-0"
          />
          <p className="text-[0.85rem] font-light text-ink-soft leading-[1.6]">
            Declaro que li e estou de acordo com os{' '}
            <a
              href="/termo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline"
            >
              Termos de Atendimento
            </a>{' '}
            da Nathália Machado Fonoaudióloga, e que as informações fornecidas neste cadastro são
            verdadeiras.
          </p>
        </label>
        {errors.termos && (
          <p className="text-[0.72rem] text-red-500 mt-2">{errors.termos}</p>
        )}
      </SectionCard>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2.5 bg-forest text-white rounded-lg py-4 text-[0.88rem] font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(38,77,59,0.3)] disabled:bg-sage-light disabled:cursor-not-allowed disabled:transform-none mt-2"
      >
        <SendIcon />
        {submitting ? 'Enviando...' : 'Enviar Cadastro'}
      </button>
    </form>
  )
}
