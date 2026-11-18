import JsonLd from "@/components/JsonLd";
import {
  Breadcrumbs,
  CtaBlock,
  Faq,
  LinkCard,
  type FaqItem,
} from "@/components/blocks";
import { BeforeAfter, BrowserFrame, StatCard, type FlowStep } from "@/components/visuals";
import {
  ButtonLink,
  CheckList,
  Container,
  Eyebrow,
  SectionIntro,
  Arrow,
} from "@/components/ui";
import { SITE_URL, euro, guarantees } from "@/content/site";

export interface ServiceContent {
  path: string;
  crumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  priceFrom: number;
  priceUnit?: string;
  priceNote: string;
  secondaryCta: { href: string; label: string };
  visual:
    | { kind: "case" }
    | { kind: "flow"; before: FlowStep[]; after: FlowStep[] };
  forWho: { title: string; items: string[] };
  deliverables: { title: string; items: string[] };
  steps: { title: string; text: string }[];
  extra?: { title: string; intro: string; cards: { href: string; title: string; text: string }[] };
  faq: FaqItem[];
  related: { href: string; title: string; text: string }[];
  serviceType: string;
}

export default function ServicePage({ c }: { c: ServiceContent }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.crumb,
    serviceType: c.serviceType,
    description: c.intro,
    url: `${SITE_URL}${c.path}`,
    areaServed: { "@type": "Country", name: "Nederland" },
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: c.priceFrom,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: c.priceFrom,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
      },
    },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ href: c.path, label: c.crumb }]} />

      <section className="border-b border-line">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Plan een gesprek <Arrow />
              </ButtonLink>
              <ButtonLink href={c.secondaryCta.href} variant="secondary">
                {c.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted">
              <span className="font-semibold text-ink">
                Vanaf {euro(c.priceFrom)}
                {c.priceUnit ?? ""}
              </span>{" "}
              excl. btw. {c.priceNote}
            </p>
          </div>
          <div className="relative">
            {c.visual.kind === "case" ? (
              <>
                <BrowserFrame
                  url="wijntripje.nl"
                  src="/werk/wijntripje.jpg"
                  alt="Homepage van Wijntripje.nl, een platform dat wij bouwden"
                  width={1779}
                  height={746}
                  priority
                />
                <StatCard
                  value="50.000"
                  label="bezoekers in jaar 1, in één week gebouwd"
                  className="absolute -bottom-6 left-4 sm:left-auto sm:right-6"
                />
              </>
            ) : (
              <BeforeAfter before={c.visual.before} after={c.visual.after} />
            )}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {c.forWho.title}
            </h2>
            <CheckList items={c.forWho.items} className="mt-6" />
          </div>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              {c.deliverables.title}
            </h2>
            <CheckList items={c.deliverables.items} className="mt-6" />
          </div>
        </Container>
      </section>

      {c.extra && (
        <section className="border-t border-line">
          <Container className="py-20">
            <SectionIntro title={c.extra.title} intro={c.extra.intro} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.extra.cards.map((card) => (
                <LinkCard key={card.href} href={card.href} title={card.title} text={card.text} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-line bg-surface">
        <Container className="py-20">
          <SectionIntro eyebrow="Zo werken we" title="In vier stappen van vraag naar resultaat" />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {c.steps.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-line bg-paper p-6">
                <span className="font-display text-sm font-semibold text-accent">
                  Stap {i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.title} className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-ink">{g.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{g.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Faq items={c.faq} />

      <section className="border-t border-line">
        <Container className="py-20">
          <h2 className="font-display text-2xl font-semibold text-ink">Verder lezen</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.related.map((r) => (
              <LinkCard key={r.href} href={r.href} title={r.title} text={r.text} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock />
    </main>
  );
}

export const defaultSteps = [
  {
    title: "Gesprek van 30 minuten",
    text: "Gratis. We horen wat je wilt bereiken en waar je nu tijd of klanten verliest.",
  },
  {
    title: "Ontwerp of plan",
    text: "Gratis en zonder verplichting: een klikbaar ontwerp of een uitgewerkt plan, met een vaste prijs.",
  },
  {
    title: "Bouwen",
    text: "Vaste prijs, vaste planning. Je kijkt mee via een werkende tussenversie.",
  },
  {
    title: "Live en beheer",
    text: "Oplevering met kwaliteitsrapport. Daarna houden we het bij als je dat wilt.",
  },
];
