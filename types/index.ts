// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
  isExternal?: boolean
  isCta?: boolean
}

// ─── Sections ────────────────────────────────────────────────────────────────

export interface InfoCard {
  icon: string
  title: string
  description: string
}

export interface AreaCard {
  icon: string
  title: string
  description: string
}

export interface PlanoCard {
  nome: string
  valor: string | number
  moeda?: string
  period: string
  items: string[]
  highlighted?: boolean
}

export interface FaltaItem {
  number: number
  text: string
}

export interface ContatoItem {
  icon: string
  label: string
  href: string
  isExternal?: boolean
}

// ─── Cadastro Form ───────────────────────────────────────────────────────────

export type PaymentMode = 'sessao' | 'mensal' | ''

export interface CadastroFormData {
  nome: string
  cpf: string
  telefone: string
  email: string
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  complemento: string
  benNome: string
  benCpf: string
  benNasc: string
  pagamento: PaymentMode
  diaPreferido: number | null
  termosAceitos: boolean
}

export interface CadastroFormErrors {
  nome?: string
  cpf?: string
  cep?: string
  rua?: string
  numero?: string
  bairro?: string
  cidade?: string
  pagamento?: string
  termos?: string
}

// ─── Termo ───────────────────────────────────────────────────────────────────

export interface TermoSection {
  number: string
  title: string
  content: React.ReactNode
}

// ─── API ─────────────────────────────────────────────────────────────────────

export interface ScriptResponse {
  result: 'success' | 'error'
  message?: string
}
