import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBlock, PageHero } from "@/components/blocks";
import { Container, SectionIntro } from "@/components/ui";
import { SITE_URL, company, founders } from "@/content/site";

export const metadata: Metadata = {
  title: "Over ons: Frank Verbrugge en Kevin van Oosteren",
  description:
    "Lean AI Studio is opgericht door Frank Verbrugge en Kevin van Oosteren, met samen ruim tien jaar ervaring in de Nederlandse digitale media bij Reshift.",
  alternates: { canonical: "/over" },
};

const values = [
  {
    title: "Praktisch",
    text: "We bouwen wat je gebruikt, niet wat indruk maakt in een presentatie.",
  },
  {
    title: "Eerlijk",
    text: "We zeggen het als iets niet loont, ook als we er dan geen opdracht aan overhouden.",
  },
  {
    title: "Zelf gedaan",
    text: "Je praat met de mensen die het bouwen. Geen accountmanagers, geen doorgeefluik.",
  },
];

export default function OverPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/over`,
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
      image: f.photo,
      email: f.email,
      sameAs: [f.linkedin],
      worksFor: { "@id": `${SITE_URL}/#organization` },
    })),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ href: "/over", label: "Over ons" }]} />
      <PageHero
        eyebrow="Over ons"
        title="Twee mensen die zelf bouwen wat ze verkopen"
        intro="Lean AI Studio is opgericht door Frank Verbrugge en Kevin van Oosteren. Bij Reshift, het mediabedrijf achter Kieskeurig.nl, Review.nl en ID.nl, zagen we hoe digitale projecten vaak te lang duren en te veel kosten. Met AI kan dat anders, zonder in te leveren op kwaliteit."
      />

      <section>
        <Container className="space-y-16 py-20">
          {founders.map((f, i) => (
            <article
              key={f.name}
              className={`grid items-center gap-10 ${
                i % 2 === 1 ? "md:grid-cols-[1fr_280px]" : "md:grid-cols-[280px_1fr]"
              }`}
            >
              <Image
                src={f.photo}
                alt={`Portret van ${f.name}`}
                width={560}
                height={560}
                className={`aspect-square w-full max-w-[280px] rounded-2xl object-cover ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink">{f.name}</h2>
                <p className="mt-1 font-medium text-accent">{f.role}</p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{f.bio}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:text-accent-dark">
                    LinkedIn
                  </a>
                  <a href={`mailto:${f.email}`} className="text-ink-soft hover:text-ink">
                    {f.email}
                  </a>
                  <a href={`tel:${f.phone.replace(/\s/g, "")}`} className="text-ink-soft hover:text-ink">
                    {f.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-y border-line bg-surface">
        <Container className="py-20">
          <SectionIntro eyebrow="Waar we voor staan" title="Hoe we werken" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-line bg-paper p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Waarom “Lean”</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Lean betekent voor ons: geen overbodige uren, geen overbodige functies, geen
              overbodige kosten. AI helpt ons daarbij, maar het doel is altijd hetzelfde: iets
              bouwen dat werkt en dat je bedrijf verder helpt.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-7 text-sm leading-relaxed text-ink-soft">
            <p className="font-semibold text-ink">Bedrijfsgegevens</p>
            <p className="mt-3">
              {company.name} is een handelsnaam van {company.legalName}
              <br />
              {company.street}, {company.postalCity}
              <br />
              KvK {company.kvk}
              <br />
              Btw {company.vat}
            </p>
          </div>
        </Container>
      </section>

      <CtaBlock />
    </main>
  );
}
