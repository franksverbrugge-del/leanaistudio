/* Werk dat we laten zien. Alleen echte projecten; geen verzonnen problemen of resultaten. */

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  kind: "Eigen project" | "Klantproject";
  summary: string;
  url?: string;
  image: { src: string; width: number; height: number; alt: string };
  stats: { value: string; label: string }[];
  challenge: string[];
  solution: string[];
  result: string[];
  services: { href: string; label: string }[];
}

export const cases: CaseStudy[] = [
  {
    slug: "wijntripje",
    title: "Wijntripje.nl: een wijnreisplatform in één week gebouwd",
    client: "Wijntripje.nl en Weintrips.de",
    kind: "Eigen project",
    summary:
      "Een platform om wijnreizen door Europa te plannen, met interactieve kaarten, een eigen CMS en een systeem dat automatisch content maakt. In één week gebouwd, 50.000 bezoekers in het eerste jaar.",
    url: "https://wijntripje.nl",
    image: {
      src: "/werk/wijntripje.jpg",
      width: 1779,
      height: 746,
      alt: "Homepage van Wijntripje.nl met de kop Ontdek de mooiste wijnstreken van Europa",
    },
    stats: [
      { value: "1 week", label: "van idee tot live platform" },
      { value: "50.000", label: "bezoekers in het eerste jaar" },
      { value: "2 landen", label: "Nederlandse en Duitse versie" },
    ],
    challenge: [
      "Een nieuw platform snel online krijgen, zonder in te leveren op uitstraling en vindbaarheid.",
      "Een groot aanbod van wijnstreken, wijnhuizen en verblijven overzichtelijk maken.",
      "Zelf content en bestemmingen kunnen beheren, zonder ontwikkelaar.",
      "Een basis die meegroeit naar andere landen.",
    ],
    solution: [
      "Een maatwerkplatform met interactieve kaarten om door wijnstreken te navigeren.",
      "Een eigen CMS voor bestemmingen, wijnhuizen en artikelen.",
      "Een systeem dat automatisch content genereert voor nieuwe pagina's.",
      "Een SEO-structuur per land, regio en wijnhuis, en een ontwerp dat op elk scherm werkt.",
      "Dezelfde basis draait ook als Weintrips.de voor Duitstalige bezoekers.",
    ],
    result: [
      "Binnen één week van idee naar werkend platform.",
      "50.000 bezoekers in het eerste jaar.",
      "Beheer zonder technische kennis, en uitgebreid naar een tweede land.",
    ],
    services: [
      { href: "/website-laten-maken", label: "Website laten maken" },
      { href: "/webapplicatie-laten-maken", label: "Webapplicatie en maatwerk" },
      { href: "/ai-automatisering", label: "AI-automatisering" },
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

/** Systemen die we bouwden voor een mediabedrijf. Zonder klantnaam en zonder resultaatcijfers. */
export interface BuiltExample {
  title: string;
  text: string;
  href: string;
}

export const mediaExamples: BuiltExample[] = [
  {
    title: "Offertetool",
    text: "Offertes samenstellen uit vaste producten, prijzen en teksten, in de eigen huisstijl.",
    href: "/ai-automatisering/offerteproces-automatiseren",
  },
  {
    title: "Facturatiesysteem",
    text: "Facturen opstellen uit afspraken en leveringen, met controle voordat ze verstuurd worden.",
    href: "/ai-automatisering/facturatie-automatiseren",
  },
  {
    title: "E-mailautomatisering",
    text: "E-mailflows die klanten en leads op het juiste moment het juiste bericht sturen.",
    href: "/ai-automatisering/e-mail-en-opvolging-automatiseren",
  },
  {
    title: "Sales-outreach-tool",
    text: "Lijsten opbouwen en opvolging plannen, zodat geen kans blijft liggen.",
    href: "/ai-automatisering/e-mail-en-opvolging-automatiseren",
  },
  {
    title: "Sales- en marketingprocessen",
    text: "Terugkerende stappen in sales en marketing die nu vanzelf gebeuren.",
    href: "/ai-automatisering",
  },
  {
    title: "Eigen CMS",
    text: "Een beheersysteem op maat, zodat het team zelf content beheert.",
    href: "/webapplicatie-laten-maken",
  },
];
