"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Field, TextArea, slugify } from "@/components/admin/AdminFormFields";
import { use } from "react";

interface CaseForm {
  id: string;
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

export default function EditCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [form, setForm] = useState<CaseForm | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchCase() {
      const supabase = createClient();
      const { data } = await supabase
        .from("cases")
        .select("*")
        .eq("slug", slug)
        .single();

      if (data) {
        setForm({
          id: data.id,
          title: data.title,
          slug: data.slug,
          client: data.client,
          description: data.description,
          challenge: data.challenge,
          solution: data.solution,
          result: data.result,
          tags: (data.tags as string[]).join(", "),
          image_url: data.image_url ?? "",
        });
      }
    }
    fetchCase();
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const { error } = await supabase
      .from("cases")
      .update({
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
      })
      .eq("id", form.id);

    if (error) {
      setError(error.message);
      setSaving(false);
    } else {
      router.push("/admin/cases");
    }
  }

  if (!form) {
    return <p className="text-sm text-text-muted">Laden...</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-primary">Case bewerken</h1>

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
          onChange={(v) => setForm((p) => p && { ...p, title: v })}
        />
        <Field
          label="Slug"
          required
          value={form.slug}
          onChange={(v) => setForm((p) => p && { ...p, slug: v })}
        />
        <Field
          label="Klant"
          required
          value={form.client}
          onChange={(v) => setForm((p) => p && { ...p, client: v })}
        />
        <TextArea
          label="Omschrijving"
          required
          value={form.description}
          onChange={(v) => setForm((p) => p && { ...p, description: v })}
        />
        <TextArea
          label="Uitdaging"
          required
          value={form.challenge}
          onChange={(v) => setForm((p) => p && { ...p, challenge: v })}
        />
        <TextArea
          label="Oplossing"
          required
          value={form.solution}
          onChange={(v) => setForm((p) => p && { ...p, solution: v })}
        />
        <TextArea
          label="Resultaat"
          required
          value={form.result}
          onChange={(v) => setForm((p) => p && { ...p, result: v })}
        />
        <Field
          label="Tags"
          value={form.tags}
          onChange={(v) => setForm((p) => p && { ...p, tags: v })}
          placeholder="Chatbot, NLP, Automatisering"
        />
        <Field
          label="Afbeelding URL"
          value={form.image_url}
          onChange={(v) => setForm((p) => p && { ...p, image_url: v })}
          placeholder="https://..."
        />
        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {saving ? "Opslaan..." : "Wijzigingen opslaan"}
        </button>
      </form>
    </div>
  );
}
