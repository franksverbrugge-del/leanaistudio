import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lean AI Studio — AI-oplossingen voor bedrijven",
  description:
    "Lean AI Studio helpt Nederlandse bedrijven met het implementeren van slimme AI-oplossingen. Van strategie tot implementatie.",
};

const diensten = [
  {
    icon: "🔍",
    title: "AI Strategie",
    description:
      "We analyseren jouw bedrijfsprocessen en identificeren waar AI de meeste impact maakt. Samen stellen we een concreet actieplan op.",
  },
  {
    icon: "⚙️",
    title: "AI Implementatie",
    description:
      "Van proof-of-concept tot productie. We bouwen en integreren AI-oplossingen die naadloos aansluiten op jouw workflow.",
  },
  {
    icon: "🎓",
    title: "AI Training",
    description:
      "We trainen jouw team om zelfstandig met AI-tools te werken. Praktijkgericht, geen theorie zonder toepassing.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-softwhite">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-navy sm:text-6xl">
            AI die werkt voor jouw bedrijf
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Lean AI Studio helpt Nederlandse bedrijven met het implementeren van
            slimme AI-oplossingen. Minder gedoe. Meer resultaat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/cases"
              className="rounded-md bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-steel"
            >
              Bekijk onze cases
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-steel transition-colors hover:bg-white"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center font-display text-sm font-semibold uppercase tracking-widest text-muted">
            Wat we doen
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {diensten.map((dienst) => (
              <div
                key={dienst.title}
                className="rounded-xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <span className="text-2xl">{dienst.icon}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {dienst.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
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
