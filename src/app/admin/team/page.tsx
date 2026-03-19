"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";
import type { TeamMember } from "@/types/admin";

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      const supabase = createClient();
      const { data } = await supabase
        .from("team")
        .select("*")
        .order("order_index");
      setMembers(data ?? []);
      setLoading(false);
    }
    fetchTeam();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Weet je zeker dat je dit teamlid wilt verwijderen?")) return;
    const supabase = createClient();
    await supabase.from("team").delete().eq("id", id);
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Team</h1>
        <Link
          href="/admin/team/new"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Nieuw teamlid
        </Link>
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-text-muted">Laden...</p>
      ) : members.length === 0 ? (
        <p className="mt-8 text-sm text-text-muted">
          Nog geen teamleden. Voeg je eerste teamlid toe.
        </p>
      ) : (
        <div className="mt-8 divide-y divide-border rounded-xl border border-border">
          {members.map((m) => (
            <div key={m.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                {m.photo_url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={m.photo_url}
                    alt={m.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent">
                    {m.name
                      .split(" ")
                      .filter((p) => p[0] === p[0].toUpperCase())
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}
                <div>
                  <p className="font-medium text-primary">{m.name}</p>
                  <p className="text-sm text-text-muted">{m.email}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/team/${m.id}/edit`}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:text-primary"
                >
                  Bewerken
                </Link>
                <button
                  onClick={() => handleDelete(m.id)}
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
