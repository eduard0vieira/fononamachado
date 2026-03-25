"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { CadastroRow } from "@/lib/sheets";
import { cn } from "@/lib/utils";

const SESSION_KEY = "dash_pass";

function useAuth() {
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) setPassword(saved);
  }, []);

  const login = useCallback((pass: string) => {
    sessionStorage.setItem(SESSION_KEY, pass);
    setPassword(pass);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setPassword(null);
  }, []);

  return { password, login, logout };
}

async function fetchDashData(password: string) {
  const res = await fetch("/api/dash", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error ?? `Erro ${res.status}`);
  }

  return json.rows as CadastroRow[];
}

function LoginScreen({
  onLogin,
}: {
  onLogin: (pass: string) => void;
}) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await fetchDashData(pass);
      onLogin(pass);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao conectar.",
      );
      setPass("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 pt-[72px]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-forest/10 bg-white p-8 shadow-card"
      >
        <h1 className="mb-1 font-serif text-2xl font-light text-forest">
          Dashboard
        </h1>
        <p className="mb-6 text-[0.82rem] font-light text-ink-muted">
          Digite a senha para acessar os cadastros.
        </p>

        <label className="mb-1.5 block text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink-muted">
          Senha
        </label>
        <input
          type="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
            setError(null);
          }}
          placeholder="••••••••"
          autoFocus
          className={cn(
            "w-full rounded-lg border bg-cream px-3.5 py-2.5 text-[0.88rem] font-light text-ink outline-none transition-all duration-200",
            "focus:border-honey focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,169,110,0.12)]",
            error ? "border-red-400" : "border-cream-alt",
          )}
        />
        {error && (
          <p className="mt-1.5 text-[0.72rem] text-red-500">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-lg bg-forest py-2.5 text-[0.85rem] font-medium tracking-wide text-white transition-colors hover:bg-forest-light disabled:opacity-50"
        >
          {loading ? "Verificando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-forest/10 bg-white px-5 py-4 shadow-card">
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </p>
      <p className="mt-1 font-serif text-[1.8rem] font-light leading-none text-forest">
        {value}
      </p>
      {sub && (
        <p className="mt-1 text-[0.72rem] font-light text-ink-muted">{sub}</p>
      )}
    </div>
  );
}

function getStats(rows: CadastroRow[]) {
  const total = rows.length;

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let thisMonth = 0;
  let sessao = 0;
  let mensal = 0;

  for (const row of rows) {
    const dateParts = row.timestamp.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (dateParts) {
      const month = parseInt(dateParts[1], 10) - 1;
      const year = parseInt(dateParts[2], 10);
      if (month === currentMonth && year === currentYear) thisMonth++;
    }

    if (row.pagamento.toLowerCase().includes("mensal")) mensal++;
    else sessao++;
  }

  const modalidade =
    total === 0
      ? "—"
      : mensal > sessao
        ? "Mensal"
        : mensal === sessao
          ? "Empate"
          : "Por sessão";

  return { total, thisMonth, modalidade };
}

function InfoIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-2 border-b border-cream-alt/60 py-2.5 last:border-0 sm:grid-cols-[10rem_1fr]">
      <span className="text-[0.72rem] font-medium uppercase tracking-[0.1em] text-ink-muted">
        {label}
      </span>
      <span className="text-[0.84rem] font-light text-ink">
        {value || "—"}
      </span>
    </div>
  );
}

function DetailModal({
  row,
  onClose,
}: {
  row: CadastroRow;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-forest/30 backdrop-blur-[3px]"
        onClick={onClose}
        aria-label="Fechar modal"
      />

      <div className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-forest/10 bg-white shadow-lg">
        <div className="sticky top-0 flex items-center justify-between border-b border-cream-alt bg-white px-6 py-4">
          <h3 className="font-serif text-lg font-light text-forest">
            Detalhes do cadastro
          </h3>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-cream hover:text-ink"
            aria-label="Fechar"
          >
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
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4">
          <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-forest">
            Responsável financeiro
          </p>
          <DetailRow label="Data" value={row.timestamp} />
          <DetailRow label="Nome" value={row.nome} />
          <DetailRow label="CPF" value={row.cpf} />
          <DetailRow label="Telefone" value={row.telefone} />
          <DetailRow label="E-mail" value={row.email} />

          <div className="my-3 h-px bg-cream-alt" />
          <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-forest">
            Endereço
          </p>
          <DetailRow label="CEP" value={row.cep} />
          <DetailRow
            label="Rua"
            value={row.numero ? `${row.rua}, ${row.numero}` : row.rua}
          />
          <DetailRow label="Bairro" value={row.bairro} />
          <DetailRow label="Cidade" value={row.cidade} />
          <DetailRow label="Complemento" value={row.complemento} />

          <div className="my-3 h-px bg-cream-alt" />
          <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-forest">
            Beneficiário
          </p>
          <DetailRow label="Nome" value={row.benNome} />
          <DetailRow label="CPF" value={row.benCpf} />
          <DetailRow label="Nascimento" value={row.benNasc} />

          <div className="my-3 h-px bg-cream-alt" />
          <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-forest">
            Pagamento
          </p>
          <DetailRow label="Modalidade" value={row.pagamento} />
          <DetailRow label="Termos" value={row.termos} />
        </div>
      </div>
    </div>
  );
}

function DataTable({ rows }: { rows: CadastroRow[] }) {
  const [selected, setSelected] = useState<CadastroRow | null>(null);

  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-forest/10 bg-white px-6 py-12 text-center shadow-card">
        <p className="text-[0.88rem] font-light text-ink-muted">
          Nenhum cadastro encontrado na planilha.
        </p>
      </div>
    );
  }

  return (
    <>
      {selected && (
        <DetailModal row={selected} onClose={() => setSelected(null)} />
      )}

      <div className="overflow-x-auto rounded-xl border border-forest/10 bg-white shadow-card">
        <table className="w-full min-w-[750px] text-left">
          <thead>
            <tr className="border-b border-cream-alt bg-cream/50">
              {[
                "Data",
                "Responsável",
                "CPF",
                "Beneficiário",
                "Telefone",
                "Pagamento",
                "",
              ].map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink-muted"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-cream-alt/60 transition-colors last:border-0 hover:bg-cream/30"
              >
                <td className="whitespace-nowrap px-4 py-3 text-[0.8rem] font-light text-ink-muted">
                  {row.timestamp}
                </td>
                <td className="px-4 py-3 text-[0.82rem] font-normal text-ink">
                  {row.nome}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-[0.8rem] font-light text-ink-muted">
                  {row.cpf}
                </td>
                <td className="px-4 py-3 text-[0.82rem] font-light text-ink-soft">
                  {row.benNome || "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-[0.8rem] font-light text-ink-muted">
                  {row.telefone || "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span
                    className={cn(
                      "inline-block rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium",
                      row.pagamento.toLowerCase().includes("mensal")
                        ? "bg-forest/10 text-forest"
                        : "bg-honey/15 text-honey",
                    )}
                  >
                    {row.pagamento}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <button
                    onClick={() => setSelected(row)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-forest/5 hover:text-forest"
                    title="Ver detalhes"
                  >
                    <InfoIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function DashboardContent({
  password,
  onLogout,
}: {
  password: string;
  onLogout: () => void;
}) {
  const [rows, setRows] = useState<CadastroRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasLoaded = useRef(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDashData(password);
      setRows(data.reverse());
    } catch (err) {
      if (err instanceof Error && err.message.includes("Senha")) {
        onLogout();
        return;
      }
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, [password, onLogout]);

  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;
    load();
  }, [load]);

  const stats = getStats(rows);

  return (
    <div className="mx-auto min-h-[calc(100vh-72px)] max-w-5xl px-4 pb-8 pt-[calc(72px+2rem)] sm:px-6">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-light text-forest">
            Dashboard
          </h1>
          <p className="text-[0.82rem] font-light text-ink-muted">
            Cadastros recebidos via formulário
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={load}
            disabled={loading}
            className="inline-flex items-center gap-1.5 rounded-lg border border-forest/15 px-3.5 py-2 text-[0.78rem] font-medium text-forest transition-colors hover:bg-forest/5 disabled:opacity-50"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={loading ? "animate-spin" : ""}
              aria-hidden="true"
            >
              <path d="M21 12a9 9 0 1 1-6.22-8.56" />
            </svg>
            Atualizar
          </button>
          <button
            onClick={onLogout}
            className="rounded-lg border border-cream-alt px-3.5 py-2 text-[0.78rem] font-medium text-ink-muted transition-colors hover:border-red-300 hover:text-red-500"
          >
            Sair
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-[0.84rem] text-red-600">
          {error}
        </div>
      )}

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard label="Total de cadastros" value={stats.total} />
        <StatCard label="Este mês" value={stats.thisMonth} />
        <StatCard label="Modalidade mais escolhida" value={stats.modalidade} />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-forest/20 border-t-forest" />
        </div>
      ) : (
        <DataTable rows={rows} />
      )}
    </div>
  );
}

export default function Dashboard() {
  const { password, login, logout } = useAuth();

  if (!password) return <LoginScreen onLogin={login} />;
  return <DashboardContent password={password} onLogout={logout} />;
}
