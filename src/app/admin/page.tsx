"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";
import type { Case } from "@/types/case";
import Link from "next/link";

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      onLogin();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4">
      <h2 className="text-xl font-semibold text-primary">Admin Login</h2>

      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-primary">
          Wachtwoord
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
      >
        {loading ? "Inloggen..." : "Inloggen"}
      </button>
    </form>
  );
}

function CasesDashboard({ onLogout }: { onLogout: () => void }) {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCases();
  }, []);

  async function fetchCases() {
    const supabase = createClient();
    const { data } = await supabase
      .from("cases")
      .select("*")
      .order("published_at", { ascending: false });

    setCases(data ?? []);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Weet je zeker dat je deze case wilt verwijderen?")) return;

    const supabase = createClient();
    await supabase.from("cases").delete().eq("id", id);
    setCases((prev) => prev.filter((c) => c.id !== id));
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    onLogout();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-primary">Cases beheren</h2>
        <div className="flex gap-3">
          <Link
            href="/admin/cases/new"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Nieuwe case
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
          >
            Uitloggen
          </button>
        </div>
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

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCheckingAuth(false);
    });
  }, []);

  if (checkingAuth) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm text-text-muted">Laden...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      {session ? (
        <CasesDashboard onLogout={() => setSession(null)} />
      ) : (
        <LoginForm onLogin={() => window.location.reload()} />
      )}
    </main>
  );
}
