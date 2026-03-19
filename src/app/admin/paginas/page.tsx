"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import type { Page } from "@/types/admin";

export default function AdminPaginasPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPages() {
      const supabase = createClient();
      const { data } = await supabase
        .from("pages")
        .select("*")
        .order("created_at", { ascending: false });
      setPages(data ?? []);
      setLoading(false);
    }
    fetchPages();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Weet je zeker dat je deze pagina wilt verwijderen?")) return;
    const supabase = createClient();
    await supabase.from("pages").delete().eq("id", id);
    setPages((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Pagina&apos;s</h1>
        <Link
          href="/admin/paginas/new"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Nieuwe pagina
        </Link>
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-text-muted">Laden...</p>
      ) : pages.length === 0 ? (
        <p className="mt-8 text-sm text-text-muted">Nog geen pagina&apos;s.</p>
      ) : (
        <div className="mt-8 divide-y divide-border rounded-xl border border-border">
          {pages.map((p) => (
            <div key={p.id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium text-primary">{p.title}</p>
                <p className="text-sm text-text-muted">
                  /{p.slug}
                  <span
                    className={`ml-3 inline-block rounded-full px-2 py-0.5 text-xs ${
                      p.published
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-text-muted"
                    }`}
                  >
                    {p.published ? "Gepubliceerd" : "Concept"}
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/paginas/${p.slug}/edit`}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:text-primary"
                >
                  Bewerken
                </Link>
                <button
                  onClick={() => handleDelete(p.id)}
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
