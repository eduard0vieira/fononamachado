import { NextRequest, NextResponse } from "next/server";
import { appendSheetRow, type CadastroRow } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<CadastroRow>;

    if (!body.nome || !body.cpf) {
      return NextResponse.json(
        { result: "error", message: "Campos obrigatórios ausentes." },
        { status: 400 },
      );
    }

    const row: CadastroRow = {
      timestamp: body.timestamp ?? new Date().toLocaleString("pt-BR"),
      nome: body.nome ?? "",
      cpf: body.cpf ?? "",
      telefone: body.telefone ?? "",
      email: body.email ?? "",
      cep: body.cep ?? "",
      rua: body.rua ?? "",
      numero: body.numero ?? "",
      bairro: body.bairro ?? "",
      cidade: body.cidade ?? "",
      complemento: body.complemento ?? "",
      benNome: body.benNome ?? "",
      benCpf: body.benCpf ?? "",
      benNasc: body.benNasc ?? "",
      pagamento: body.pagamento ?? "",
      termos: body.termos ?? "",
    };

    await appendSheetRow(row);

    return NextResponse.json({ result: "success" });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Erro interno do servidor.";
    return NextResponse.json(
      { result: "error", message },
      { status: 500 },
    );
  }
}
