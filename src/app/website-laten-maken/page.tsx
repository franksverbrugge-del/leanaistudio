import type { Metadata } from "next";
import ServicePage, { defaultSteps, type ServiceContent } from "@/components/ServicePage";
import { prices } from "@/content/site";

export const metadata: Metadata = {
  title: "Website laten maken voor het MKB, vanaf €2.500",
  description:
    "Een zakelijke website die aanvragen oplevert. Vaste prijs, eerst een gratis klikbaar ontwerp, alles op jouw naam. Website laten maken vanaf €2.500.",
  alternates: { canonical: "/website-laten-maken" },
};

const content: ServiceContent = {
  path: "/website-laten-maken",
  crumb: "Website laten maken",
  serviceType: "Website laten maken",
  eyebrow: "Website laten maken",
  title: "Een website die klanten oplevert, niet alleen mooi is",
  intro:
    "Wij bouwen zakelijke websites voor bedrijven van 5 tot 50 mensen. Snel, vindbaar en gemaakt om aanvragen binnen te halen. Je ziet eerst een klikbaar ontwerp, en pas daarna beslis je.",
  priceFrom: prices.website,
  priceNote: "Inclusief ontwerp, teksten op basis van jouw input, SEO-basis en oplevering met kwaliteitsrapport.",
  secondaryCta: { href: "/websitecheck", label: "Gratis websitecheck" },
  visual: { kind: "case" },
  forWho: {
    title: "Voor wie",
    items: [
      "Je hebt nog geen goede website, of je huidige site levert niets op.",
      "Klanten vinden je wel via mond-tot-mond, maar niet via Google.",
      "Je wilt een site die je zelf kunt bijhouden.",
      "Je wilt vooraf weten wat het kost, zonder verrassingen.",
    ],
  },
  deliverables: {
    title: "Wat je krijgt",
    items: [
      "Ontwerp op maat in je eigen huisstijl, eerst als klikbaar voorbeeld.",
      "Teksten die uitleggen wat je doet en waarom klanten voor jou kiezen.",
      "Een duidelijke route naar contact: formulier, bellen of offerte aanvragen.",
      "Technische SEO: snelle laadtijd, juiste structuur, sitemap en Search Console.",
      "Een beheeromgeving waarin je zelf teksten en projecten aanpast.",
      "Domein, code en accounts op jouw naam.",
    ],
  },
  steps: defaultSteps,
  faq: [
    {
      q: "Wat kost een website bij jullie?",
      a: "Een website begint vanaf €2.500 excl. btw. Na het eerste gesprek krijg je een vaste prijs per fase. Beheer en hosting kan vanaf €49 per maand, maar dat is niet verplicht.",
    },
    {
      q: "Hoe lang duurt het?",
      a: "Dat hangt af van de omvang en van hoe snel teksten en beelden er zijn. Je krijgt vooraf een planning. Wijntripje.nl, een groter platform, bouwden we in één week.",
    },
    {
      q: "Is een website die met AI gebouwd is wel goed?",
      a: "AI doet bij ons het voorwerk: eerste versies van code en tekst. Wij ontwerpen, controleren en testen alles zelf. Niets gaat live zonder dat een van ons het heeft nagelopen.",
    },
    {
      q: "Kan ik later zelf dingen aanpassen?",
      a: "Ja. Je krijgt een beheeromgeving voor teksten, projecten en nieuws. Grotere wijzigingen doen we voor je, los of via een beheerabonnement.",
    },
    {
      q: "Wat als ik het ontwerp niet goed vind?",
      a: "Dan passen we het aan, of je stopt. Na de ontwerpfase zit je nergens aan vast.",
    },
  ],
  related: [
    { href: "/kennisbank/wat-kost-een-website-laten-maken", title: "Wat kost een website in 2027?", text: "Alle kosten op een rij, met onze eigen prijzen." },
    { href: "/website-vernieuwen", title: "Website vernieuwen", text: "Heb je al een site die niet meer werkt? Zo pakken we dat aan." },
    { href: "/cases/wijntripje", title: "Case: Wijntripje.nl", text: "In één week gebouwd, 50.000 bezoekers in het eerste jaar." },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
