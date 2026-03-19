"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Field, TextArea, Toggle, slugify } from "@/components/admin/AdminFormFields";

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
  featured: boolean;
  category: string;
  hero_image_url: string;
  client_quote: string;
  client_quote_author: string;
  duration: string;
  result_stat_1_value: string;
  result_stat_1_label: string;
  result_stat_2_value: string;
  result_stat_2_label: string;
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
  featured: false,
  category: "",
  hero_image_url: "",
  client_quote: "",
  client_quote_author: "",
  duration: "",
  result_stat_1_value: "",
  result_stat_1_label: "",
  result_stat_2_value: "",
  result_stat_2_label: "",
};

export default function NewCasePage() {
  const router = useRouter();
  const [form, setForm] = useState<CaseForm>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function updateField(field: keyof CaseForm, value: string) {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "title" && !prev.slug) {
        updated.slug = slugify(value);
      }
      return updated;
    });
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const supabase = createClient();
    const ext = file.name.split(".").pop();
    const path = `cases/${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(path, file);

    if (uploadError) {
      setError(`Upload mislukt: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage.from("media").getPublicUrl(path);
    setForm((prev) => ({ ...prev, hero_image_url: urlData.publicUrl }));
    setImagePreview(urlData.publicUrl);
    setUploading(false);
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
      featured: form.featured,
      category: form.category || null,
      hero_image_url: form.hero_image_url || null,
      client_quote: form.client_quote || null,
      client_quote_author: form.client_quote_author || null,
      duration: form.duration || null,
      result_stat_1_value: form.result_stat_1_value || null,
      result_stat_1_label: form.result_stat_1_label || null,
      result_stat_2_value: form.result_stat_2_value || null,
      result_stat_2_label: form.result_stat_2_label || null,
    });

    if (error) {
      setError(error.message);
      setSaving(false);
    } else {
      router.push("/admin/cases");
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-primary">Nieuwe case</h1>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Toggle
          label="Featured (uitgelicht)"
          checked={form.featured}
          onChange={(v) => setForm((p) => ({ ...p, featured: v }))}
        />
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
        <Field
          label="Categorie"
          value={form.category}
          onChange={(v) => updateField("category", v)}
          placeholder="Bijv. Website, AI-oplossing, Applicatie"
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

        {/* Hero image upload */}
        <div>
          <label className="block text-sm font-medium text-primary">
            Hero afbeelding
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="mt-1 w-full text-sm text-primary file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
          />
          {uploading && (
            <p className="mt-2 text-sm text-text-muted">Uploaden...</p>
          )}
          {imagePreview && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 h-40 rounded-lg object-cover"
            />
          )}
          {form.hero_image_url && !imagePreview && (
            <p className="mt-2 text-xs text-text-muted break-all">
              {form.hero_image_url}
            </p>
          )}
        </div>

        <TextArea
          label="Klant quote"
          value={form.client_quote}
          onChange={(v) => updateField("client_quote", v)}
          rows={3}
        />
        <Field
          label="Quote auteur"
          value={form.client_quote_author}
          onChange={(v) => updateField("client_quote_author", v)}
          placeholder="Naam van de klant"
        />
        <Field
          label="Doorlooptijd"
          value={form.duration}
          onChange={(v) => updateField("duration", v)}
          placeholder="Bijv. 3 weken"
        />

        {/* Statistieken */}
        <div>
          <label className="block text-sm font-medium text-primary">
            Statistiek 1
          </label>
          <div className="mt-1 flex gap-3">
            <input
              type="text"
              value={form.result_stat_1_value}
              onChange={(e) =>
                setForm((p) => ({ ...p, result_stat_1_value: e.target.value }))
              }
              placeholder="Bijv. 40%"
              className="w-1/3 rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
            />
            <input
              type="text"
              value={form.result_stat_1_label}
              onChange={(e) =>
                setForm((p) => ({ ...p, result_stat_1_label: e.target.value }))
              }
              placeholder="Bijv. snellere doorlooptijd"
              className="flex-1 rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary">
            Statistiek 2
          </label>
          <div className="mt-1 flex gap-3">
            <input
              type="text"
              value={form.result_stat_2_value}
              onChange={(e) =>
                setForm((p) => ({ ...p, result_stat_2_value: e.target.value }))
              }
              placeholder="Bijv. 3x"
              className="w-1/3 rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
            />
            <input
              type="text"
              value={form.result_stat_2_label}
              onChange={(e) =>
                setForm((p) => ({ ...p, result_stat_2_label: e.target.value }))
              }
              placeholder="Bijv. meer leads"
              className="flex-1 rounded-lg border border-border px-4 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {saving ? "Opslaan..." : "Case opslaan"}
        </button>
      </form>
    </div>
  );
}
