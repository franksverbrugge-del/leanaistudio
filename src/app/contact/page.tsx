import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { Container, Eyebrow, CheckList } from "@/components/ui";
import { company, founders } from "@/content/site";

export const metadata: Metadata = {
  title: "Plan een gesprek van 30 minuten",
  description:
    "Vertel kort waar je mee zit, dan bellen we je binnen één werkdag. Gratis gesprek van 30 minuten met Frank of Kevin van Lean AI Studio.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <Container className="grid gap-14 py-14 sm:py-20 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              In 30 minuten weet je wat mogelijk is
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Vertel kort waar je mee zit. We bellen je binnen één werkdag terug voor
              een gesprek van 30 minuten. Gratis en zonder verplichting.
            </p>
            <h2 className="mt-10 font-display text-lg font-semibold text-ink">
              In het gesprek kijken we samen naar
            </h2>
            <CheckList
              className="mt-4"
              items={[
                "Wat je wilt bereiken met je website of je processen",
                "Waar je nu tijd of klanten verliest",
                "Wat een oplossing ongeveer kost en hoe lang het duurt",
              ]}
            />

            <div className="mt-12 space-y-5 border-t border-line pt-8">
              <p className="text-sm font-semibold text-ink">Liever direct bellen of mailen?</p>
              {founders.map((f) => (
                <div key={f.name} className="flex items-center gap-4">
                  <Image
                    src={f.photo}
                    alt={`Portret van ${f.name}`}
                    width={112}
                    height={112}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-ink">{f.name}</p>
                    <p className="text-muted">
                      <a href={`tel:${f.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                        {f.phone}
                      </a>
                      {" · "}
                      <a href={`mailto:${f.email}`} className="hover:text-ink">
                        {f.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-xs leading-relaxed text-muted">
                {company.name}, {company.street}, {company.postalCity}. KvK {company.kvk}.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-ink">Stuur je vraag</h2>
            <p className="mt-2 text-muted">Duurt één minuut.</p>
            <div className="mt-8">
              <LeadForm variant="contact" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="grid gap-6 py-16 md:grid-cols-2">
          <Link
            href="/websitecheck"
            className="rounded-xl border border-line bg-paper p-6 transition-colors hover:border-line-strong"
          >
            <p className="font-display text-lg font-semibold text-ink">Eerst een gratis websitecheck?</p>
            <p className="mt-2 text-muted">
              Binnen twee werkdagen een persoonlijke video met de drie grootste verbeterpunten.
            </p>
          </Link>
          <Link
            href="/automatiseringsscan"
            className="rounded-xl border border-line bg-paper p-6 transition-colors hover:border-line-strong"
          >
            <p className="font-display text-lg font-semibold text-ink">Benieuwd wat je kunt automatiseren?</p>
            <p className="mt-2 text-muted">
              Doe de scan in drie minuten en zie direct waar de meeste tijd te winnen is.
            </p>
          </Link>
        </Container>
      </section>
    </main>
  );
}
