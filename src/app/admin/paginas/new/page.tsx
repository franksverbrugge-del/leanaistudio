"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Field, Toggle, slugify } from "@/components/admin/AdminFormFields";
import RichTextEditor from "@/components/admin/RichTextEditor";

export default function NewPagePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slug) setSlug(slugify(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    const { error } = await supabase.from("pages").insert({
      title,
      slug: slug || slugify(title),
      meta_description: metaDescription,
      content,
      published,
    });

    if (error) {
      setError(error.message);
      setSaving(false);
    } else {
      router.push("/admin/paginas");
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-primary">Nieuwe pagina</h1>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field
          label="Titel"
          required
          value={title}
          onChange={handleTitleChange}
        />
        <Field
          label="Slug"
          required
          value={slug}
          onChange={setSlug}
          placeholder="wordt-automatisch-gegenereerd"
        />
        <Field
          label="Meta description"
          value={metaDescription}
          onChange={setMetaDescription}
          placeholder="SEO beschrijving"
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-primary">
            Content
          </label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <Toggle label="Gepubliceerd" checked={published} onChange={setPublished} />

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {saving ? "Opslaan..." : "Pagina opslaan"}
        </button>
      </form>
    </div>
  );
}
