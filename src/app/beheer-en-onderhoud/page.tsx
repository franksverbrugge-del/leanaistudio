import type { Metadata } from "next";
import ServicePage, { defaultSteps, type ServiceContent } from "@/components/ServicePage";
import { prices } from "@/content/site";

export const metadata: Metadata = {
  title: "Website beheer en onderhoud, vanaf €49 per maand",
  description:
    "Hosting, updates, back-ups en kleine aanpassingen voor je website of applicatie. Maandelijks opzegbaar. Beheer en doorontwikkeling vanaf €49 per maand.",
  alternates: { canonical: "/beheer-en-onderhoud" },
};

const content: ServiceContent = {
  path: "/beheer-en-onderhoud",
  crumb: "Beheer en onderhoud",
  serviceType: "Website- en applicatiebeheer",
  eyebrow: "Beheer en onderhoud",
  title: "Je website of systeem blijft snel, veilig en up-to-date",
  intro:
    "Na de oplevering houden we alles bij: hosting, updates, back-ups en kleine aanpassingen. En als je wilt, bouwen we stap voor stap verder. Maandelijks opzegbaar.",
  priceFrom: prices.care,
  priceUnit: " per maand",
  priceNote: "Maandelijks opzegbaar met een maand opzegtermijn.",
  secondaryCta: { href: "/prijzen", label: "Bekijk alle prijzen" },
  visual: {
    kind: "flow",
    before: [
      { label: "Site staat live", detail: "Daarna gebeurt er niets" },
      { label: "Verouderde techniek", detail: "Traag of onveilig" },
      { label: "Wijziging nodig", detail: "Wie doet dat?" },
    ],
    after: [
      { label: "Monitoring", detail: "Wij zien het als iets misgaat" },
      { label: "Updates en back-ups", detail: "Automatisch en gecontroleerd" },
      { label: "Vast aanspreekpunt", detail: "Voor kleine en grote wensen" },
    ],
  },
  forWho: {
    title: "Wat beheer je oplevert",
    items: [
      "Je site blijft snel en veilig, ook over een paar jaar.",
      "Je hoeft niet zelf te zoeken als er iets misgaat.",
      "Kleine aanpassingen zijn snel geregeld.",
      "Je site groeit mee met je bedrijf.",
    ],
  },
  deliverables: {
    title: "Wat erin zit",
    items: [
      "Hosting en een SSL-certificaat.",
      "Technische updates en back-ups.",
      "Monitoring van bereikbaarheid en snelheid.",
      "Kleine aanpassingen, afhankelijk van wat we afspreken.",
      "Een vast aanspreekpunt: Frank of Kevin.",
    ],
  },
  steps: defaultSteps,
  faq: [
    {
      q: "Is beheer verplicht?",
      a: "Nee. Je kunt de site ook zelf of door een ander laten beheren. Alles staat op jouw naam.",
    },
    {
      q: "Beheren jullie ook sites die jullie niet zelf bouwden?",
      a: "Soms wel. We bekijken eerst de techniek. Bij verouderde sites is vernieuwen vaak goedkoper dan blijven repareren.",
    },
    {
      q: "Wat kost meer werk dan in het pakket zit?",
      a: "Dat spreken we vooraf af, met een vaste prijs per klus.",
    },
  ],
  related: [
    { href: "/website-laten-maken", title: "Website laten maken", text: "Een nieuwe website met beheer erbij." },
    { href: "/prijzen", title: "Prijzen", text: "Alle vanaf-prijzen op een rij." },
    { href: "/contact", title: "Contact", text: "Vraag naar de mogelijkheden voor jouw site." },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
