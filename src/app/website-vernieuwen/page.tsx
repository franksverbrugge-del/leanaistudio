import type { Metadata } from "next";
import ServicePage, { defaultSteps, type ServiceContent } from "@/components/ServicePage";
import { prices } from "@/content/site";

export const metadata: Metadata = {
  title: "Website vernieuwen: van verouderd naar vindbaar",
  description:
    "Je website vernieuwen zonder je vindbaarheid te verliezen. Gratis websitecheck, vaste prijs, eerst een klikbaar ontwerp. Vanaf €2.500 excl. btw.",
  alternates: { canonical: "/website-vernieuwen" },
};

const content: ServiceContent = {
  path: "/website-vernieuwen",
  crumb: "Website vernieuwen",
  serviceType: "Website vernieuwen",
  eyebrow: "Website vernieuwen",
  title: "Je website vernieuwen, zonder opnieuw bij nul te beginnen",
  intro:
    "Is je site traag, verouderd of lastig bij te houden? We kijken eerst wat werkt en wat niet. Wat goed scoort in Google nemen we mee, de rest bouwen we beter.",
  priceFrom: prices.website,
  priceNote: "Inclusief overzetten van bestaande pagina's en redirects, zodat je vindbaarheid behouden blijft.",
  secondaryCta: { href: "/websitecheck", label: "Laat je site gratis checken" },
  visual: {
    kind: "flow",
    before: [
      { label: "Verouderde site", detail: "Traag, niet mobiel" },
      { label: "Weinig aanvragen", detail: "Bezoekers haken af" },
      { label: "Lastig beheer", detail: "Elke wijziging kost tijd" },
    ],
    after: [
      { label: "Websitecheck", detail: "Wat werkt, wat niet" },
      { label: "Nieuwe site", detail: "Snel, helder, vindbaar" },
      { label: "Redirects", detail: "Geen verlies in Google" },
    ],
  },
  forWho: {
    title: "Tijd voor een nieuwe site als",
    items: [
      "Je site ouder is dan vijf jaar of niet goed werkt op een telefoon.",
      "Je je schaamt om de link naar klanten te sturen.",
      "Er nauwelijks aanvragen via de site binnenkomen.",
      "Elke wijziging via een bureau moet en geld kost.",
    ],
  },
  deliverables: {
    title: "Wat je krijgt",
    items: [
      "Een gratis websitecheck vooraf, met de drie grootste verbeterpunten.",
      "Een nieuw ontwerp, eerst als klikbaar voorbeeld.",
      "Bestaande teksten herschreven waar nodig, goede pagina's behouden.",
      "Redirects van oude naar nieuwe adressen.",
      "Snelle laadtijd, toegankelijk en goed op mobiel.",
      "Alles op jouw naam, ook als je nu vastzit bij een andere partij.",
    ],
  },
  steps: defaultSteps,
  faq: [
    {
      q: "Verlies ik mijn plek in Google?",
      a: "Niet als het goed gebeurt. We brengen in kaart welke pagina's bezoekers opleveren en zetten van elk oud adres een redirect naar het nieuwe.",
    },
    {
      q: "Mijn site staat bij een ander bureau. Kan ik overstappen?",
      a: "Meestal wel. We helpen met het overzetten van domein en gegevens. In het gesprek kijken we wat er bij je huidige partij geregeld moet worden.",
    },
    {
      q: "Wat kost vernieuwen?",
      a: "Vanaf €2.500 excl. btw, afhankelijk van het aantal pagina's en functies. Je krijgt vooraf een vaste prijs.",
    },
  ],
  related: [
    { href: "/websitecheck", title: "Gratis websitecheck", text: "Binnen twee werkdagen een persoonlijke video met verbeterpunten." },
    { href: "/website-laten-maken", title: "Website laten maken", text: "Alles over een nieuwe website bij Lean AI Studio." },
    { href: "/kennisbank/website-laten-maken-met-ai", title: "Website laten maken met AI", text: "Wat kan AI wel en niet bij het bouwen van een site?" },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
