"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import type { Case } from "@/types/case";

export default function AdminCasesPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCases() {
      const supabase = createClient();
      const { data } = await supabase
        .from("cases")
        .select("*")
        .order("published_at", { ascending: false });
      setCases(data ?? []);
      setLoading(false);
    }
    fetchCases();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Weet je zeker dat je deze case wilt verwijderen?")) return;
    const supabase = createClient();
    await supabase.from("cases").delete().eq("id", id);
    setCases((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Cases</h1>
        <Link
          href="/admin/cases/new"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Nieuwe case
        </Link>
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-text-muted">Laden...</p>
      ) : cases.length === 0 ? (
        <p className="mt-8 text-sm text-text-muted">
          Nog geen cases. Voeg je eerste case toe.
        </p>
      ) : (
        <div className="mt-8 divide-y divide-border rounded-xl border border-border">
          {cases.map((c) => (
            <div key={c.id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium text-primary">{c.title}</p>
                <p className="text-sm text-text-muted">{c.client}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/cases/${c.slug}/edit`}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:text-primary"
                >
                  Bewerken
                </Link>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
                >
                  Verwijderen
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
