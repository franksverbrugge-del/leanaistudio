import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs } from "@/components/blocks";
import { CheckList, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gratis websitecheck met persoonlijke video",
  description:
    "Laat je website gratis checken. Binnen twee werkdagen een persoonlijke video van 5 minuten met de drie grootste verbeterpunten. Geen verplichtingen.",
  alternates: { canonical: "/websitecheck" },
};

export default function WebsitecheckPage() {
  return (
    <main>
      <Breadcrumbs items={[{ href: "/websitecheck", label: "Gratis websitecheck" }]} />
      <section>
        <Container className="grid gap-14 py-12 sm:py-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Eyebrow>Gratis websitecheck</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              Wat houdt jouw website tegen?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Frank of Kevin bekijkt je website en neemt een persoonlijke video op van
              ongeveer 5 minuten. Daarin hoor je de drie dingen die het meeste opleveren
              als je ze aanpakt. Binnen twee werkdagen in je mailbox.
            </p>
            <h2 className="mt-10 font-display text-lg font-semibold text-ink">We kijken onder meer naar</h2>
            <CheckList
              className="mt-4"
              items={[
                "Is in vijf seconden duidelijk wat je doet en voor wie?",
                "Hoe makkelijk is het om contact op te nemen of een offerte aan te vragen?",
                "Hoe snel laadt je site, ook op een telefoon?",
                "Wordt je site goed gevonden op de woorden die ertoe doen?",
              ]}
            />
            <p className="mt-8 rounded-xl border border-line bg-surface p-5 text-sm leading-relaxed text-ink-soft">
              Geen automatisch rapport en geen verkooppraatje. Je mag de tips gewoon zelf
              of met je huidige bureau uitvoeren.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-ink">Vraag de check aan</h2>
            <div className="mt-8">
              <LeadForm variant="websitecheck" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
