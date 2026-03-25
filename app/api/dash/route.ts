import { NextRequest, NextResponse } from "next/server";
import { fetchSheetData } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body as { password?: string };

    if (!password || password !== process.env.DASH_PASS) {
      return NextResponse.json(
        { error: "Senha incorreta." },
        { status: 401 },
      );
    }

    const rows = await fetchSheetData();

    return NextResponse.json({ rows });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Erro interno do servidor.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
