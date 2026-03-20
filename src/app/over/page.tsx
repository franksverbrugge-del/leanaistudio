import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DarkSection from "@/components/DarkSection";
import { createServerSupabaseClient } from "@/lib/supabase-server";

/* ── SEO Metadata ── */

export const metadata: Metadata = {
  title: "Over Lean AI Studio — Frank Verbrugge & Kevin van Oosteren",
  description:
    "Leer het team achter Lean AI Studio kennen. Frank Verbrugge en Kevin van Oosteren combineren 10+ jaar digitale media-ervaring bij Reshift met AI-gedreven ontwikkeling. Sneller bouwen, slimmer werken.",
  alternates: {
    canonical: "https://www.leanaistudio.nl/over",
  },
  openGraph: {
    title: "Over Lean AI Studio — Het team",
    description:
      "Frank Verbrugge en Kevin van Oosteren: 10+ jaar digitale media bij Reshift, nu AI-gedreven development voor Nederlandse bedrijven.",
    url: "https://www.leanaistudio.nl/over",
    siteName: "Lean AI Studio",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Lean AI Studio",
    description:
      "Frank Verbrugge en Kevin van Oosteren: AI-gedreven development met 10+ jaar digitale media-ervaring.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── JSON-LD Structured Data ── */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.leanaistudio.nl/#organization",
      name: "Lean AI Studio",
      alternateName: "LAS",
      url: "https://www.leanaistudio.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.leanaistudio.nl/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Lean AI Studio ontwerpt en bouwt websites, applicaties en bedrijfssystemen met een eigen AI-systeem. Sneller, effici\u00ebnter en direct klaar voor groei.",
      foundingDate: "2025",
      founders: [
        { "@id": "https://www.leanaistudio.nl/#frank-verbrugge" },
        { "@id": "https://www.leanaistudio.nl/#kevin-van-oosteren" },
      ],
      address: { "@type": "PostalAddress", addressCountry: "NL" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "frank@leanaistudio.nl",
          telephone: "+31657999556",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "kevin@leanaistudio.nl",
          telephone: "+31629566643",
        },
      ],
      sameAs: ["https://www.linkedin.com/company/lean-ai-studio"],
      knowsAbout: [
        "AI-gedreven webontwikkeling",
        "Next.js applicaties",
        "Procesautomatisering",
        "Bedrijfssystemen",
        "SEO-geoptimaliseerde websites",
        "Supabase",
        "Vercel",
        "Claude AI development",
      ],
      numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
      areaServed: { "@type": "Country", name: "Nederland" },
    },
    {
      "@type": "Person",
      "@id": "https://www.leanaistudio.nl/#frank-verbrugge",
      name: "Frank Verbrugge",
      jobTitle: "Eigenaar & Lead Developer",
      description:
        "Manager Review.nl bij Reshift Digital met bredere verantwoordelijkheden binnen het bedrijf. 10+ jaar ervaring in de Nederlandse digitale media-industrie. Hands-on developer met expertise in Next.js, Supabase en AI-gedreven development workflows.",
      url: "https://www.leanaistudio.nl/over",
      image:
        "https://rcovsiiqljrktfumpdzd.supabase.co/storage/v1/object/public/media/FV.jpg",
      email: "frank@leanaistudio.nl",
      telephone: "+31657999556",
      sameAs: ["https://www.linkedin.com/in/fverbrugge/"],
      worksFor: [
        { "@id": "https://www.leanaistudio.nl/#organization" },
        {
          "@type": "Organization",
          name: "Reshift Digital",
          url: "https://www.reshift.nl",
          description:
            "Het grootste tech-gespecialiseerde mediahuis van Nederland",
        },
      ],
      knowsAbout: [
        "Full-stack webontwikkeling",
        "Next.js & React",
        "Supabase & databases",
        "AI-assisted development",
        "Content management systemen",
        "DevOps & Vercel deployment",
      ],
      nationality: { "@type": "Country", name: "Nederland" },
    },
    {
      "@type": "Person",
      "@id": "https://www.leanaistudio.nl/#kevin-van-oosteren",
      name: "Kevin van Oosteren",
      jobTitle: "Eigenaar & AI Solutions Architect",
      description:
        "Managing Director bij Reshift Performance (Kieskeurig.nl, ID.nl, Review.nl). Verantwoordelijk voor Business Development bij Oncore.ai. Lid Raad van Toezicht GS1 Nederland. 10+ jaar ervaring in digitale media, SEO, programmatic advertising en data-gedreven optimalisatie.",
      url: "https://www.leanaistudio.nl/over",
      image:
        "https://rcovsiiqljrktfumpdzd.supabase.co/storage/v1/object/public/media/KO.jpg",
      email: "kevin@leanaistudio.nl",
      telephone: "+31629566643",
      sameAs: ["https://www.linkedin.com/in/kevinvanoosteren/"],
      worksFor: [
        { "@id": "https://www.leanaistudio.nl/#organization" },
        {
          "@type": "Organization",
          name: "Reshift Performance",
          url: "https://www.reshift.nl",
          description:
            "Het grootste tech-gespecialiseerde mediahuis van Nederland",
        },
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "GS1 Nederland",
          url: "https://www.gs1.nl",
          description: "Raad van Toezicht",
        },
      ],
      knowsAbout: [
        "AI-gedreven ontwikkeling",
        "SEO & zoekmachineoptimalisatie",
        "Digitale media strategie",
        "Programmatic advertising",
        "Data-gedreven optimalisatie",
        "Business development",
        "Claude Code / AI-assisted development",
      ],
      nationality: { "@type": "Country", name: "Nederland" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.leanaistudio.nl/over#webpage",
      url: "https://www.leanaistudio.nl/over",
      name: "Over Lean AI Studio — Frank Verbrugge & Kevin van Oosteren",
      description:
        "Leer het team achter Lean AI Studio kennen. Frank Verbrugge en Kevin van Oosteren combineren 10+ jaar digitale media-ervaring bij Reshift met AI-gedreven ontwikkeling.",
      isPartOf: { "@id": "https://www.leanaistudio.nl/#website" },
      about: { "@id": "https://www.leanaistudio.nl/#organization" },
      mainEntity: { "@id": "https://www.leanaistudio.nl/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.leanaistudio.nl",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Over ons",
            item: "https://www.leanaistudio.nl/over",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.leanaistudio.nl/#website",
      url: "https://www.leanaistudio.nl",
      name: "Lean AI Studio",
      publisher: { "@id": "https://www.leanaistudio.nl/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.leanaistudio.nl/over#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wie zitten er achter Lean AI Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lean AI Studio is opgericht door Frank Verbrugge en Kevin van Oosteren. Beiden werken daarnaast bij Reshift Digital, het grootste tech-gespecialiseerde mediahuis van Nederland, verantwoordelijk voor Kieskeurig.nl, Review.nl en ID.nl. Frank is Manager Review.nl en hands-on lead developer. Kevin is Managing Director bij Reshift Performance en lid van de Raad van Toezicht van GS1 Nederland.",
          },
        },
        {
          "@type": "Question",
          name: "Wat maakt Lean AI Studio anders dan een traditioneel webbureau?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lean AI Studio werkt met een eigen AI-gedreven ontwikkelsysteem waarmee we websites, applicaties en bedrijfssystemen tot 5-10x sneller opleveren dan traditionele bureaus. We combineren 10+ jaar ervaring in digitale media met de nieuwste AI-technologie voor development.",
          },
        },
        {
          "@type": "Question",
          name: "Voor welke bedrijven werkt Lean AI Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We werken met Nederlandse bedrijven die slimmer willen werken, processen willen automatiseren en technologie willen inzetten voor groei. Van startups tot gevestigde organisaties die behoefte hebben aan een partij die snel kan schakelen.",
          },
        },
        {
          "@type": "Question",
          name: "Welke technologie\u00ebn gebruikt Lean AI Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We bouwen met moderne technologie\u00ebn waaronder Next.js, React, Supabase, Vercel en Claude AI. Onze AI-gedreven workflow stelt ons in staat sneller te itereren, minder fouten te maken en beter schaalbare oplossingen te leveren.",
          },
        },
      ],
    },
  ],
};

/* ── Icons ── */

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5 13L9 17L19 7"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM1.5 5.5h3v10h-3v-10Zm5.5 0h3v1.4c.4-.7 1.4-1.6 3-1.6 3.2 0 3.5 2.1 3.5 4.8v5.4h-3v-4.8c0-1.1 0-2.6-1.6-2.6-1.6 0-1.9 1.3-1.9 2.5v4.9h-3v-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Data ── */

const kevinPhoto =
  "https://rcovsiiqljrktfumpdzd.supabase.co/storage/v1/object/public/media/KO.jpg";
const frankPhoto =
  "https://rcovsiiqljrktfumpdzd.supabase.co/storage/v1/object/public/media/FV.jpg";

interface Founder {
  name: string;
  role: string;
  photo: string;
  bio: string;
  tags: string[];
  linkedin: string;
  email: string;
  phone: string;
}

const founders: Founder[] = [
  {
    name: "Frank Verbrugge",
    role: "Eigenaar & Lead Developer",
    photo: frankPhoto,
    bio: "Manager Review.nl bij Reshift Digital met bredere verantwoordelijkheden binnen het bedrijf. Al meer dan 10 jaar actief in de Nederlandse digitale media-industrie. Frank is de technische drijvende kracht achter Lean AI Studio: hij ontwerpt architecturen, schrijft code en implementeert de AI-gedreven workflows die onze projecten tot 5-10x versnellen.",
    tags: [
      "Full-stack Development",
      "Next.js",
      "Supabase",
      "AI Workflows",
      "DevOps",
    ],
    linkedin: "https://www.linkedin.com/in/fverbrugge/",
    email: "frank@leanaistudio.nl",
    phone: "+31 6 57999556",
  },
  {
    name: "Kevin van Oosteren",
    role: "Eigenaar & AI Solutions Architect",
    photo: kevinPhoto,
    bio: "Managing Director bij Reshift Performance, waar hij eindverantwoordelijk is voor Kieskeurig.nl, ID.nl en Review.nl \u2014 samen goed voor miljoenen maandelijkse bezoekers. Daarnaast verantwoordelijk voor Business Development bij Oncore.ai en lid van de Raad van Toezicht van GS1 Nederland. Kevin combineert strategisch denken met hands-on kennis van SEO, programmatic advertising en data-gedreven optimalisatie.",
    tags: [
      "AI Solutions",
      "SEO",
      "Digital Strategy",
      "Data & Analytics",
      "Business Development",
    ],
    linkedin: "https://www.linkedin.com/in/kevinvanoosteren/",
    email: "kevin@leanaistudio.nl",
    phone: "+31 6 29566643",
  },
];

const stats = [
  { value: "20+", label: "Projecten opgeleverd" },
  { value: "3 weken", label: "Gem. implementatietijd" },
  { value: "10+", label: "Jaar digitale media-ervaring" },
  { value: "100%", label: "Nederlandse bedrijven" },
];

const pijlers = [
  {
    title: "Praktisch",
    text: "Geen theorie, werkende oplossingen. We denken vanuit jouw business, niet vanuit techniek.",
  },
  {
    title: "Snel",
    text: "Korte doorlooptijden, snelle iteraties. Tot 5-10x sneller dan traditionele bureaus.",
  },
  {
    title: "Slim",
    text: "Gebouwd met ons eigen AI-systeem. Minder fouten, beter schaalbaar.",
  },
  {
    title: "Betrokken",
    text: "We denken mee als partner. Geen factuur-en-klaar-mentaliteit.",
  },
];

const faqs = [
  {
    q: "Wie zitten er achter Lean AI Studio?",
    a: "Lean AI Studio is opgericht door Frank Verbrugge en Kevin van Oosteren. Beiden werken daarnaast bij Reshift Digital, het grootste tech-gespecialiseerde mediahuis van Nederland, verantwoordelijk voor Kieskeurig.nl, Review.nl en ID.nl. Frank is Manager Review.nl en hands-on lead developer. Kevin is Managing Director bij Reshift Performance en lid van de Raad van Toezicht van GS1 Nederland.",
  },
  {
    q: "Wat maakt Lean AI Studio anders dan een traditioneel webbureau?",
    a: "Lean AI Studio werkt met een eigen AI-gedreven ontwikkelsysteem waarmee we websites, applicaties en bedrijfssystemen tot 5-10x sneller opleveren dan traditionele bureaus. We combineren 10+ jaar ervaring in digitale media met de nieuwste AI-technologie voor development.",
  },
  {
    q: "Voor welke bedrijven werkt Lean AI Studio?",
    a: "We werken met Nederlandse bedrijven die slimmer willen werken, processen willen automatiseren en technologie willen inzetten voor groei. Van startups tot gevestigde organisaties die behoefte hebben aan een partij die snel kan schakelen.",
  },
  {
    q: "Welke technologie\u00ebn gebruikt Lean AI Studio?",
    a: "We bouwen met moderne technologie\u00ebn waaronder Next.js, React, Supabase, Vercel en Claude AI. Onze AI-gedreven workflow stelt ons in staat sneller te itereren, minder fouten te maken en beter schaalbare oplossingen te leveren.",
  },
];

/* ── Page ── */

export default async function OverPage() {
  // Fetch team photos from Supabase (fallback to hardcoded URLs)
  let teamPhotos: Record<string, string> = {};
  try {
    const supabase = await createServerSupabaseClient();
    const { data } = await supabase
      .from("team")
      .select("name, photo_url")
      .order("order_index");
    if (data) {
      for (const m of data) {
        if (m.photo_url) teamPhotos[m.name] = m.photo_url;
      }
    }
  } catch {
    // Supabase not available — use hardcoded photos
  }

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="mx-auto max-w-5xl px-6 pt-6"
      >
        <ol className="flex items-center gap-2 text-sm text-muted">
          <li>
            <Link href="/" className="transition-colors hover:text-navy">
              Home
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li className="text-navy font-medium">Over ons</li>
        </ol>
      </nav>

      {/* Sectie 1 — Hero */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Wij bouwen slimme digitale oplossingen die &eacute;cht werken.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Lean AI Studio is opgericht door Frank Verbrugge en Kevin van
            Oosteren &mdash; twee ondernemers die 10+ jaar ervaring in
            digitale media combineren met AI-gedreven ontwikkeling.
          </p>
        </div>
      </section>

      {/* Sectie 2 — De oprichters */}
      <DarkSection>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            De oprichters
          </h2>
          <div className="mt-16 flex flex-col gap-16">
            {founders.map((f) => {
              const photo = teamPhotos[f.name] ?? f.photo;
              return (
                <article
                  key={f.name}
                  className="flex flex-col items-center gap-8 sm:flex-row sm:items-start"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={`Portretfoto van ${f.name}, ${f.role} bij Lean AI Studio`}
                    className="h-32 w-32 shrink-0 rounded-full object-cover ring-2 ring-[#2563EB]/30"
                  />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {f.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#38BDF8]">
                      {f.role}
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-white/80">
                      {f.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {f.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#1A2E45] px-3 py-1 text-xs font-medium text-[#38BDF8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#38BDF8] transition-colors hover:text-white"
                      >
                        <LinkedInIcon />
                        LinkedIn
                      </a>
                      <a
                        href={`mailto:${f.email}`}
                        className="text-[#38BDF8] transition-colors hover:text-white"
                      >
                        {f.email}
                      </a>
                      <a
                        href={`tel:${f.phone.replace(/\s/g, "")}`}
                        className="text-[#38BDF8] transition-colors hover:text-white"
                      >
                        {f.phone}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </DarkSection>

      {/* Sectie 3 — Stats */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-navy sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 4 — Waarom Lean AI Studio */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Waarom Lean AI Studio
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-white/80">
            Na jarenlang bij het grootste tech-mediahuis van Nederland te
            werken, zagen we hoe digitale projecten vaak vastliepen: te lang,
            te duur, te complex. Met de opkomst van AI-gedreven development
            zagen we de kans om het fundamenteel anders te doen.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-white/80">
            Lean AI Studio combineert onze ervaring uit de digitale
            media-industrie met een eigen AI-ontwikkelsysteem. Het resultaat:
            websites, applicaties en bedrijfssystemen die in weken live gaan
            in plaats van maanden.
          </p>
        </div>
      </DarkSection>

      {/* Sectie 5 — Onze werkwijze */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Onze werkwijze
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {pijlers.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-[#DBEAFE] bg-white p-8"
              >
                <h3 className="font-display text-lg font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#374151]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 6 — Track record */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Waar we vandaan komen
          </h2>
          <div className="mx-auto mt-10 max-w-2xl space-y-6 text-center leading-relaxed text-white/80">
            <p>
              Naast Lean AI Studio werken Kevin en Frank bij{" "}
              <strong className="text-white">Reshift Digital</strong> &mdash;
              het grootste tech-gespecialiseerde mediahuis van Nederland,
              verantwoordelijk voor{" "}
              <strong className="text-white">Kieskeurig.nl</strong>,{" "}
              <strong className="text-white">Review.nl</strong> en{" "}
              <strong className="text-white">ID.nl</strong>.
            </p>
            <p>
              Kevin is daarnaast lid van de{" "}
              <strong className="text-white">
                Raad van Toezicht van GS1 Nederland
              </strong>{" "}
              en verantwoordelijk voor Business Development bij{" "}
              <strong className="text-white">Oncore.ai</strong>.
            </p>
            <p>
              Deze combinatie van hands-on media-ervaring, governance en
              AI-expertise vormt het fundament van alles wat we bij Lean AI
              Studio bouwen.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/cases"
              className="text-sm font-medium text-[#38BDF8] transition-colors hover:text-white"
            >
              Bekijk onze cases &rarr;
            </Link>
          </div>
        </div>
      </DarkSection>

      {/* Sectie 7 — FAQ */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Veelgestelde vragen
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-[#DBEAFE] bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-medium text-navy">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-[#2563EB] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-[#374151]">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 8 — CTA */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Benieuwd wat we voor jouw organisatie kunnen betekenen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            We laten je graag zien hoe we jouw processen kunnen verbeteren en
            versnellen met slimme AI-oplossingen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-[#38BDF8] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
            >
              Plan een kennismaking
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </DarkSection>
    </main>
  );
}
