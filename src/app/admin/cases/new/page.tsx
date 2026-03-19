"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import Link from "next/link";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface CaseForm {
  title: string;
  slug: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string;
  image_url: string;
}

const emptyForm: CaseForm = {
  title: "",
  slug: "",
  client: "",
  description: "",
  challenge: "",
  solution: "",
  result: "",
  tags: "",
  image_url: "",
};

export default function NewCasePage() {
  const router = useRouter();
  const [form, setForm] = useState<CaseForm>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/admin");
      } else {
        setAuthenticated(true);
      }
      setCheckingAuth(false);
    });
  }, [router]);

  function updateField(field: keyof CaseForm, value: string) {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "title" && !prev.slug) {
        updated.slug = slugify(value);
      }
      return updated;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const { error } = await supabase.from("cases").insert({
      title: form.title,
      slug: form.slug || slugify(form.title),
      client: form.client,
      description: form.description,
      challenge: form.challenge,
      solution: form.solution,
      result: form.result,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      image_url: form.image_url || null,
    });

    if (error) {
      setError(error.message);
      setSaving(false);
    } else {
      router.push("/admin");
    }
  }

  if (checkingAuth || !authenticated) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24">
        <p className="text-sm text-text-muted">Laden...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <Link
        href="/admin"
        className="text-sm text-text-muted transition-colors hover:text-primary"
      >
        &larr; Terug naar overzicht
      </Link>

      <h1 className="mt-6 text-2xl font-bold text-primary">Nieuwe case</h1>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field
          label="Titel"
          required
          value={form.title}
          onChange={(v) => updateField("title", v)}
        />

        <Field
          label="Slug"
          required
          value={form.slug}
          onChange={(v) => setForm((p) => ({ ...p, slug: v }))}
          placeholder="wordt-automatisch-gegenereerd"
        />

        <Field
          label="Klant"
          required
          value={form.client}
          onChange={(v) => updateField("client", v)}
        />

        <TextArea
          label="Omschrijving"
          required
          value={form.description}
          onChange={(v) => updateField("description", v)}
        />

        <TextArea
          label="Uitdaging"
          required
          value={form.challenge}
          onChange={(v) => updateField("challenge", v)}
        />

        <TextArea
          label="Oplossing"
          required
          value={form.solution}
          onChange={(v) => updateField("solution", v)}
        />

        <TextArea
          label="Resultaat"
          required
          value={form.result}
          onChange={(v) => updateField("result", v)}
        />

        <Field
          label="Tags"
          value={form.tags}
          onChange={(v) => updateField("tags", v)}
          placeholder="Chatbot, NLP, Automatisering"
        />

        <Field
          label="Afbeelding URL"
          value={form.image_url}
          onChange={(v) => updateField("image_url", v)}
          placeholder="https://..."
        />

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {saving ? "Opslaan..." : "Case opslaan"}
        </button>
      </form>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary">{label}</label>
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary">{label}</label>
      <textarea
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="mt-1 w-full rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}
