import type { Metadata } from "next";
import ServicePage, { defaultSteps, type ServiceContent } from "@/components/ServicePage";
import { prices } from "@/content/site";
import { toepassingen } from "@/content/toepassingen";

export const metadata: Metadata = {
  title: "AI-automatisering voor het MKB, vanaf €1.500",
  description:
    "Minder uren aan werk dat zich herhaalt: offertes, facturen, e-mail en administratie automatiseren met AI. Een mens controleert. Eerste automatisering vanaf €1.500.",
  alternates: { canonical: "/ai-automatisering" },
};

const content: ServiceContent = {
  path: "/ai-automatisering",
  crumb: "AI-automatisering",
  serviceType: "Procesautomatisering met AI",
  eyebrow: "AI-automatisering",
  title: "Minder uren aan werk dat zich steeds herhaalt",
  intro:
    "Offertes maken, facturen opstellen, mails opvolgen, gegevens overtypen. Veel van dat werk kan vanzelf gaan. We beginnen met één proces dat je nu het meeste tijd kost, met een vaste prijs, en een mens blijft controleren.",
  priceFrom: prices.automation,
  priceNote: "Voor een eerste automatisering van één proces. Je krijgt vooraf een vaste prijs.",
  secondaryCta: { href: "/automatiseringsscan", label: "Doe de automatiseringsscan" },
  visual: {
    kind: "flow",
    before: [
      { label: "Aanvraag komt binnen", detail: "In iemands inbox" },
      { label: "Overtypen", detail: "In CRM en Excel" },
      { label: "Offerte maken", detail: "Oude versie kopiëren" },
    ],
    after: [
      { label: "Aanvraag via site", detail: "Direct in je systeem" },
      { label: "Concept klaar", detail: "Offerte of antwoord" },
      { label: "Jij controleert", detail: "En verstuurt" },
    ],
  },
  forWho: {
    title: "Automatiseren loont als",
    items: [
      "Je dezelfde handelingen elke week opnieuw doet.",
      "Je gegevens overtypt van het ene systeem naar het andere.",
      "Aanvragen of facturen blijven liggen omdat niemand tijd heeft.",
      "Je wel iets met AI wilt, maar niet weet waar je moet beginnen.",
    ],
  },
  deliverables: {
    title: "Hoe we het aanpakken",
    items: [
      "We kiezen samen één proces dat het meeste oplevert.",
      "Je krijgt een stroomschema van hoe het nu gaat en hoe het straks gaat.",
      "We bouwen met de systemen die je al hebt, waar dat kan.",
      "Een mens controleert waar het ertoe doet, zeker in het begin.",
      "We spreken vooraf af waar data staat en welke AI-diensten we gebruiken.",
      "Na oplevering meten we of het doet wat het moet doen.",
    ],
  },
  extra: {
    title: "Wat we automatiseren",
    intro: "Vijf toepassingen die we vaak tegenkomen. Klik door voor voorbeelden en prijzen.",
    cards: toepassingen.map((t) => ({
      href: `/ai-automatisering/${t.slug}`,
      title: t.title,
      text: t.short,
    })),
  },
  steps: defaultSteps,
  faq: [
    {
      q: "Wat kost een eerste automatisering?",
      a: "Vanaf €1.500 excl. btw voor één proces. Daarbij kunnen kosten komen voor de software of AI-dienst die je gebruikt. Die noemen we vooraf.",
    },
    {
      q: "Is het veilig om bedrijfsgegevens door AI te laten verwerken?",
      a: "Dat hangt af van de dienst en de afspraken. We kiezen diensten met goede voorwaarden, verwerken alleen wat nodig is en zetten zonder jouw akkoord geen persoonsgegevens in AI-diensten. Waar nodig sluiten we een verwerkersovereenkomst.",
    },
    {
      q: "Ik weet niet waar ik moet beginnen.",
      a: "Daar is het eerste gesprek voor. Of doe eerst de automatiseringsscan: in drie minuten zie je welke processen kansrijk zijn.",
    },
    {
      q: "Werken jullie met tools als Zapier, Make of n8n?",
      a: "Ja, als dat de beste keuze is. Soms is een eigen koppeling beter en goedkoper op termijn. We kiezen wat het minste gedoe geeft.",
    },
  ],
  related: [
    { href: "/kennisbank/ai-automatisering-mkb-waar-begin-je", title: "AI-automatisering: waar begin je?", text: "Een stappenplan om je eerste proces te kiezen." },
    { href: "/automatiseringsscan", title: "Automatiseringsscan", text: "In drie minuten zien wat je kunt automatiseren." },
    { href: "/cases", title: "Ons werk", text: "Systemen die we bouwden, van offertetool tot facturatie." },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
