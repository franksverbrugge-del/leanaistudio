import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases — Lean AI Studio",
  description: "Bekijk onze cases en projecten.",
};

export default function CasesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Cases</h1>
    </main>
  );
}
