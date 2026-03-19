import type { Metadata } from "next";
import Link from "next/link";
import DarkSection from "@/components/DarkSection";
import { getCases } from "@/lib/cases";
import type { Case } from "@/types/case";

export const metadata: Metadata = {
  title: "Cases — Lean AI Studio",
  description:
    "Concrete resultaten voor Nederlandse bedrijven. Van website tot AI-oplossing.",
};

/* ── Icons ── */

function ScreenshotIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="3" stroke="#2563EB" strokeWidth="2" />
      <path d="M6 18H42" stroke="#2563EB" strokeWidth="2" />
      <circle cx="12" cy="14" r="1.5" fill="#2563EB" />
      <circle cx="17" cy="14" r="1.5" fill="#2563EB" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 11L7 14L16 5" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Page ── */

export default async function CasesPage() {
  const allCases = await getCases();

  const featuredCase =
    allCases.find((c) => c.featured) ?? allCases[0] ?? null;
  const otherCases = allCases.filter((c) => c.id !== featuredCase?.id);

  return (
    <main>
      {/* Sectie 1 — Header */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
            CASES
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Wat we hebben gebouwd
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Concrete resultaten voor Nederlandse bedrijven. Van website tot
            AI-oplossing.
          </p>
        </div>
      </section>

      {/* Sectie 2 — Featured case */}
      {featuredCase && <FeaturedSection c={featuredCase} />}

      {/* Sectie 3 — Grid met overige cases */}
      {otherCases.length > 0 && (
        <section style={{ backgroundColor: "#F0F7FF" }}>
          <div className="mx-auto max-w-4xl px-6 py-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
              MEER CASES
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {otherCases.map((c) => (
                <CaseCard key={c.id} c={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sectie 4 — CTA balk */}
      <CTABar />
    </main>
  );
}

/* ── Featured Section ── */

function FeaturedSection({ c }: { c: Case }) {
  return (
    <DarkSection>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#38BDF8]">
          UITGELICHTE CASE
        </p>
        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          {/* Links — afbeelding */}
          <div className="lg:flex-[1.2]">
            {c.hero_image_url ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={c.hero_image_url}
                alt={c.title}
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: 400 }}
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center rounded-xl bg-[#1A2E45] lg:h-80">
                <ScreenshotIcon />
              </div>
            )}
          </div>

          {/* Rechts — content */}
          <div className="flex flex-col justify-between lg:flex-1">
            {c.category && (
              <span className="mb-3 inline-block w-fit rounded-md bg-[#1A2E45] px-3 py-1 text-xs font-medium text-[#38BDF8]">
                {c.category}
              </span>
            )}
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {c.title}
            </h2>
            <p className="mt-3 line-clamp-2 text-[#8B9AB0]">{c.description}</p>

            {c.client_quote && (
              <div className="mt-5 rounded-lg border-l-[3px] border-[#38BDF8] bg-[#1A2E45] px-5 py-4">
                <p className="italic text-[#38BDF8]">
                  &ldquo;{c.client_quote}&rdquo;
                </p>
                {c.client_quote_author && (
                  <p className="mt-2 text-sm text-[#8B9AB0]">
                    &mdash; {c.client_quote_author}
                  </p>
                )}
              </div>
            )}

            {(c.result_stat_1_value || c.result_stat_2_value) && (
              <div className="mt-5 flex gap-10">
                {c.result_stat_1_value && (
                  <div>
                    <p className="font-display text-2xl font-bold text-white">
                      {c.result_stat_1_value}
                    </p>
                    <p className="text-xs text-[#8B9AB0]">
                      {c.result_stat_1_label}
                    </p>
                  </div>
                )}
                {c.result_stat_2_value && (
                  <div>
                    <p className="font-display text-2xl font-bold text-white">
                      {c.result_stat_2_value}
                    </p>
                    <p className="text-xs text-[#8B9AB0]">
                      {c.result_stat_2_label}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6">
              <Link
                href={`/cases/${c.slug}`}
                className="inline-block rounded-md bg-[#38BDF8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3A7BC8]"
              >
                Bekijk case &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DarkSection>
  );
}

/* ── Case Card ── */

function CaseCard({ c }: { c: Case }) {
  return (
    <Link
      href={`/cases/${c.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#DBEAFE] bg-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      {/* Afbeelding */}
      <div className="relative h-[140px] w-full overflow-hidden bg-[#E8EFF6]">
        {c.hero_image_url ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={c.hero_image_url}
            alt={c.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <ScreenshotIcon />
          </div>
        )}
        {c.category && (
          <span className="absolute left-3 top-3 rounded-md bg-[#1A2E45]/90 px-2.5 py-1 text-[11px] font-medium text-[#38BDF8]">
            {c.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-semibold text-[#0F172A] group-hover:text-[#2563EB]">
          {c.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-[#8B9AB0]">
          {c.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          {c.duration && (
            <span className="text-xs text-[#8B9AB0]">{c.duration}</span>
          )}
          <span className="text-sm font-medium text-[#2563EB]">
            Lees meer &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── CTA Bar (exported for reuse) ── */

export function CTABar() {
  return (
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
          className="shrink-0 rounded-md bg-[#38BDF8] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3A7BC8]"
        >
          Plan een kennismaking
        </Link>
      </div>
    </DarkSection>
  );
}
