import type { Metadata } from "next";
import { Breadcrumbs, CtaBlock, Faq, PageHero } from "@/components/blocks";
import { CheckList, Container, SectionIntro } from "@/components/ui";
import { guarantees } from "@/content/site";

export const metadata: Metadata = {
  title: "Werkwijze: zo gebruiken we AI en bewaken we kwaliteit",
  description:
    "Hoe Lean AI Studio werkt: gratis gesprek, eerst zien en dan beslissen, vaste prijs per fase. AI doet het voorwerk, wij controleren en testen alles.",
  alternates: { canonical: "/werkwijze" },
};

const phases = [
  {
    title: "1. Gesprek van 30 minuten",
    text: "Gratis. We horen wat je wilt bereiken, waar je tijd of klanten verliest en wat je al gebruikt. Na afloop weet je of wij iets voor je kunnen betekenen.",
    items: ["Doel en knelpunten", "Huidige systemen en website", "Globale prijs en planning"],
  },
  {
    title: "2. Ontwerp of plan",
    text: "Gratis en zonder verplichting. Voor een website een klikbaar ontwerp van de homepage. Voor een automatisering een stroomschema van hoe het nu gaat en hoe het straks gaat.",
    items: ["Klikbaar ontwerp of stroomschema", "Vaste prijs per fase", "Planning met mijlpalen"],
  },
  {
    title: "3. Bouwen",
    text: "Pas als jij akkoord bent. Je krijgt een link naar een werkende tussenversie en kunt meekijken en reageren.",
    items: ["Werkende tussenversies", "Korte lijnen met Frank of Kevin", "Meerwerk alleen na akkoord"],
  },
  {
    title: "4. Live en beheer",
    text: "We zetten alles live, met een overdracht en een kwaliteitsrapport. Daarna houden we het bij als je dat wilt.",
    items: ["Kwaliteitsrapport bij oplevering", "30 dagen gratis herstel", "Beheer per maand, opzegbaar"],
  },
];

const aiSplit = [
  {
    title: "Wat AI doet",
    items: [
      "Eerste versies van code schrijven",
      "Conceptteksten en varianten maken",
      "Helpen met testen en fouten vinden",
      "Documenten en data voorbereiden",
    ],
  },
  {
    title: "Wat wij doen",
    items: [
      "Aanpak, structuur en ontwerp bepalen",
      "Elke regel code en tekst nalopen",
      "Testen op telefoon, tablet en computer",
      "Beslissen wat live gaat",
    ],
  },
  {
    title: "Wat we niet doen",
    items: [
      "Persoonsgegevens in AI-diensten zetten zonder jouw akkoord",
      "Teksten publiceren die we niet zelf hebben gelezen",
      "Software opleveren die alleen wij kunnen onderhouden",
    ],
  },
];

const report = [
  "Snelheid en Core Web Vitals, gemeten met Google PageSpeed",
  "Toegankelijkheid: contrast, toetsenbord en schermlezers",
  "Basis-SEO: titels, structuur, sitemap en indexering",
  "Beveiliging: https, headers en toegangsrechten",
  "Overzicht van accounts, koppelingen en wat op jouw naam staat",
];

export default function WerkwijzePage() {
  return (
    <main>
      <Breadcrumbs items={[{ href: "/werkwijze", label: "Werkwijze" }]} />
      <PageHero
        eyebrow="Werkwijze"
        title="Gebouwd met AI, gecontroleerd door mensen"
        intro="We gebruiken AI om sneller en betaalbaarder te bouwen. Maar de beslissingen nemen we zelf, en niets gaat live zonder dat Frank of Kevin het heeft nagelopen."
      />

      <section>
        <Container className="py-20">
          <SectionIntro eyebrow="Vier stappen" title="Eerst zien, dan beslissen" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {phases.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-surface p-8">
                <h2 className="font-display text-xl font-semibold text-ink">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                <CheckList items={p.items} className="mt-5 text-sm" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface">
        <Container className="py-20">
          <SectionIntro
            eyebrow="Eerlijk over AI"
            title="Wie doet wat?"
            intro="AI is bij ons gereedschap, geen vervanging van vakmanschap. Zo verdelen we het werk."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aiSplit.map((col) => (
              <div key={col.title} className="rounded-xl border border-line bg-paper p-7">
                <h3 className="font-display text-lg font-semibold text-ink">{col.title}</h3>
                <CheckList items={col.items} className="mt-5 text-sm" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-2">
          <SectionIntro
            eyebrow="Kwaliteit"
            title="Bij elke oplevering een kwaliteitsrapport"
            intro="Je krijgt zwart op wit wat we hebben gecontroleerd. Zo hoef je ons niet op ons woord te geloven."
          />
          <CheckList items={report} />
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-20">
          <SectionIntro eyebrow="Onze afspraken" title="Wat je van ons kunt verwachten" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.title} className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-ink">{g.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{g.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Faq
        items={[
          {
            q: "Welke AI-tools gebruiken jullie?",
            a: "Onder meer Claude van Anthropic voor code en tekst. We kiezen per project wat past, en spreken met je af welke diensten met jouw gegevens mogen werken.",
          },
          {
            q: "Met welke techniek bouwen jullie?",
            a: "Met moderne, gangbare techniek zoals Next.js en Supabase, gehost bij Vercel. Daardoor is je site snel en kan elke goede ontwikkelaar ermee verder.",
          },
          {
            q: "Wat als jullie stoppen?",
            a: "Dan heb jij alles: domein, code, accounts en data staan op jouw naam, met documentatie. Een andere partij kan het overnemen.",
          },
        ]}
      />
      <CtaBlock />
    </main>
  );
}
