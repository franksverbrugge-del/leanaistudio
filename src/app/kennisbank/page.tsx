import type { Metadata } from "next";
import { Breadcrumbs, CtaBlock, LinkCard, PageHero } from "@/components/blocks";
import { Container } from "@/components/ui";
import { articles } from "@/content/kennisbank";

export const metadata: Metadata = {
  title: "Kennisbank: websites, automatisering en AI voor het MKB",
  description:
    "Praktische artikelen over wat een website kost, waar je begint met AI-automatisering en wat AI wel en niet kan. Geschreven door Frank en Kevin.",
  alternates: { canonical: "/kennisbank" },
};

export default function KennisbankPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main>
      <Breadcrumbs items={[{ href: "/kennisbank", label: "Kennisbank" }]} />
      <PageHero
        eyebrow="Kennisbank"
        title="Eerlijke antwoorden op de vragen die ondernemers ons stellen"
        intro="Wat kost het, waar begin je, en wat kan AI echt? Geschreven door de mensen die het bouwen, met bronnen erbij."
      />
      <section>
        <Container className="py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((a) => (
              <LinkCard
                key={a.slug}
                href={`/kennisbank/${a.slug}`}
                title={a.title}
                text={a.description}
                meta={`${a.readingMinutes} min lezen · ${a.author.split(" ")[0]}`}
              />
            ))}
          </div>
        </Container>
      </section>
      <CtaBlock />
    </main>
  );
}
