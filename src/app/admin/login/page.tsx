"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
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
      router.replace("/admin");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Admin Login</h1>
          <p className="mt-1 text-sm text-text-muted">Lean AI Studio</p>
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary"
          >
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
          <label
            htmlFor="password"
            className="block text-sm font-medium text-primary"
          >
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
          className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {loading ? "Inloggen..." : "Inloggen"}
        </button>
      </form>
    </div>
  );
}
