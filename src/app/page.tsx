import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lean AI Studio — AI-oplossingen voor bedrijven",
  description:
    "Lean AI Studio helpt Nederlandse bedrijven met het implementeren van slimme AI-oplossingen. Van strategie tot implementatie.",
};

const diensten = [
  {
    title: "AI Strategie",
    description:
      "We analyseren jouw bedrijfsprocessen en identificeren waar AI de meeste impact maakt. Samen stellen we een concreet actieplan op.",
  },
  {
    title: "AI Implementatie",
    description:
      "Van proof-of-concept tot productie. We bouwen en integreren AI-oplossingen die naadloos aansluiten op jouw workflow.",
  },
  {
    title: "AI Training",
    description:
      "We trainen jouw team om zelfstandig met AI-tools te werken. Praktijkgericht, geen theorie zonder toepassing.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">
          AI die werkt voor jouw bedrijf
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
          Lean AI Studio helpt Nederlandse bedrijven met het implementeren van
          slimme AI-oplossingen
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/cases"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Bekijk onze cases
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-gray-50"
          >
            Neem contact op
          </Link>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="border-t border-border bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted">
            Wat we doen
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {diensten.map((dienst) => (
              <div
                key={dienst.title}
                className="rounded-xl border border-border bg-white p-8"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {dienst.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {dienst.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
