import type { Metadata } from "next";
import Scan from "@/components/Scan";
import { Breadcrumbs } from "@/components/blocks";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Automatiseringsscan: wat kun jij automatiseren?",
  description:
    "Beantwoord vijf vragen en zie direct welke taken in jouw bedrijf het meest kansrijk zijn om te automatiseren. Gratis, in drie minuten, zonder account.",
  alternates: { canonical: "/automatiseringsscan" },
};

export default function ScanPage() {
  return (
    <main>
      <Breadcrumbs items={[{ href: "/automatiseringsscan", label: "Automatiseringsscan" }]} />
      <section>
        <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Eyebrow>Automatiseringsscan</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              Wat kun jij automatiseren?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Vijf vragen, drie minuten. Je ziet direct welke taken in jouw bedrijf het meest
              kansrijk zijn. Je hoeft geen gegevens achter te laten om je uitkomst te zien.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-10">
            <Scan />
          </div>
        </Container>
      </section>
    </main>
  );
}
