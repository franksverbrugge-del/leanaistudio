"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import type { NavigationItem } from "@/types/admin";

export default function AdminNavigatiePage() {
  const [items, setItems] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [newLabel, setNewLabel] = useState("");
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const supabase = createClient();
    const { data } = await supabase
      .from("navigation_items")
      .select("*")
      .order("order_index", { ascending: true });
    setItems(data ?? []);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!newLabel || !newUrl) return;

    const supabase = createClient();
    const { data } = await supabase
      .from("navigation_items")
      .insert({
        label: newLabel,
        url: newUrl,
        order_index: items.length,
      })
      .select()
      .single();

    if (data) {
      setItems((prev) => [...prev, data]);
      setNewLabel("");
      setNewUrl("");
    }
  }

  async function handleDelete(id: string) {
    const supabase = createClient();
    await supabase.from("navigation_items").delete().eq("id", id);
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  async function handleMove(index: number, direction: "up" | "down") {
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= items.length) return;

    const updated = [...items];
    [updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]];

    const supabase = createClient();
    await Promise.all(
      updated.map((item, i) =>
        supabase
          .from("navigation_items")
          .update({ order_index: i })
          .eq("id", item.id)
      )
    );

    setItems(updated);
  }

  async function handleUpdate(
    id: string,
    field: "label" | "url",
    value: string
  ) {
    const supabase = createClient();
    await supabase.from("navigation_items").update({ [field]: value }).eq("id", id);
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Navigatie</h1>

      {loading ? (
        <p className="mt-8 text-sm text-text-muted">Laden...</p>
      ) : (
        <div className="mt-8 space-y-3">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-xl border border-border p-4"
            >
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => handleMove(i, "up")}
                  disabled={i === 0}
                  className="text-xs text-text-muted hover:text-primary disabled:opacity-30"
                >
                  ▲
                </button>
                <button
                  onClick={() => handleMove(i, "down")}
                  disabled={i === items.length - 1}
                  className="text-xs text-text-muted hover:text-primary disabled:opacity-30"
                >
                  ▼
                </button>
              </div>

              <input
                type="text"
                value={item.label}
                onChange={(e) => handleUpdate(item.id, "label", e.target.value)}
                className="w-40 rounded-lg border border-border px-3 py-1.5 text-sm focus:border-accent focus:outline-none"
              />
              <input
                type="text"
                value={item.url}
                onChange={(e) => handleUpdate(item.id, "url", e.target.value)}
                className="flex-1 rounded-lg border border-border px-3 py-1.5 text-sm focus:border-accent focus:outline-none"
              />

              <button
                onClick={() => handleDelete(item.id)}
                className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                Verwijderen
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add new */}
      <form
        onSubmit={handleAdd}
        className="mt-6 flex items-end gap-3 rounded-xl border border-dashed border-border p-4"
      >
        <div className="w-40">
          <label className="block text-xs font-medium text-text-muted">
            Label
          </label>
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Home"
            required
            className="mt-1 w-full rounded-lg border border-border px-3 py-1.5 text-sm focus:border-accent focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-text-muted">
            URL
          </label>
          <input
            type="text"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="/"
            required
            className="mt-1 w-full rounded-lg border border-border px-3 py-1.5 text-sm focus:border-accent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Toevoegen
        </button>
      </form>
    </div>
  );
}
