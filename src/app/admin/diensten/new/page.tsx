"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import {
  Field,
  TextArea,
  Toggle,
  slugify,
} from "@/components/admin/AdminFormFields";
import RichTextEditor from "@/components/admin/RichTextEditor";

export default function NewDienstPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [icon, setIcon] = useState("");
  const [published, setPublished] = useState(true);
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
    const { error } = await supabase.from("diensten").insert({
      title,
      slug: slug || slugify(title),
      description,
      content,
      icon,
      published,
    });

    if (error) {
      setError(error.message);
      setSaving(false);
    } else {
      router.push("/admin/diensten");
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-primary">Nieuwe dienst</h1>

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
          label="Icon"
          value={icon}
          onChange={setIcon}
          placeholder="Emoji of tekst, bijv. 🤖"
        />
        <TextArea
          label="Korte beschrijving"
          required
          value={description}
          onChange={setDescription}
          rows={2}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-primary">
            Uitgebreide content
          </label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <Toggle label="Gepubliceerd" checked={published} onChange={setPublished} />

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {saving ? "Opslaan..." : "Dienst opslaan"}
        </button>
      </form>
    </div>
  );
}
