import type { Metadata } from "next";
import Link from "next/link";
import DarkSection from "@/components/DarkSection";

export const metadata: Metadata = {
  title: "Lean AI Studio — AI-oplossingen voor bedrijven",
  description:
    "Lean AI Studio helpt Nederlandse bedrijven met het implementeren van slimme AI-oplossingen. Van strategie tot implementatie.",
};

function WebsiteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M4 12H28" stroke="#1E5FA8" strokeWidth="2" />
      <circle cx="8" cy="9" r="1" fill="#1E5FA8" />
      <circle cx="12" cy="9" r="1" fill="#1E5FA8" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#1E5FA8" strokeWidth="2" />
      <circle cx="16" cy="16" r="4" fill="#1E5FA8" />
      <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="16" rx="2" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M12 14L15 17L20 12" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13L9 17L19 7" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const diensten = [
  {
    Icon: WebsiteIcon,
    title: "Websites & platforms",
    description:
      "We bouwen schaalbare websites en platformen die direct bijdragen aan groei.",
  },
  {
    Icon: AIIcon,
    title: "AI-oplossingen",
    description:
      "We automatiseren processen en ontwikkelen slimme toepassingen die werk uit handen nemen.",
  },
  {
    Icon: SystemIcon,
    title: "Bedrijfssystemen",
    description:
      "Van interne tools tot complete workflows: wij bouwen systemen die jouw organisatie efficiënter maken.",
  },
];

const stats = [
  { value: "20+", label: "Projecten" },
  { value: "3 weken", label: "Gemiddelde implementatie" },
  { value: "100%", label: "Nederlandse bedrijven" },
];

const reasons = [
  "Tot 5–10x sneller live",
  "Gebouwd met ons eigen AI-systeem",
  "Makkelijk door te ontwikkelen",
  "Efficiënter dan traditionele development",
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-softwhite">
        <div className="mx-auto max-w-6xl px-6 py-36 text-center sm:py-44">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-navy sm:text-6xl lg:text-7xl">
            Sneller bouwen met AI.
            <br />
            Beter resultaat.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Wij ontwerpen en bouwen websites, applicaties en bedrijfssystemen met
            ons eigen AI-systeem. Sneller, efficiënter en direct klaar voor
            groei.
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
      <DarkSection>
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
      </DarkSection>

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

      {/* Waarom bedrijven met ons werken */}
      <DarkSection>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Waarom bedrijven met ons werken
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-4">
                <CheckIcon />
                <p className="text-lg text-white">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </DarkSection>
    </main>
  );
}
