import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lean AI Studio — AI-oplossingen voor bedrijven",
  description:
    "Lean AI Studio helpt Nederlandse bedrijven met het implementeren van slimme AI-oplossingen. Van strategie tot implementatie.",
};

function StrategyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#1E5FA8" strokeWidth="2" />
      <circle cx="16" cy="16" r="4" fill="#1E5FA8" />
      <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ImplementatieIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="16" rx="2" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M12 14L15 17L20 12" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 6L28 12L16 18L4 12L16 6Z" stroke="#1E5FA8" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 14V22L16 26L24 22V14" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const diensten = [
  {
    Icon: StrategyIcon,
    title: "AI Strategie",
    description:
      "We analyseren jouw bedrijfsprocessen en identificeren waar AI de meeste impact maakt. Samen stellen we een concreet actieplan op.",
  },
  {
    Icon: ImplementatieIcon,
    title: "AI Implementatie",
    description:
      "Van proof-of-concept tot productie. We bouwen en integreren AI-oplossingen die naadloos aansluiten op jouw workflow.",
  },
  {
    Icon: TrainingIcon,
    title: "AI Training",
    description:
      "We trainen jouw team om zelfstandig met AI-tools te werken. Praktijkgericht, geen theorie zonder toepassing.",
  },
];

const stats = [
  { value: "50+", label: "Projecten" },
  { value: "3 weken", label: "Gemiddelde implementatie" },
  { value: "100%", label: "Nederlandse bedrijven" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-softwhite">
        <div className="mx-auto max-w-6xl px-6 py-36 text-center sm:py-44">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-navy sm:text-6xl lg:text-7xl">
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
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-steel transition-colors hover:bg-softwhite"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Diensten preview */}
      <section className="bg-softwhite">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center font-display text-sm font-semibold uppercase tracking-widest text-steel">
            Wat we doen
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {diensten.map((dienst) => (
              <div
                key={dienst.title}
                className="rounded-xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <dienst.Icon />
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {dienst.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#374151]">
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
