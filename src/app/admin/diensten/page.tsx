"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import type { Dienst } from "@/types/admin";

export default function AdminDienstenPage() {
  const [diensten, setDiensten] = useState<Dienst[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDiensten();
  }, []);

  async function fetchDiensten() {
    const supabase = createClient();
    const { data } = await supabase
      .from("diensten")
      .select("*")
      .order("order_index", { ascending: true });
    setDiensten(data ?? []);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Weet je zeker dat je deze dienst wilt verwijderen?")) return;
    const supabase = createClient();
    await supabase.from("diensten").delete().eq("id", id);
    setDiensten((prev) => prev.filter((d) => d.id !== id));
  }

  async function handleMove(index: number, direction: "up" | "down") {
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= diensten.length) return;

    const updated = [...diensten];
    [updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]];

    const supabase = createClient();
    await Promise.all(
      updated.map((d, i) =>
        supabase.from("diensten").update({ order_index: i }).eq("id", d.id)
      )
    );

    setDiensten(updated);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Diensten</h1>
        <Link
          href="/admin/diensten/new"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Nieuwe dienst
        </Link>
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-text-muted">Laden...</p>
      ) : diensten.length === 0 ? (
        <p className="mt-8 text-sm text-text-muted">Nog geen diensten.</p>
      ) : (
        <div className="mt-8 divide-y divide-border rounded-xl border border-border">
          {diensten.map((d, i) => (
            <div key={d.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => handleMove(i, "up")}
                    disabled={i === 0}
                    className="text-xs text-text-muted hover:text-primary disabled:opacity-30"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => handleMove(i, "down")}
                    disabled={i === diensten.length - 1}
                    className="text-xs text-text-muted hover:text-primary disabled:opacity-30"
                  >
                    ▼
                  </button>
                </div>
                <div>
                  <p className="font-medium text-primary">
                    {d.icon && <span className="mr-2">{d.icon}</span>}
                    {d.title}
                  </p>
                  <p className="text-sm text-text-muted">
                    /{d.slug}
                    <span
                      className={`ml-3 inline-block rounded-full px-2 py-0.5 text-xs ${
                        d.published
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-text-muted"
                      }`}
                    >
                      {d.published ? "Actief" : "Inactief"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/diensten/${d.slug}/edit`}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:text-primary"
                >
                  Bewerken
                </Link>
                <button
                  onClick={() => handleDelete(d.id)}
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
