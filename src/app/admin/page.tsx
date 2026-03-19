"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

interface Stats {
  cases: number;
  pages: number;
  diensten: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ cases: 0, pages: 0, diensten: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const supabase = createClient();
      const [casesRes, pagesRes, dienstenRes] = await Promise.all([
        supabase.from("cases").select("id", { count: "exact", head: true }),
        supabase.from("pages").select("id", { count: "exact", head: true }),
        supabase.from("diensten").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        cases: casesRes.count ?? 0,
        pages: pagesRes.count ?? 0,
        diensten: dienstenRes.count ?? 0,
      });
      setLoading(false);
    }
    fetchStats();
  }, []);

  const cards = [
    { label: "Cases", count: stats.cases, href: "/admin/cases" },
    { label: "Pagina's", count: stats.pages, href: "/admin/paginas" },
    { label: "Diensten", count: stats.diensten, href: "/admin/diensten" },
  ];

  const shortcuts = [
    { label: "Nieuwe case", href: "/admin/cases/new" },
    { label: "Nieuwe pagina", href: "/admin/paginas/new" },
    { label: "Nieuwe dienst", href: "/admin/diensten/new" },
    { label: "Media uploaden", href: "/admin/media" },
    { label: "Navigatie aanpassen", href: "/admin/navigatie" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Dashboard</h1>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-border p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-sm text-text-muted">{card.label}</p>
            <p className="mt-1 text-3xl font-bold text-primary">
              {loading ? "—" : card.count}
            </p>
          </Link>
        ))}
      </div>

      {/* Shortcuts */}
      <h2 className="mt-12 text-lg font-semibold text-primary">
        Snelkoppelingen
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {shortcuts.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
