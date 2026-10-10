import { readFileSync } from "node:fs";
import path from "node:path";
import {
  DOMICILIO_ATENDIMENTOS,
  NUMEROS_ATUALIZADO_EM,
  TOTAL_ATENDIMENTOS,
  TOTAL_PESSOAS,
  formatarNumero,
} from "@/lib/perfil";

/**
 * /llms.txt — o resumo do consultório para assistentes de IA.
 *
 * O texto fica em lib/llms.txt; aqui só entram os números, que vêm da mesma
 * fonte dos cards e do FAQ (lib/perfil.ts). Gerado no build, como arquivo
 * estático: a cada atualização semanal dos números, o deploy refaz.
 */
export const dynamic = "force-static";

export function GET() {
  const [ano, mes, dia] = NUMEROS_ATUALIZADO_EM.split("-");
  const texto = readFileSync(path.join(process.cwd(), "lib", "llms.txt"), "utf8")
    .replaceAll("{{ATENDIMENTOS}}", formatarNumero(TOTAL_ATENDIMENTOS))
    .replaceAll("{{PESSOAS}}", formatarNumero(TOTAL_PESSOAS))
    .replaceAll("{{DOMICILIO}}", formatarNumero(DOMICILIO_ATENDIMENTOS))
    .replaceAll("{{ATUALIZADO_EM}}", `${dia}/${mes}/${ano}`);

  return new Response(texto, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
