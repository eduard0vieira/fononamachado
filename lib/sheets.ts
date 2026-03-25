import { google } from "googleapis";

export interface CadastroRow {
  timestamp: string;
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
  pagamento: string;
  termos: string;
}

function getSheetId() {
  const id = process.env.GOOGLE_SHEET_ID;
  if (!id || id === "COLE_O_ID_DA_PLANILHA_AQUI") {
    throw new Error("GOOGLE_SHEET_ID não configurado no .env.local");
  }
  return id;
}

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !key) {
    throw new Error(
      "Variáveis GOOGLE_SERVICE_ACCOUNT_EMAIL e GOOGLE_PRIVATE_KEY não configuradas.",
    );
  }

  return new google.auth.JWT({
    email,
    key: key.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function fetchSheetData(): Promise<CadastroRow[]> {
  const sheetId = getSheetId();
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Página1!A:P",
  });

  const rawRows = res.data.values;
  if (!rawRows || rawRows.length < 2) return [];

  const rows: CadastroRow[] = [];

  for (let i = 1; i < rawRows.length; i++) {
    const cols = rawRows[i];
    if (!cols || cols.length < 2) continue;

    rows.push({
      timestamp: cols[0] ?? "",
      nome: cols[1] ?? "",
      cpf: cols[2] ?? "",
      telefone: cols[3] ?? "",
      email: cols[4] ?? "",
      cep: cols[5] ?? "",
      rua: cols[6] ?? "",
      numero: cols[7] ?? "",
      bairro: cols[8] ?? "",
      cidade: cols[9] ?? "",
      complemento: cols[10] ?? "",
      benNome: cols[11] ?? "",
      benCpf: cols[12] ?? "",
      benNasc: cols[13] ?? "",
      pagamento: cols[14] ?? "",
      termos: cols[15] ?? "",
    });
  }

  return rows;
}

export async function appendSheetRow(row: CadastroRow): Promise<void> {
  const sheetId = getSheetId();
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Página1!A:P",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          row.timestamp,
          row.nome,
          row.cpf,
          row.telefone,
          row.email,
          row.cep,
          row.rua,
          row.numero,
          row.bairro,
          row.cidade,
          row.complemento,
          row.benNome,
          row.benCpf,
          row.benNasc,
          row.pagamento,
          row.termos,
        ],
      ],
    },
  });
}
