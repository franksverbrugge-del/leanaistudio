import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lean AI Studio — AI-oplossingen voor bedrijven",
  description:
    "Lean AI Studio helpt bedrijven met het implementeren van AI-oplossingen.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Welkom bij Lean AI Studio</h1>
    </main>
  );
}
