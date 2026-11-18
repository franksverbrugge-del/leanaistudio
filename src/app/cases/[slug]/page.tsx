import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBlock } from "@/components/blocks";
import { BrowserFrame } from "@/components/visuals";
import { CheckList, Container, Eyebrow } from "@/components/ui";
import { cases, getCase } from "@/content/projecten";
import { SITE_URL } from "@/content/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary.slice(0, 158),
    alternates: { canonical: `/cases/${c.slug}` },
    openGraph: { images: [{ url: c.image.src, width: c.image.width, height: c.image.height }] },
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.title,
    description: c.summary,
    url: `${SITE_URL}/cases/${c.slug}`,
    image: `${SITE_URL}${c.image.src}`,
    creator: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { href: "/cases", label: "Ons werk" },
          { href: `/cases/${c.slug}`, label: c.client },
        ]}
      />
      <section className="border-b border-line">
        <Container className="py-14 sm:py-20">
          <Eyebrow>{c.kind}</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{c.summary}</p>
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
            {c.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-ink sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <BrowserFrame
            url={c.url ? c.url.replace("https://", "") : c.client}
            src={c.image.src}
            alt={c.image.alt}
            width={c.image.width}
            height={c.image.height}
            priority
          />
          {c.url && (
            <p className="mt-4 text-sm text-muted">
              Bekijk het live:{" "}
              <a href={c.url} className="font-semibold text-accent hover:text-accent-dark" rel="noopener" target="_blank">
                {c.url.replace("https://", "")}
              </a>{" "}
              en{" "}
              <a href="https://weintrips.de" className="font-semibold text-accent hover:text-accent-dark" rel="noopener" target="_blank">
                weintrips.de
              </a>
            </p>
          )}
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="grid gap-12 py-20 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">De opdracht</h2>
            <CheckList items={c.challenge} className="mt-5" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Wat we bouwden</h2>
            <CheckList items={c.solution} className="mt-5" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Het resultaat</h2>
            <CheckList items={c.result} className="mt-5" />
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-14">
          <p className="text-sm text-muted">Diensten in dit project:</p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {c.services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-block rounded-full border border-line-strong bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-ink"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBlock />
    </main>
  );
}
