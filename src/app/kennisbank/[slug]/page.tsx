import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ContentBlocks from "@/components/ContentBlocks";
import { Breadcrumbs } from "@/components/blocks";
import { Arrow, ButtonLink, Container, Eyebrow } from "@/components/ui";
import { articles } from "@/content/kennisbank";
import { SITE_URL, founders } from "@/content/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/kennisbank/${a.slug}` },
    openGraph: { type: "article", publishedTime: a.date, authors: [a.author] },
  };
}

const ctas = {
  gesprek: {
    title: "Liever even sparren?",
    text: "Plan een gesprek van 30 minuten. Gratis, en je weet daarna wat het voor jou kost.",
    href: "/contact",
    label: "Plan een gesprek",
  },
  websitecheck: {
    title: "Wat levert jouw website op?",
    text: "Vraag een gratis websitecheck aan: binnen twee werkdagen een persoonlijke video met verbeterpunten.",
    href: "/websitecheck",
    label: "Gratis websitecheck",
  },
  scan: {
    title: "Wat kun jij automatiseren?",
    text: "Doe de automatiseringsscan: vijf vragen, en je ziet direct waar de meeste tijd te winnen is.",
    href: "/automatiseringsscan",
    label: "Doe de scan",
  },
} as const;

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const author = founders.find((f) => f.name === a.author);
  const cta = ctas[a.cta];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.updated ?? a.date,
    inLanguage: "nl-NL",
    mainEntityOfPage: `${SITE_URL}/kennisbank/${a.slug}`,
    author: {
      "@type": "Person",
      name: a.author,
      url: `${SITE_URL}/over`,
      sameAs: author ? [author.linkedin] : undefined,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { href: "/kennisbank", label: "Kennisbank" },
          { href: `/kennisbank/${a.slug}`, label: a.title },
        ]}
      />
      <article>
        <Container className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Kennisbank</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              {a.title}
            </h1>
            <div className="mt-8 flex items-center gap-4 border-y border-line py-5">
              {author && (
                <Image
                  src={author.photo}
                  alt={`Portret van ${author.name}`}
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
              <div className="text-sm">
                <p className="font-semibold text-ink">{a.author}</p>
                <p className="text-muted">
                  {formatDate(a.updated ?? a.date)} · {a.readingMinutes} min lezen
                </p>
              </div>
            </div>
            <p className="mt-10 text-xl leading-relaxed text-ink">{a.intro}</p>
            <div className="mt-8">
              <ContentBlocks blocks={a.blocks} />
            </div>

            <aside className="mt-14 rounded-2xl bg-night p-8 text-white sm:p-10">
              <p className="font-display text-2xl font-semibold">{cta.title}</p>
              <p className="mt-3 leading-relaxed text-white/75">{cta.text}</p>
              <ButtonLink href={cta.href} variant="light" className="mt-6">
                {cta.label} <Arrow />
              </ButtonLink>
            </aside>

            {a.sources && a.sources.length > 0 && (
              <section className="mt-14">
                <h2 className="font-display text-lg font-semibold text-ink">Bronnen</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {a.sources.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:text-accent-dark">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {a.related.length > 0 && (
              <section className="mt-12 border-t border-line pt-10">
                <h2 className="font-display text-lg font-semibold text-ink">Verder lezen</h2>
                <ul className="mt-4 space-y-3">
                  {a.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="inline-flex items-center gap-2 font-medium text-ink hover:text-accent">
                        {r.label} <Arrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </Container>
      </article>
    </main>
  );
}
