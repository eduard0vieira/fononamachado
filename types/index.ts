// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  isCta?: boolean;
}

// ─── Sections ────────────────────────────────────────────────────────────────

export type InfoCardIconKey = "weekly" | "biweekly" | "home" | "session";

export interface InfoCard {
  iconKey: InfoCardIconKey;
  title: string;
  description: string;
}

export type AreaCardIconKey =
  | "childLanguage"
  | "adultLanguage"
  | "oro"
  | "dysphagia"
  | "assessment"
  | "family";

export interface AreaCard {
  iconKey: AreaCardIconKey;
  title: string;
  description: string;
}

export interface FaltaItem {
  number: number;
  text: string;
}

export type ContatoIconKind = "map" | "phone" | "instagram" | "mail";

export interface ContatoItem {
  kind: ContatoIconKind;
  label: string;
  href: string;
  isExternal?: boolean;
}

// ─── Cadastro Form ───────────────────────────────────────────────────────────

export type PaymentMode = "sessao" | "mensal" | "";

export interface CadastroFormData {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  complemento: string;
  benNome: string;
  benCpf: string;
  benNasc: string;
  pagamento: PaymentMode;
  diaPreferido: number | null;
  termosAceitos: boolean;
}

export interface CadastroFormErrors {
  nome?: string;
  cpf?: string;
  cep?: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  benNome?: string;
  benCpf?: string;
  benNasc?: string;
  pagamento?: string;
  termos?: string;
}

// ─── Termo ───────────────────────────────────────────────────────────────────

export interface TermoSection {
  number: string;
  title: string;
  content: React.ReactNode;
}

// ─── API ─────────────────────────────────────────────────────────────────────

export interface ScriptResponse {
  result: "success" | "error";
  message?: string;
}
