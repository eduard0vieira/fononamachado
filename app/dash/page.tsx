import type { Metadata } from "next";
import Dashboard from "@/components/dash/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard — Nathália Machado Fonoaudióloga",
  robots: { index: false, follow: false },
};

export default function DashPage() {
  return <Dashboard />;
}
