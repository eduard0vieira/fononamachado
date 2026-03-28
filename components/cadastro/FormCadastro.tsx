"use client";

import { useEffect } from "react";
import { useCadastroForm } from "@/hooks/useCadastroForm";
import CadastroTermosExpandable from "@/components/cadastro/CadastroTermosExpandable";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full border border-cream-alt rounded-lg px-3.5 py-2.5 font-sans text-[0.88rem] font-light text-ink bg-cream outline-none transition-all duration-200 focus:border-honey focus:shadow-[0_0_0_3px_rgba(201,169,110,0.12)] focus:bg-white";

const fieldError = "border-red-500";

interface FieldProps {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
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
  );
}

function SectionCard({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-card px-9 py-8 mb-5">
      <div className="flex items-center gap-2.5 font-serif text-xl font-medium text-forest tracking-wide uppercase mb-1.5">
        <span className="text-honey">{icon}</span>
        {title}
      </div>
      {subtitle && (
        <p className="text-[0.8rem] text-ink-muted font-light leading-[1.5] mb-6">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

const UserIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CardIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const DocIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
  </svg>
);


const SendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function FormCadastro({ onSubmitted }: { onSubmitted?: () => void }) {
  const {
    data,
    errors,
    submitting,
    submitted,
    benMesmoResponsavel,
    setField,
    handleMaskedInput,
    handleCepChange,
    handlePaymentChange,
    toggleBenMesmoResponsavel,
    handleSubmit,
  } = useCadastroForm();

  useEffect(() => {
    if (submitted) onSubmitted?.();
  }, [submitted]); // eslint-disable-line react-hooks/exhaustive-deps

  if (submitted) {
    return (
      <div className="bg-forest rounded-xl px-10 py-12 text-center mb-5">
        <div className="flex justify-center mb-5">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="16" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5" />
              <polyline
                points="11,18 16,23 25,13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h2 className="font-serif text-[1.8rem] font-normal text-white mb-3">
          Cadastro enviado com sucesso!
        </h2>
        <p className="text-[0.88rem] text-white/75 leading-[1.7]">
          Obrigada! Seus dados foram recebidos.
          <br />
          Em breve entraremos em contato pelo WhatsApp para confirmar os
          detalhes do atendimento.
        </p>
      </div>
    );
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
              onChange={(e) => setField("nome", e.target.value)}
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
                onChange={(e) => handleMaskedInput("cpf", e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                className={cn(fieldBase, errors.cpf && fieldError)}
              />
            </Field>
            <Field label="Telefone / WhatsApp">
              <input
                type="tel"
                value={data.telefone}
                onChange={(e) => handleMaskedInput("telefone", e.target.value)}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className={fieldBase}
              />
            </Field>
          </div>

          <Field label="E-mail">
            <input
              type="email"
              value={data.email}
              onChange={(e) => setField("email", e.target.value)}
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
              onChange={(e) => setField("rua", e.target.value)}
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
              onChange={(e) => setField("numero", e.target.value)}
              placeholder="Nº"
              className={cn(fieldBase, errors.numero && fieldError)}
            />
          </Field>
          <Field label="Bairro" required error={errors.bairro}>
            <input
              type="text"
              value={data.bairro}
              onChange={(e) => setField("bairro", e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.bairro && fieldError)}
            />
          </Field>
          <Field label="Cidade / UF" required error={errors.cidade}>
            <input
              type="text"
              value={data.cidade}
              onChange={(e) => setField("cidade", e.target.value)}
              placeholder="Preenchido pelo CEP"
              className={cn(fieldBase, errors.cidade && fieldError)}
            />
          </Field>
          <div className="sm:col-span-3">
            <Field label="Complemento" optional>
              <input
                type="text"
                value={data.complemento}
                onChange={(e) => setField("complemento", e.target.value)}
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
        {/* Checkbox "mesmo responsável" */}
        <label
          className={cn(
            "flex items-center gap-3.5 rounded-xl border-2 px-5 py-4 cursor-pointer transition-all duration-200 mb-6",
            benMesmoResponsavel
              ? "border-forest bg-forest/5"
              : "border-cream-alt bg-cream hover:border-honey hover:bg-honey/5",
          )}
        >
          <div
            className={cn(
              "relative flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200",
              benMesmoResponsavel
                ? "border-forest bg-forest"
                : "border-stone-300 bg-white",
            )}
          >
            <input
              type="checkbox"
              checked={benMesmoResponsavel}
              onChange={(e) => toggleBenMesmoResponsavel(e.target.checked)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {benMesmoResponsavel && (
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="2,6 5,9 10,3" />
              </svg>
            )}
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-[0.88rem] font-medium leading-snug transition-colors duration-200",
                benMesmoResponsavel ? "text-forest" : "text-ink",
              )}
            >
              O beneficiário é o mesmo que o responsável financeiro
            </span>
            <span className="text-[0.75rem] text-ink-muted font-light mt-0.5">
              Nome e CPF serão preenchidos automaticamente
            </span>
          </div>
        </label>

        <div className="grid gap-4">
          {!benMesmoResponsavel && (
            <Field label="Nome completo do beneficiário" required error={errors.benNome}>
              <input
                type="text"
                value={data.benNome}
                onChange={(e) => setField("benNome", e.target.value)}
                placeholder="Nome de quem receberá o atendimento"
                className={cn(fieldBase, errors.benNome && fieldError)}
              />
            </Field>
          )}

          <div className={cn("grid gap-4", !benMesmoResponsavel && "grid-cols-1 sm:grid-cols-2")}>
            {!benMesmoResponsavel && (
              <Field label="CPF do beneficiário" required error={errors.benCpf}>
                <input
                  type="text"
                  value={data.benCpf}
                  onChange={(e) => handleMaskedInput("benCpf", e.target.value)}
                  placeholder="000.000.000-00"
                  maxLength={14}
                  className={cn(fieldBase, errors.benCpf && fieldError)}
                />
              </Field>
            )}
            <Field label="Data de nascimento" required error={errors.benNasc}>
              <input
                type="date"
                value={data.benNasc}
                onChange={(e) => setField("benNasc", e.target.value)}
                className={cn(fieldBase, errors.benNasc && fieldError)}
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
          {(["sessao", "mensal"] as const).map((mode) => (
            <label
              key={mode}
              className={cn(
                "flex items-start gap-3.5 bg-cream border rounded-lg px-4 py-4 cursor-pointer transition-all duration-200",
                data.pagamento === mode
                  ? "border-honey bg-honey/5"
                  : "border-cream-alt hover:border-honey-light",
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
                  {mode === "sessao"
                    ? "Pagamento por sessão"
                    : "Pagamento mensal"}
                </p>
                <p className="text-[0.78rem] text-ink-muted font-light leading-[1.5]">
                  {mode === "sessao"
                    ? "Cada sessão paga individualmente, sempre até o dia do atendimento. Sem compromisso mensal."
                    : "Pagamento em data fixa todo mês. Escolha o dia que funciona melhor para você."}
                </p>
              </div>
            </label>
          ))}
        </div>

        {data.pagamento === "mensal" && (
          <div className="mt-4 p-4 bg-cream border border-honey-light rounded-lg">
            <p className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-ink-muted mb-3 block">
              Escolha o dia preferido para pagamento mensal
            </p>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 28 }, (_, i) => i + 1).map((dia) => (
                <button
                  key={dia}
                  type="button"
                  onClick={() => setField("diaPreferido", dia)}
                  className={cn(
                    "w-9 h-9 rounded-full border text-[0.82rem] font-normal transition-all duration-200 flex items-center justify-center",
                    data.diaPreferido === dia
                      ? "bg-honey border-honey text-white font-medium"
                      : "bg-white border-cream-alt text-ink-soft hover:border-honey hover:text-honey",
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
        <CadastroTermosExpandable />

        <label
          className={cn(
            "flex items-start gap-3.5 p-5 rounded-lg cursor-pointer transition-all duration-200 border",
            errors.termos
              ? "border-red-400 bg-red-50"
              : "border-honey-light bg-honey/5",
          )}
        >
          <input
            type="checkbox"
            checked={data.termosAceitos}
            onChange={(e) => setField("termosAceitos", e.target.checked)}
            className="mt-0.5 w-5 h-5 accent-honey flex-shrink-0"
          />
          <p className="text-[0.85rem] font-light text-ink-soft leading-[1.6]">
            Declaro que li e estou de acordo com os{" "}
            <strong className="font-medium text-ink-soft">
              Termos de Atendimento
            </strong>{" "}
            (disponíveis no quadro acima ou na{" "}
            <a
              href="/termo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline underline-offset-2 hover:text-forest-light"
            >
              página dedicada
            </a>
            ) da Nathália Machado Fonoaudióloga, e que as informações
            fornecidas neste cadastro são verdadeiras.
          </p>
        </label>
        {errors.termos && (
          <p className="text-[0.72rem] text-red-500 mt-2">{errors.termos}</p>
        )}
      </SectionCard>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2.5 bg-[#8FAA8A] text-white rounded-lg py-4 text-[0.88rem] font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#7a9675] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(143,170,138,0.35)] disabled:bg-sage-light disabled:cursor-not-allowed disabled:transform-none mt-2"
      >
        <SendIcon />
        {submitting ? "Enviando..." : "Enviar Cadastro"}
      </button>
    </form>
  );
}
