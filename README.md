# Nathália Machado — Fonoaudióloga

Site institucional e sistema de cadastro para a fonoaudióloga **Nathália Machado**, com atendimento em São Miguel Arcanjo — SP.

> **[fononamachado.com.br](https://fononamachado.com.br)**

---

## Visão geral

| Página | Rota | Descrição |
|--------|------|-----------|
| Landing page | `/` | Apresentação, áreas de atuação, localização e contato |
| Termos | `/termo` | Termos de atendimento (17 seções) |
| Cadastro | `/cadastro` | Formulário de cadastro de pacientes |
| Dashboard | `/dash` | Painel protegido por senha com cadastros recebidos |

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | **Next.js 15** (App Router) |
| Linguagem | **TypeScript** |
| UI | **Tailwind CSS 3** |
| Animações | **Motion** (Framer Motion) |
| Dados | **Google Sheets API** via Service Account |
| Deploy | **Vercel** |
| Fontes | **Jost** (corpo) · **Cormorant Garamond** (títulos) |

---

## Paleta de cores

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   FOREST (verde principal)                              │
│   ██ #5e7252  DEFAULT                                   │
│   ██ #8a9e7e  light                                     │
│                                                         │
│   SAGE (verde suave)                                    │
│   ██ #8a9e7e  DEFAULT                                   │
│   ██ #b8c9af  light                                     │
│   ██ #eef0eb  pale                                      │
│                                                         │
│   HONEY (dourado / destaque)                            │
│   ██ #c9a96e  DEFAULT                                   │
│   ██ #e2c99a  light                                     │
│   ██ #f5efe4  pale                                      │
│                                                         │
│   CREAM (fundo / papel)                                 │
│   ██ #faf8f0  DEFAULT                                   │
│   ██ #f0ede4  alt                                       │
│   ██ #fdfaf6  warm                                      │
│                                                         │
│   INK (texto)                                           │
│   ██ #2e2a24  DEFAULT                                   │
│   ██ #5a5248  soft                                      │
│   ██ #73695c  muted                                     │
│                                                         │
│   WHITE (branco quente)                                 │
│   ██ #fdfaf6                                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Estrutura do projeto

```
app/
├── api/
│   ├── cadastro/route.ts      # POST — grava cadastro na planilha
│   └── dash/route.ts          # POST — retorna dados (protegido por senha)
├── cadastro/page.tsx           # Formulário de cadastro
├── dash/page.tsx               # Dashboard
├── termo/page.tsx              # Termos de atendimento
├── layout.tsx                  # Layout global (Navbar + Footer)
├── page.tsx                    # Landing page
└── globals.css

components/
├── cadastro/                   # FormCadastro, ValoresCard
├── dash/                       # Dashboard (login + stats + tabela + modal)
├── layout/                     # Navbar, Footer, SiteContainer
├── motion/                     # Reveal, StaggerList, AnimatedDivider
├── sections/                   # Hero, Sobre, Áreas, Faltas, Localização
├── termo/                      # TermoBlocks, TermoSections, TermoPageHeader
├── ui/                         # Button, Logo, GoldRule, SectionLabel, etc.
└── WhatsAppFloat.tsx

hooks/
└── useCadastroForm.ts          # Lógica do formulário (validação, masks, submit)

lib/
├── constants.ts                # URLs, telefone, endereço
├── masks.ts                    # Máscaras (CPF, telefone, CEP)
├── motion.ts                   # Presets de animação
├── sheets.ts                   # Google Sheets API (leitura + escrita)
├── siteLayout.ts               # Padding e breakpoints
├── utils.ts                    # cn() — clsx + tailwind-merge
└── validators.ts               # Validações (CPF, CEP, campos obrigatórios)

types/
└── index.ts                    # Interfaces e tipos do projeto
```

---

## Variáveis de ambiente

Criar um arquivo `.env.local` na raiz (não vai pro Git):

```env
DASH_PASS=sua_senha_do_dashboard
GOOGLE_SHEET_ID=id_da_planilha
GOOGLE_SERVICE_ACCOUNT_EMAIL=email@projeto.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Na Vercel, as mesmas variáveis devem ser adicionadas em **Settings > Environment Variables**.

---

## Desenvolvimento

```bash
# Instalar dependências
clicar control + j para abrir o terminal e rodar yarn dev

yarn install

# Rodar em desenvolvimento
yarn dev

# Build de produção
yarn build && yarn start
```

---

## Deploy

O deploy é feito automaticamente pela **Vercel** a cada push na branch `main`.

---

## Licença

Projeto privado — todos os direitos reservados.
