import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getCaseBySlug } from "@/lib/cases";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);

  if (!c) {
    return { title: "Case niet gevonden — Lean AI Studio" };
  }

  return {
    title: `${c.title} — Lean AI Studio`,
    description: c.description,
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);

  if (!c) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <Link
          href="/cases"
          className="text-sm text-text-muted transition-colors hover:text-primary"
        >
          &larr; Alle cases
        </Link>

        <p className="mt-8 text-xs font-medium uppercase tracking-widest text-accent">
          {c.client}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary">
          {c.title}
        </h1>
        <p className="mt-4 text-lg text-text-muted">{c.description}</p>

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
      </section>

      {/* Content */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-3xl gap-16 px-6 py-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
              De uitdaging
            </h2>
            <p className="mt-4 leading-relaxed text-primary">{c.challenge}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
              Onze oplossing
            </h2>
            <p className="mt-4 leading-relaxed text-primary">{c.solution}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
              Het resultaat
            </h2>
            <p className="mt-4 leading-relaxed text-primary">{c.result}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gray-50/50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-lg font-semibold text-primary">
            Benieuwd wat AI voor jouw bedrijf kan betekenen?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </main>
  );
}
