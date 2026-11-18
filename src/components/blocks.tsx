import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { ButtonLink, Container, Eyebrow, Arrow } from "@/components/ui";
import { SITE_URL, company, founders } from "@/content/site";

/* Grotere blokken die op meerdere pagina's terugkomen. */

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <Container className="py-16 sm:py-24">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}

export interface Crumb {
  href: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ href: "/", label: "Home" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };
  return (
    <Container className="pt-6">
      <JsonLd data={data} />
      <nav aria-label="Kruimelpad">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-ink">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-ink">
                  {c.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}

export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({
  items,
  title = "Veelgestelde vragen",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section>
      <Container className="py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Vragen</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              {title}
            </h2>
            <p className="mt-4 text-muted">
              Staat je vraag er niet bij? Bel{" "}
              <a href={company.phoneHref} className="text-ink underline underline-offset-4">
                {company.phone}
              </a>
              .
            </p>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-xl leading-none text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Afsluitend blok met de twee oprichters en de hoofdactie. */
export function CtaBlock({
  title = "Benieuwd wat er voor jouw bedrijf mogelijk is?",
  text = "Plan een gesprek van 30 minuten. Je praat direct met Frank of Kevin, en na afloop weet je wat het oplevert en wat het kost.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-night text-white">
      <Container className="py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              {text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="light">
                Plan een gesprek <Arrow />
              </ButtonLink>
              <a
                href={company.phoneHref}
                className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Bel {company.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            {founders.map((f) => (
              <div key={f.name} className="flex-1">
                <Image
                  src={f.photo}
                  alt={`Portret van ${f.name}`}
                  width={240}
                  height={240}
                  className="aspect-square w-full max-w-[160px] rounded-xl object-cover"
                />
                <p className="mt-3 font-semibold">{f.name}</p>
                <p className="text-sm text-white/70">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Kaart die naar een andere pagina linkt. */
export function LinkCard({
  href,
  title,
  text,
  meta,
}: {
  href: string;
  title: string;
  text: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lg hover:shadow-ink/5"
    >
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{text}</p>
      <p className="mt-5 flex items-center justify-between text-sm font-semibold text-accent">
        <span>{meta ?? "Lees meer"}</span>
        <Arrow className="transition-transform group-hover:translate-x-1" />
      </p>
    </Link>
  );
}
