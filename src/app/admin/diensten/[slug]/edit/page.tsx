"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Field, TextArea, Toggle } from "@/components/admin/AdminFormFields";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface DienstForm {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  icon: string;
  published: boolean;
}

export default function EditDienstPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [form, setForm] = useState<DienstForm | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchDienst() {
      const supabase = createClient();
      const { data } = await supabase
        .from("diensten")
        .select("*")
        .eq("slug", slug)
        .single();

      if (data) {
        setForm({
          id: data.id,
          title: data.title,
          slug: data.slug,
          description: data.description ?? "",
          content: data.content ?? "",
          icon: data.icon ?? "",
          published: data.published ?? true,
        });
      }
    }
    fetchDienst();
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const { error } = await supabase
      .from("diensten")
      .update({
        title: form.title,
        slug: form.slug,
        description: form.description,
        content: form.content,
        icon: form.icon,
        published: form.published,
        updated_at: new Date().toISOString(),
      })
      .eq("id", form.id);

    if (error) {
      setError(error.message);
      setSaving(false);
    } else {
      router.push("/admin/diensten");
    }
  }

  if (!form) {
    return <p className="text-sm text-text-muted">Laden...</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-primary">Dienst bewerken</h1>

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
          label="Icon"
          value={form.icon}
          onChange={(v) => setForm((p) => p && { ...p, icon: v })}
          placeholder="Emoji of tekst, bijv. 🤖"
        />
        <TextArea
          label="Korte beschrijving"
          required
          value={form.description}
          onChange={(v) => setForm((p) => p && { ...p, description: v })}
          rows={2}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-primary">
            Uitgebreide content
          </label>
          <RichTextEditor
            content={form.content}
            onChange={(v) => setForm((p) => p && { ...p, content: v })}
          />
        </div>

        <Toggle
          label="Gepubliceerd"
          checked={form.published}
          onChange={(v) => setForm((p) => p && { ...p, published: v })}
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
