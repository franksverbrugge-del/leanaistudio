import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBlock, Faq, LinkCard } from "@/components/blocks";
import { BeforeAfter } from "@/components/visuals";
import { ButtonLink, CheckList, Container, Eyebrow, Arrow } from "@/components/ui";
import { getToepassing, toepassingen } from "@/content/toepassingen";
import { euro, prices } from "@/content/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return toepassingen.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = getToepassing(slug);
  if (!t) return {};
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/ai-automatisering/${t.slug}` },
  };
}

export default async function ToepassingPage({ params }: PageProps) {
  const { slug } = await params;
  const t = getToepassing(slug);
  if (!t) notFound();

  const others = toepassingen.filter((o) => o.slug !== t.slug).slice(0, 3);

  return (
    <main>
      <Breadcrumbs
        items={[
          { href: "/ai-automatisering", label: "AI-automatisering" },
          { href: `/ai-automatisering/${t.slug}`, label: t.title },
        ]}
      />
      <section className="border-b border-line">
        <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>AI-automatisering</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Plan een gesprek <Arrow />
              </ButtonLink>
              <ButtonLink href="/automatiseringsscan" variant="secondary">
                Doe de scan
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted">
              <span className="font-semibold text-ink">Vanaf {euro(prices.automation)}</span>{" "}
              excl. btw voor een eerste automatisering, met vaste prijs vooraf.
            </p>
          </div>
          <BeforeAfter before={t.before} after={t.after} />
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Herken je dit?
            </h2>
            <CheckList items={t.signals} className="mt-6" />
          </div>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Wat we bouwen
            </h2>
            <CheckList items={t.build} className="mt-6" />
            {t.example && (
              <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
                {t.example.label}.{" "}
                <Link href={t.example.href} className="font-semibold text-accent hover:text-accent-dark">
                  Bekijk ons werk
                </Link>
              </p>
            )}
          </div>
        </Container>
      </section>

      <Faq items={t.faq} />

      <section className="border-t border-line">
        <Container className="py-20">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Andere automatiseringen
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <LinkCard
                key={o.slug}
                href={`/ai-automatisering/${o.slug}`}
                title={o.title}
                text={o.short}
              />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock />
    </main>
  );
}
