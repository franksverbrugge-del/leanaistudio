"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { Field, TextArea } from "@/components/admin/AdminFormFields";

interface TeamForm {
  name: string;
  phone: string;
  email: string;
  bio: string;
  photo_url: string;
}

const emptyForm: TeamForm = {
  name: "",
  phone: "",
  email: "",
  bio: "",
  photo_url: "",
};

export default function EditTeamMemberPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [form, setForm] = useState<TeamForm>(emptyForm);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchMember() {
      const supabase = createClient();
      const { data } = await supabase
        .from("team")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setForm({
          name: data.name ?? "",
          phone: data.phone ?? "",
          email: data.email ?? "",
          bio: data.bio ?? "",
          photo_url: data.photo_url ?? "",
        });
        if (data.photo_url) {
          setPhotoPreview(data.photo_url);
        }
      }
      setLoading(false);
    }
    fetchMember();
  }, [id]);

  function updateField(field: keyof TeamForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const supabase = createClient();
    let photo_url: string | null = form.photo_url || null;

    if (photoFile) {
      const fileName = `team/${Date.now()}-${photoFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(fileName, photoFile);

      if (uploadError) {
        setError(`Foto upload mislukt: ${uploadError.message}`);
        setSaving(false);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("media").getPublicUrl(fileName);
      photo_url = publicUrl;
    }

    const { error: updateError } = await supabase
      .from("team")
      .update({
        name: form.name,
        phone: form.phone || null,
        email: form.email || null,
        bio: form.bio || null,
        photo_url,
      })
      .eq("id", id);

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
    } else {
      router.push("/admin/team");
    }
  }

  if (loading) {
    return <p className="text-sm text-text-muted">Laden...</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold text-primary">Teamlid bewerken</h1>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field
          label="Naam"
          required
          value={form.name}
          onChange={(v) => updateField("name", v)}
        />
        <Field
          label="Telefoon"
          value={form.phone}
          onChange={(v) => updateField("phone", v)}
          placeholder="+31 6 12345678"
        />
        <Field
          label="E-mail"
          value={form.email}
          onChange={(v) => updateField("email", v)}
          placeholder="naam@leanaistudios.nl"
        />
        <TextArea
          label="Bio"
          value={form.bio}
          onChange={(v) => updateField("bio", v)}
        />

        <div>
          <label className="block text-sm font-medium text-primary">Foto</label>
          <div className="mt-2 flex items-center gap-4">
            {photoPreview ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={photoPreview}
                alt="Preview"
                className="h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-sm text-text-muted">
                Geen foto
              </div>
            )}
            <label className="cursor-pointer rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-primary">
              Kies foto
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

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
