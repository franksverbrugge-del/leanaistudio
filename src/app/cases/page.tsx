import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBlock, LinkCard, PageHero } from "@/components/blocks";
import { BrowserFrame } from "@/components/visuals";
import { Arrow, Container } from "@/components/ui";
import { cases, mediaExamples } from "@/content/projecten";

export const metadata: Metadata = {
  title: "Ons werk: websites, platforms en automatiseringen",
  description:
    "Wat we bouwden: Wijntripje.nl in één week met 50.000 bezoekers in jaar 1, en systemen voor een mediabedrijf, van offertetool tot facturatie.",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ href: "/cases", label: "Ons werk" }]} />
      <PageHero
        eyebrow="Ons werk"
        title="Dingen die we bouwden, en die nog steeds draaien"
        intro="We laten alleen echt werk zien. Een deel is eigen werk, een deel bouwden we voor een mediabedrijf. Nieuwe klantcases volgen zodra klanten ze willen delen."
      />

      <section>
        <Container className="py-20">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-xl hover:shadow-ink/5 lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="flex items-center border-b border-line bg-paper p-6 lg:border-b-0 lg:border-r">
                <BrowserFrame
                  url={c.url ? c.url.replace("https://", "") : c.client}
                  src={c.image.src}
                  alt={c.image.alt}
                  width={c.image.width}
                  height={c.image.height}
                  priority
                />
              </div>
              <div className="flex flex-col p-8 sm:p-10">
                <p className="text-sm font-semibold text-accent">{c.kind}</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{c.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{c.summary}</p>
                <dl className="mt-8 grid grid-cols-3 gap-4">
                  {c.stats.map((s) => (
                    <div key={s.label} className="flex flex-col-reverse">
                      <dt className="mt-1 text-xs leading-snug text-muted">{s.label}</dt>
                      <dd className="font-display text-2xl font-semibold text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-accent">
                  Lees de case <Arrow className="transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-20">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Gebouwd voor een mediabedrijf
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Voor een Nederlands mediabedrijf bouwden we systemen die dagelijks gebruikt worden.
            Zonder klantnaam, want het gaat om wat ze doen.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mediaExamples.map((e) => (
              <LinkCard key={e.title} href={e.href} title={e.title} text={e.text} meta="Zo pakken we dit aan" />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock title="Wil je dat jouw project hier straks staat?" />
    </main>
  );
}
