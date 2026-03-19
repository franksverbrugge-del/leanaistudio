import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons — Lean AI Studio",
  description: "Leer meer over Lean AI Studio en ons team.",
};

export default function OverPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Over ons</h1>
    </main>
  );
}
