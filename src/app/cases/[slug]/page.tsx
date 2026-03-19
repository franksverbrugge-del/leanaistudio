import type { Metadata } from "next";
import Link from "next/link";
import DarkSection from "@/components/DarkSection";
import { getAllSlugs, getCaseBySlug } from "@/lib/cases";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCaseBySlug(slug);

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
  const c = await getCaseBySlug(slug);

  if (!c) {
    notFound();
  }

  return (
    <main>
      {/* Sectie 1 — Hero */}
      <DarkSection>
        <div className="relative">
          {c.hero_image_url && (
            <div className="absolute inset-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.hero_image_url}
                alt=""
                className="h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[#0B1829]/60" />
            </div>
          )}
          <div className="relative mx-auto max-w-4xl px-6 py-28 sm:py-36">
            {c.category && (
              <span className="inline-block rounded-md bg-[#1A2E45] px-3 py-1 text-xs font-medium text-[#4A90D9]">
                {c.category}
              </span>
            )}
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#8B9AB0]">
              <span>{c.client}</span>
              {c.duration && (
                <>
                  <span>&middot;</span>
                  <span>{c.duration}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </DarkSection>

      {/* Sectie 2 — Quote (alleen als gevuld) */}
      {c.client_quote && (
        <section style={{ backgroundColor: "#F0F5FA" }}>
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <blockquote className="font-display text-2xl italic leading-relaxed text-[#0B1829] sm:text-3xl">
              &ldquo;{c.client_quote}&rdquo;
            </blockquote>
            {c.client_quote_author && (
              <p className="mt-4 text-base text-[#1E5FA8]">
                &mdash; {c.client_quote_author}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Sectie 3 — Resultaten */}
      {(c.result_stat_1_value || c.result_stat_2_value) && (
        <DarkSection>
          <div className="mx-auto max-w-4xl px-6 py-20">
            <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
              Het resultaat
            </h2>
            <div className="mt-12 flex items-center justify-center gap-16">
              {c.result_stat_1_value && (
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                    {c.result_stat_1_value}
                  </p>
                  <p className="mt-2 text-sm text-[#8B9AB0]">
                    {c.result_stat_1_label}
                  </p>
                </div>
              )}
              {c.result_stat_2_value && (
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                    {c.result_stat_2_value}
                  </p>
                  <p className="mt-2 text-sm text-[#8B9AB0]">
                    {c.result_stat_2_label}
                  </p>
                </div>
              )}
            </div>
          </div>
        </DarkSection>
      )}

      {/* Sectie 4 — Het verhaal */}
      <section style={{ backgroundColor: "#F0F5FA" }}>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-12 sm:grid-cols-3">
            <div>
              <h3 className="font-display text-lg font-semibold text-[#0B1829]">
                De uitdaging
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#374151]">
                {c.challenge}
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-[#0B1829]">
                De oplossing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#374151]">
                {c.solution}
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-[#0B1829]">
                Het resultaat
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#374151]">
                {c.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 5 — CTA */}
      <DarkSection>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 sm:flex-row sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Klaar om jouw project te starten?
            </h2>
            <p className="mt-2 text-[#8B9AB0]">
              We realiseren in weken wat normaal maanden duurt.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-md bg-[#4A90D9] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3A7BC8]"
          >
            Plan een kennismaking
          </Link>
        </div>
      </DarkSection>
    </main>
  );
}
