"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

interface MediaItem {
  name: string;
  url: string;
  created_at: string;
}

export default function AdminMediaPage() {
  const [files, setFiles] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  async function fetchFiles() {
    const supabase = createClient();
    const { data } = await supabase.storage.from("media").list("", {
      sortBy: { column: "created_at", order: "desc" },
    });

    if (data) {
      const items: MediaItem[] = data
        .filter((f) => f.name !== ".emptyFolderPlaceholder")
        .map((f) => {
          const {
            data: { publicUrl },
          } = supabase.storage.from("media").getPublicUrl(f.name);
          return {
            name: f.name,
            url: publicUrl,
            created_at: f.created_at ?? "",
          };
        });
      setFiles(items);
    }
    setLoading(false);
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const supabase = createClient();
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("media")
      .upload(fileName, file);

    if (error) {
      alert(`Upload mislukt: ${error.message}`);
    } else {
      await fetchFiles();
    }
    setUploading(false);
    e.target.value = "";
  }

  async function handleDelete(name: string) {
    if (!confirm(`${name} verwijderen?`)) return;
    const supabase = createClient();
    await supabase.storage.from("media").remove([name]);
    setFiles((prev) => prev.filter((f) => f.name !== name));
  }

  function handleCopy(url: string) {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Media</h1>
        <label className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover">
          {uploading ? "Uploaden..." : "Upload bestand"}
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-text-muted">Laden...</p>
      ) : files.length === 0 ? (
        <p className="mt-8 text-sm text-text-muted">
          Nog geen bestanden. Upload je eerste afbeelding.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((f) => (
            <div
              key={f.name}
              className="overflow-hidden rounded-xl border border-border"
            >
              <div className="aspect-video bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.url}
                  alt={f.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="truncate text-sm font-medium text-primary">
                  {f.name}
                </p>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => handleCopy(f.url)}
                    className="rounded-lg border border-border px-3 py-1 text-xs font-medium text-text-muted transition-colors hover:text-primary"
                  >
                    {copied === f.url ? "Gekopieerd!" : "Kopieer URL"}
                  </button>
                  <button
                    onClick={() => handleDelete(f.name)}
                    className="rounded-lg border border-red-200 px-3 py-1 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
                  >
                    Verwijderen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
