import type { Metadata } from "next";
import ServicePage, { defaultSteps, type ServiceContent } from "@/components/ServicePage";
import { prices } from "@/content/site";

export const metadata: Metadata = {
  title: "Webapplicatie of maatwerk software laten maken",
  description:
    "Software die past bij hoe jouw bedrijf werkt: portalen, offertetools, planning en beheersystemen. Vaste prijs per fase, code op jouw naam. Vanaf €7.500.",
  alternates: { canonical: "/webapplicatie-laten-maken" },
};

const content: ServiceContent = {
  path: "/webapplicatie-laten-maken",
  crumb: "Webapplicatie en maatwerk",
  serviceType: "Maatwerk softwareontwikkeling",
  eyebrow: "Webapplicatie en maatwerk",
  title: "Software die past bij hoe jij werkt",
  intro:
    "Soms past geen enkel standaardpakket. Dan bouwen we een webapplicatie op maat: een klantportaal, een offertetool, een planningssysteem of een eigen beheeromgeving. Met AI bouwen we sneller, zodat maatwerk betaalbaar wordt voor het MKB.",
  priceFrom: prices.webapp,
  priceNote: "Eerst een gratis plan met schermontwerp en vaste prijs per fase.",
  secondaryCta: { href: "/kennisbank/wat-kost-een-website-laten-maken", label: "Lees over kosten" },
  visual: {
    kind: "flow",
    before: [
      { label: "Excel-lijsten", detail: "Op meerdere plekken" },
      { label: "Losse mails", detail: "Niemand heeft overzicht" },
      { label: "Dubbel werk", detail: "Overtypen tussen systemen" },
    ],
    after: [
      { label: "Eén systeem", detail: "Alles op één plek" },
      { label: "Koppelingen", detail: "Met boekhouding en CRM" },
      { label: "Overzicht", detail: "Voor team en klant" },
    ],
  },
  forWho: {
    title: "Maatwerk is slim als",
    items: [
      "Je werkt met Excel-lijsten die eigenlijk een systeem zouden moeten zijn.",
      "Standaardsoftware maar half past, of te duur wordt per gebruiker.",
      "Klanten informatie bij je opvragen die ze zelf zouden kunnen inzien.",
      "Je een eigen product of dienst digitaal wilt aanbieden.",
    ],
  },
  deliverables: {
    title: "Wat je krijgt",
    items: [
      "Een plan met schermontwerpen voordat er gebouwd wordt.",
      "Elke week een werkende tussenversie om te bekijken.",
      "Koppelingen met de systemen die je al gebruikt.",
      "Inloggen, rollen en rechten waar nodig.",
      "Broncode in jouw eigen GitHub-account, met documentatie.",
      "Beheer en doorontwikkeling per maand als je dat wilt.",
    ],
  },
  extra: {
    title: "Wat we eerder bouwden",
    intro: "Voor een mediabedrijf bouwden we onder meer deze systemen.",
    cards: [
      { href: "/ai-automatisering/offerteproces-automatiseren", title: "Offertetool", text: "Offertes uit vaste producten, prijzen en teksten." },
      { href: "/ai-automatisering/facturatie-automatiseren", title: "Facturatiesysteem", text: "Facturen opstellen uit afspraken en leveringen." },
      { href: "/cases/wijntripje", title: "Platform met eigen CMS", text: "Wijntripje.nl: kaarten, CMS en automatische content." },
    ],
  },
  steps: defaultSteps,
  faq: [
    {
      q: "Wat kost een webapplicatie?",
      a: "Vanaf €7.500 excl. btw voor een eerste versie. Grotere systemen kosten meer. Je krijgt per fase een vaste prijs, en we beginnen het liefst klein.",
    },
    {
      q: "Is maatwerk niet duur in onderhoud?",
      a: "We bouwen met gangbare, moderne techniek, zodat elke goede ontwikkelaar ermee verder kan. Beheer kan vanaf €49 per maand.",
    },
    {
      q: "Van wie is de software?",
      a: "Van jou. Na betaling staan code, accounts en data op jouw naam.",
    },
  ],
  related: [
    { href: "/ai-automatisering", title: "AI-automatisering", text: "Soms is een slimme koppeling genoeg in plaats van nieuwe software." },
    { href: "/werkwijze", title: "Zo werken we", text: "Hoe we AI gebruiken en waar wij beslissen." },
    { href: "/prijzen", title: "Prijzen", text: "Alle vanaf-prijzen op een rij." },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
