import type { Metadata } from "next";
import Link from "next/link";
import { getAllCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases — Lean AI Studio",
  description:
    "Bekijk hoe we Nederlandse bedrijven helpen met AI-oplossingen. Van chatbots tot predictive maintenance.",
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Cases
        </h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          Een selectie van projecten waar we trots op zijn. Ontdek hoe we
          AI-oplossingen inzetten voor echte bedrijfsresultaten.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.id}
              href={`/cases/${c.slug}`}
              className="group rounded-xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                {c.client}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-primary group-hover:text-accent">
                {c.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {c.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
