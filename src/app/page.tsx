import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock, Faq, LinkCard } from "@/components/blocks";
import { BrowserFrame, Flow, StatCard } from "@/components/visuals";
import {
  Arrow,
  ButtonLink,
  CheckList,
  Container,
  Eyebrow,
  SectionIntro,
} from "@/components/ui";
import { euro, guarantees, prices } from "@/content/site";
import { mediaExamples } from "@/content/projecten";

export const metadata: Metadata = {
  title: {
    absolute: "Lean AI Studio | Websites en automatisering voor het MKB",
  },
  description:
    "Websites die aanvragen opleveren en automatiseringen die handwerk wegnemen, voor bedrijven van 5 tot 50 mensen. Vaste prijs, eerst zien en dan beslissen.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    title: "Gesprek",
    text: "30 minuten, gratis. Wat wil je bereiken en waar verlies je tijd of klanten?",
  },
  {
    title: "Ontwerp of plan",
    text: "Gratis en vrijblijvend. Een klikbaar ontwerp of een stroomschema, met vaste prijs.",
  },
  {
    title: "Bouwen",
    text: "Vaste prijs en planning. Je kijkt mee via een werkende tussenversie.",
  },
  {
    title: "Live en beheer",
    text: "Oplevering met kwaliteitsrapport. Daarna bouwen we verder als je wilt.",
  },
];

const priceCards = [
  { label: "Website", value: euro(prices.website), href: "/website-laten-maken" },
  { label: "Webapplicatie", value: euro(prices.webapp), href: "/webapplicatie-laten-maken" },
  { label: "Eerste automatisering", value: euro(prices.automation), href: "/ai-automatisering" },
  { label: "Beheer", value: `${euro(prices.care)} p/m`, href: "/beheer-en-onderhoud" },
];

const faq = [
  {
    q: "Voor wie werken jullie?",
    a: "Voor MKB-bedrijven met ongeveer 5 tot 50 mensen die meer uit hun website willen halen of minder tijd kwijt willen zijn aan terugkerend werk. Je hoeft geen technische kennis te hebben.",
  },
  {
    q: "Wat betekent “gebouwd met AI”?",
    a: "AI doet bij ons het voorwerk: eerste versies van code, teksten en ontwerpen. Wij bepalen de aanpak, controleren alles en testen voordat iets live gaat. Daardoor zijn we sneller en betaalbaarder, zonder in te leveren op kwaliteit.",
  },
  {
    q: "Wat kost het?",
    a: "Een website begint vanaf €2.500, een webapplicatie vanaf €7.500, een eerste automatisering vanaf €1.500 en beheer vanaf €49 per maand. Alles excl. btw. Na het eerste gesprek krijg je een vaste prijs per fase.",
  },
  {
    q: "Zit ik daarna aan jullie vast?",
    a: "Nee. Domein, code, accounts en data staan op jouw naam. Beheer is maandelijks opzegbaar.",
  },
  {
    q: "Jullie werken ook bij Reshift. Hebben jullie wel tijd?",
    a: "Ja, daar is ruimte voor. We doen elk project zelf, dus je praat altijd direct met Frank of Kevin.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="overflow-hidden border-b border-line">
        <Container className="grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
          <div>
            <Eyebrow>Websites en automatisering voor het MKB</Eyebrow>
            <h1 className="mt-5 font-display text-[2.75rem] font-semibold leading-[1.04] text-ink sm:text-6xl lg:text-[3.5rem] xl:text-[3.75rem]">
              Meer aanvragen.
              <br />
              <span className="text-accent">Minder handwerk.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Wij bouwen websites en slimme automatiseringen voor bedrijven van 5
              tot 50 mensen. Vaste prijs, eerst zien, dan beslissen. Gebouwd met
              AI, gecontroleerd door ons.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Plan een gesprek <Arrow />
              </ButtonLink>
              <ButtonLink href="/cases" variant="secondary">
                Bekijk ons werk
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              {guarantees.slice(0, 3).map((g) => (
                <li key={g.title} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {g.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative pb-8 lg:pb-0">
            <BrowserFrame
              url="wijntripje.nl"
              src="/werk/wijntripje.jpg"
              alt="Homepage van Wijntripje.nl, een wijnreisplatform dat wij bouwden"
              width={1779}
              height={746}
              priority
              className="lg:translate-x-6"
            />
            <StatCard
              value="1 week"
              label="van idee tot live platform"
              className="absolute -bottom-2 left-3 sm:left-6"
            />
            <StatCard
              value="50.000"
              label="bezoekers in het eerste jaar"
              className="absolute -top-6 right-3 hidden sm:block lg:-right-2"
            />
          </div>
        </Container>
      </section>

      {/* Twee diensten */}
      <section>
        <Container className="py-24">
          <SectionIntro
            eyebrow="Wat we doen"
            title="Je website haalt de aanvraag binnen. De automatisering handelt hem af."
            intro="Twee diensten die elkaar versterken. Je kunt met één beginnen, en we zorgen dat ze later naadloos samenwerken."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <p className="text-sm font-semibold text-accent">Websites en webapplicaties</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Een website die klanten oplevert
              </h3>
              <CheckList
                className="mt-6"
                items={[
                  "Snel, vindbaar en duidelijk over wat je doet",
                  "Eén heldere route naar een aanvraag",
                  "Zelf teksten en projecten aanpassen",
                  "Webapplicaties en portalen als standaardsoftware niet past",
                ]}
              />
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <p className="text-sm text-muted">
                  Vanaf <span className="font-semibold text-ink">{euro(prices.website)}</span> excl. btw
                </p>
                <Link
                  href="/website-laten-maken"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  Website laten maken <Arrow />
                </Link>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <p className="text-sm font-semibold text-accent">AI-automatisering</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Werk dat zichzelf doet
              </h3>
              <CheckList
                className="mt-6"
                items={[
                  "Offertes en facturen die klaarstaan",
                  "Opvolging van leads die altijd gebeurt",
                  "Geen gegevens meer overtypen tussen systemen",
                  "Een mens controleert waar het ertoe doet",
                ]}
              />
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <p className="text-sm text-muted">
                  Vanaf <span className="font-semibold text-ink">{euro(prices.automation)}</span> excl. btw
                </p>
                <Link
                  href="/ai-automatisering"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  AI-automatisering <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Samen */}
      <section className="border-y border-line bg-surface">
        <Container className="py-24">
          <SectionIntro
            eyebrow="Samen sterker"
            title="Zo werken website en automatisering samen"
            intro="Een voorbeeld: een bezoeker vraagt een offerte aan. Daarna gebeurt het meeste vanzelf, en jij houdt de regie."
          />
          <div className="mt-12">
            <Flow
              title="Van bezoeker tot klant"
              steps={[
                { label: "Bezoeker vindt je", detail: "Via Google of een aanbeveling" },
                { label: "Vraagt offerte aan", detail: "Kort formulier op je site" },
                { label: "Concept staat klaar", detail: "Uit jouw prijzen en teksten" },
                { label: "Jij controleert", detail: "En verstuurt met één klik" },
                { label: "Opvolging gaat vanzelf", detail: "Herinnering na een paar dagen" },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Werk */}
      <section>
        <Container className="py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro
              eyebrow="Ons werk"
              title="Geen beloftes, maar dingen die draaien"
            />
            <ButtonLink href="/cases" variant="ghost">
              Alles bekijken <Arrow />
            </ButtonLink>
          </div>
          <Link
            href="/cases/wijntripje"
            className="group mt-12 grid overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-xl hover:shadow-ink/5 lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="flex items-center border-b border-line bg-paper p-6 lg:border-b-0 lg:border-r">
              <BrowserFrame
                url="wijntripje.nl"
                src="/werk/wijntripje.jpg"
                alt="Wijntripje.nl"
                width={1779}
                height={746}
              />
            </div>
            <div className="flex flex-col p-8 sm:p-10">
              <p className="text-sm font-semibold text-accent">Eigen project</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                Wijntripje.nl: een wijnreisplatform in één week
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Interactieve kaarten, een eigen CMS en automatische content. Inmiddels
                ook in het Duits, als Weintrips.de.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-muted">Gebouwd in</dt>
                  <dd className="font-display text-3xl font-semibold text-ink">1 week</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Bezoekers jaar 1</dt>
                  <dd className="font-display text-3xl font-semibold text-ink">50.000</dd>
                </div>
              </dl>
              <p className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-accent">
                Lees de case <Arrow className="transition-transform group-hover:translate-x-1" />
              </p>
            </div>
          </Link>
          <p className="mt-14 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Ook gebouwd, voor een mediabedrijf
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mediaExamples.slice(0, 3).map((e) => (
              <LinkCard key={e.title} href={e.href} title={e.title} text={e.text} />
            ))}
          </div>
        </Container>
      </section>

      {/* Werkwijze */}
      <section className="border-y border-line bg-surface">
        <Container className="py-24">
          <SectionIntro
            eyebrow="Werkwijze"
            title="Eerst zien, dan beslissen"
            intro="Je betaalt pas voor bouwen als je het ontwerp of plan goed vindt. Daarna werken we met een vaste prijs per fase."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-surface p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent-dark">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <ButtonLink href="/werkwijze" variant="ghost">
              Meer over onze werkwijze <Arrow />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Eerlijk over AI */}
      <section>
        <Container className="py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionIntro
              eyebrow="Eerlijk over AI"
              title="AI doet het voorwerk. Wij nemen de beslissingen."
              intro="Door met AI te bouwen zijn we sneller en betaalbaarder. Maar niets gaat live zonder dat Frank of Kevin het heeft gecontroleerd."
            />
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  t: "Wat AI doet",
                  items: ["Eerste versies van code", "Conceptteksten", "Testen en controleren helpen"],
                },
                {
                  t: "Wat wij doen",
                  items: ["Aanpak en ontwerp bepalen", "Alles nalopen en testen", "Jouw vragen beantwoorden"],
                },
                {
                  t: "Wat van jou blijft",
                  items: ["Domein en code", "Accounts en data", "De keuze om te stoppen"],
                },
              ].map((col) => (
                <div key={col.t} className="rounded-xl border border-line bg-surface p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{col.t}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Prijzen */}
      <section className="border-t border-line bg-surface">
        <Container className="py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro
              eyebrow="Prijzen"
              title="Je weet vooraf wat het kost"
              intro="Vanaf-prijzen excl. btw. Na het eerste gesprek krijg je een vaste prijs per fase."
            />
            <ButtonLink href="/prijzen" variant="ghost">
              Alle prijzen <Arrow />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {priceCards.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="rounded-xl border border-line bg-paper p-6 transition-colors hover:border-line-strong"
              >
                <p className="text-sm text-muted">{p.label}</p>
                <p className="mt-2 font-display text-3xl font-semibold text-ink">
                  <span className="text-base font-normal text-muted">vanaf </span>
                  {p.value}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Faq items={faq} />
      <CtaBlock />
    </main>
  );
}
