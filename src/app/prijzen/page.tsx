import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaBlock, Faq, PageHero } from "@/components/blocks";
import { Arrow, CheckList, Container, SectionIntro } from "@/components/ui";
import { euro, guarantees, prices } from "@/content/site";

export const metadata: Metadata = {
  title: "Prijzen: website, webapplicatie en automatisering",
  description:
    "Website vanaf €2.500, webapplicatie vanaf €7.500, eerste automatisering vanaf €1.500, beheer vanaf €49 per maand. Vaste prijs per fase, excl. btw.",
  alternates: { canonical: "/prijzen" },
};

const plans = [
  {
    name: "Website",
    price: euro(prices.website),
    unit: "eenmalig",
    href: "/website-laten-maken",
    text: "Een zakelijke website die aanvragen oplevert.",
    items: [
      "Gratis klikbaar ontwerp vooraf",
      "Ontwerp in je eigen huisstijl",
      "Teksten op basis van jouw input",
      "Contactformulier en SEO-basis",
      "Beheeromgeving voor teksten en projecten",
      "Alles op jouw naam",
    ],
  },
  {
    name: "Webapplicatie",
    price: euro(prices.webapp),
    unit: "eenmalig",
    href: "/webapplicatie-laten-maken",
    text: "Software op maat: portaal, offertetool of beheersysteem.",
    items: [
      "Gratis plan met schermontwerpen",
      "Elke week een werkende tussenversie",
      "Koppelingen met je bestaande systemen",
      "Inloggen, rollen en rechten",
      "Broncode in je eigen account",
    ],
  },
  {
    name: "Eerste automatisering",
    price: euro(prices.automation),
    unit: "eenmalig",
    href: "/ai-automatisering",
    text: "Eén proces dat je nu het meeste tijd kost.",
    items: [
      "Stroomschema van nu en straks",
      "Bouwen met je bestaande systemen",
      "Controlestap door een mens",
      "Afspraken over data en AI-diensten",
      "Meting na oplevering",
    ],
    highlight: true,
  },
  {
    name: "Beheer en doorontwikkeling",
    price: euro(prices.care),
    unit: "per maand",
    href: "/beheer-en-onderhoud",
    text: "Je site of systeem blijft snel, veilig en up-to-date.",
    items: [
      "Hosting en updates",
      "Back-ups en monitoring",
      "Kleine aanpassingen",
      "Maandelijks opzegbaar",
    ],
  },
];

const factors = [
  ["Omvang", "Het aantal pagina's, schermen of processen."],
  ["Teksten en beeld", "Lever jij ze aan, of schrijven en verzamelen wij ze?"],
  ["Koppelingen", "Met welke systemen moet het praten: boekhouding, CRM, webshop?"],
  ["Functies", "Formulieren, inloggen, meertaligheid, betalingen, zoeken."],
  ["Lopende kosten", "Hosting, licenties of AI-diensten die per maand of per gebruik kosten."],
];

export default function PrijzenPage() {
  return (
    <main>
      <Breadcrumbs items={[{ href: "/prijzen", label: "Prijzen" }]} />
      <PageHero
        eyebrow="Prijzen"
        title="Je weet vooraf wat het kost"
        intro="Dit zijn onze vanaf-prijzen, excl. btw. Na een gesprek van 30 minuten krijg je een vaste prijs per fase. Meerwerk gebeurt alleen na jouw akkoord."
      />

      <section>
        <Container className="py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border bg-surface p-7 ${
                  p.highlight ? "border-accent ring-1 ring-accent" : "border-line"
                }`}
              >
                <h2 className="font-display text-xl font-semibold text-ink">{p.name}</h2>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
                <p className="mt-6">
                  <span className="text-sm text-muted">vanaf </span>
                  <span className="font-display text-4xl font-semibold text-ink">{p.price}</span>
                  <span className="text-sm text-muted"> {p.unit}</span>
                </p>
                <CheckList items={p.items} className="mt-6 flex-1 text-sm" />
                <Link
                  href={p.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  Meer informatie <Arrow />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">Alle prijzen zijn exclusief btw.</p>
        </Container>
      </section>

      <section className="border-y border-line bg-surface">
        <Container className="grid gap-12 py-20 lg:grid-cols-2">
          <SectionIntro
            eyebrow="Wat bepaalt de prijs"
            title="Waarom vanaf, en waar het van afhangt"
            intro="Elk bedrijf is anders. Deze vijf dingen bepalen het meest of je dicht bij de vanaf-prijs blijft of erboven uitkomt."
          />
          <dl className="divide-y divide-line border-y border-line">
            {factors.map(([t, d]) => (
              <div key={t} className="grid gap-1 py-4 sm:grid-cols-[160px_1fr]">
                <dt className="font-semibold text-ink">{t}</dt>
                <dd className="text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <SectionIntro eyebrow="Onze afspraken" title="Zonder kleine lettertjes" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.title} className="rounded-xl border border-line bg-surface p-6">
                <p className="font-display text-lg font-semibold text-ink">{g.title}</p>
                <p className="mt-2 leading-relaxed text-muted">{g.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Faq
        items={[
          {
            q: "Waarom zijn jullie betaalbaarder dan een traditioneel bureau?",
            a: "Omdat AI een groot deel van het voorwerk doet: eerste versies van code en tekst. Daardoor gaat je budget naar ontwerp, controle en resultaat in plaats van naar uren. Alles wordt door ons gecontroleerd en getest.",
          },
          {
            q: "Moet ik meteen alles in één keer betalen?",
            a: "Nee. We factureren per fase. Het eerste ontwerp of plan is gratis.",
          },
          {
            q: "Zijn er lopende kosten?",
            a: "Alleen als je ervoor kiest: beheer vanaf €49 per maand, en eventuele kosten van software of AI-diensten. Die noemen we altijd vooraf.",
          },
          {
            q: "Wat als het project groter blijkt?",
            a: "Dan hoor je dat vooraf, met een prijs. Zonder jouw akkoord doen we geen meerwerk.",
          },
        ]}
      />
      <CtaBlock title="Wil je weten wat het voor jou kost?" text="Plan een gesprek van 30 minuten. Daarna krijg je een vaste prijs, zonder verplichting." />
    </main>
  );
}
