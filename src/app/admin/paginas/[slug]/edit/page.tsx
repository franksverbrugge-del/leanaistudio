"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Field, Toggle } from "@/components/admin/AdminFormFields";
import RichTextEditor from "@/components/admin/RichTextEditor";

interface PageForm {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  content: string;
  published: boolean;
}

export default function EditPagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [form, setForm] = useState<PageForm | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchPage() {
      const supabase = createClient();
      const { data } = await supabase
        .from("pages")
        .select("*")
        .eq("slug", slug)
        .single();

      if (data) {
        setForm({
          id: data.id,
          title: data.title,
          slug: data.slug,
          meta_description: data.meta_description ?? "",
          content: data.content ?? "",
          published: data.published ?? false,
        });
      }
    }
    fetchPage();
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const { error } = await supabase
      .from("pages")
      .update({
        title: form.title,
        slug: form.slug,
        meta_description: form.meta_description,
        content: form.content,
        published: form.published,
        updated_at: new Date().toISOString(),
      })
      .eq("id", form.id);

    if (error) {
      setError(error.message);
      setSaving(false);
    } else {
      router.push("/admin/paginas");
    }
  }

  if (!form) {
    return <p className="text-sm text-text-muted">Laden...</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-primary">Pagina bewerken</h1>

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
          label="Meta description"
          value={form.meta_description}
          onChange={(v) => setForm((p) => p && { ...p, meta_description: v })}
          placeholder="SEO beschrijving"
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-primary">
            Content
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
