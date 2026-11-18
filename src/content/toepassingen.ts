import type { FlowStep } from "@/components/visuals";
import type { FaqItem } from "@/components/blocks";

/* Concrete automatiseringen, elk met een eigen pagina onder /ai-automatisering. */

export interface Toepassing {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  signals: string[];
  before: FlowStep[];
  after: FlowStep[];
  build: string[];
  example?: { label: string; href: string };
  faq: FaqItem[];
}

export const toepassingen: Toepassing[] = [
  {
    slug: "offerteproces-automatiseren",
    title: "Offerteproces automatiseren",
    short: "Van aanvraag tot verstuurde offerte, zonder overtypen.",
    metaTitle: "Offerteproces automatiseren voor het MKB",
    metaDescription:
      "Automatisch offertes maken uit vaste producten, prijzen en teksten. Van aanvraag tot verstuurde offerte zonder overtypen. Eerste automatisering vanaf €1.500.",
    intro:
      "Een aanvraag komt binnen, iemand zoekt de prijzen op, kopieert een oude offerte en past hem aan. Dat kan sneller en met minder fouten. We bouwen een offerteproces waarin de aanvraag direct een conceptofferte wordt, die jij alleen nog controleert en verstuurt.",
    signals: [
      "Je maakt offertes in Word of Excel op basis van een oude versie.",
      "Prijzen en voorwaarden staan op meerdere plekken.",
      "Aanvragen blijven liggen omdat offertes maken tijd kost.",
      "Je weet niet goed welke offertes nog open staan.",
    ],
    before: [
      { label: "Aanvraag per mail", detail: "Komt binnen in iemands inbox" },
      { label: "Prijzen opzoeken", detail: "In Excel of in je hoofd" },
      { label: "Oude offerte kopiëren", detail: "En handmatig aanpassen" },
      { label: "Versturen en vergeten", detail: "Geen opvolging" },
    ],
    after: [
      { label: "Aanvraag via formulier", detail: "Met de juiste vragen" },
      { label: "Conceptofferte klaar", detail: "Uit vaste producten en prijzen" },
      { label: "Jij controleert", detail: "En verstuurt met één klik" },
      { label: "Automatische opvolging", detail: "Na een paar dagen" },
    ],
    build: [
      "Een aanvraagformulier op je website dat de juiste informatie uitvraagt.",
      "Een productcatalogus met prijzen en teksten op één plek.",
      "Offertes in je eigen huisstijl, als PDF of als online offerte met akkoordknop.",
      "Opvolging per mail als een offerte niet getekend is.",
      "Een overzicht van open, getekende en afgewezen offertes.",
    ],
    example: { label: "We bouwden een offertetool voor een mediabedrijf", href: "/cases" },
    faq: [
      {
        q: "Werkt dit met mijn boekhoudpakket of CRM?",
        a: "Meestal wel. Veel pakketten hebben een koppeling. In het eerste gesprek kijken we welke systemen je gebruikt en wat er mogelijk is.",
      },
      {
        q: "Moet ik een nieuw offerteprogramma gaan gebruiken?",
        a: "Niet per se. Soms is een bestaand programma met een paar koppelingen genoeg. Soms is een eigen tool beter. We adviseren wat het minste gedoe geeft.",
      },
      {
        q: "Wat kost het?",
        a: "Een eerste automatisering begint vanaf €1.500. Een complete offertetool op maat valt onder webapplicaties, vanaf €7.500. Je krijgt vooraf een vaste prijs.",
      },
    ],
  },
  {
    slug: "facturatie-automatiseren",
    title: "Facturatie automatiseren",
    short: "Facturen die zichzelf opstellen uit je afspraken.",
    metaTitle: "Facturatie automatiseren voor het MKB",
    metaDescription:
      "Facturen automatisch opstellen uit afspraken, uren of leveringen, met controle voor verzending. Minder overtypen, minder fouten. Vanaf €1.500.",
    intro:
      "Facturen maken is vaak gegevens bij elkaar zoeken: uit je planning, je urenregistratie of je orderlijst. Wij koppelen die bronnen, zodat facturen klaarstaan en jij ze alleen nog controleert.",
    signals: [
      "Je typt gegevens over uit een lijst of planning naar je boekhouding.",
      "Facturen gaan later de deur uit dan zou moeten.",
      "Je mist weleens iets dat gefactureerd had moeten worden.",
    ],
    before: [
      { label: "Gegevens zoeken", detail: "Uit planning, uren of mail" },
      { label: "Overtypen", detail: "In het boekhoudpakket" },
      { label: "Controleren", detail: "En hopen dat niets mist" },
    ],
    after: [
      { label: "Bronnen gekoppeld", detail: "Uren, orders, afspraken" },
      { label: "Facturen klaargezet", detail: "In je boekhoudpakket" },
      { label: "Jij keurt goed", detail: "Daarna gaan ze de deur uit" },
    ],
    build: [
      "Koppelingen tussen je planning, urenregistratie of webshop en je boekhoudpakket.",
      "Regels voor wat wanneer gefactureerd wordt.",
      "Een controlestap voordat facturen verstuurd worden.",
      "Een overzicht van wat nog gefactureerd moet worden.",
    ],
    example: { label: "We bouwden een facturatiesysteem voor een mediabedrijf", href: "/cases" },
    faq: [
      {
        q: "Gaan er facturen de deur uit zonder dat ik ze zie?",
        a: "Alleen als jij dat wilt. Standaard bouwen we een controlestap in.",
      },
      {
        q: "Wat als mijn boekhoudpakket geen koppeling heeft?",
        a: "Dan kijken we naar alternatieven, zoals importbestanden. In het gesprek hoor je eerlijk of het de moeite waard is.",
      },
      {
        q: "Wat kost het?",
        a: "Vanaf €1.500 voor een eerste automatisering. Je krijgt een vaste prijs voordat we beginnen.",
      },
    ],
  },
  {
    slug: "e-mail-en-opvolging-automatiseren",
    title: "E-mail en opvolging automatiseren",
    short: "Leads en klanten krijgen op tijd het juiste bericht.",
    metaTitle: "E-mail en leadopvolging automatiseren",
    metaDescription:
      "Automatische e-mailflows en opvolging van leads en klanten. Geen kans meer die blijft liggen in drukke weken. Eerste automatisering vanaf €1.500.",
    intro:
      "Een aanvraag die drie dagen blijft liggen, is vaak een gemiste klant. Met automatische opvolging krijgt iedereen op tijd een reactie, ook als jij druk bent.",
    signals: [
      "Opvolging hangt af van wie er toevallig tijd heeft.",
      "Je stuurt vaak dezelfde mail, met kleine aanpassingen.",
      "Oude klanten hoor je pas weer als ze zelf bellen.",
    ],
    before: [
      { label: "Lead komt binnen", detail: "Via site, mail of telefoon" },
      { label: "Blijft liggen", detail: "Tot iemand tijd heeft" },
      { label: "Losse mail", detail: "Of geen reactie" },
    ],
    after: [
      { label: "Lead komt binnen", detail: "Direct in één overzicht" },
      { label: "Bevestiging", detail: "Persoonlijk, binnen een minuut" },
      { label: "Opvolging gepland", detail: "Met herinnering voor jou" },
    ],
    build: [
      "Eén plek waar alle aanvragen binnenkomen.",
      "Automatische bevestigingen en opvolgmails in jouw toon.",
      "Herinneringen voor het team wanneer persoonlijk contact nodig is.",
      "E-mailflows voor bestaande klanten, bijvoorbeeld onderhoud of verlenging.",
    ],
    example: { label: "We bouwden e-mailflows en een outreach-tool voor een mediabedrijf", href: "/cases" },
    faq: [
      {
        q: "Klinken automatische mails niet onpersoonlijk?",
        a: "Niet als ze goed geschreven zijn. We schrijven de mails met jou, in jouw toon, en houden ze kort.",
      },
      {
        q: "Werkt dit met mijn huidige mailprogramma?",
        a: "Meestal wel, bijvoorbeeld met Outlook, Gmail of een CRM. We kijken wat je al hebt.",
      },
      {
        q: "Wat kost het?",
        a: "Vanaf €1.500 voor een eerste automatisering, met een vaste prijs vooraf.",
      },
    ],
  },
  {
    slug: "documenten-en-administratie",
    title: "Documenten en administratie verwerken",
    short: "AI leest formulieren, facturen en mails en zet de gegevens klaar.",
    metaTitle: "Administratie automatiseren met AI",
    metaDescription:
      "Documenten, formulieren en mails automatisch laten uitlezen met AI, met controle door een mens. Minder overtypen in je administratie. Vanaf €1.500.",
    intro:
      "Veel administratie is overtypen: gegevens uit een PDF, een formulier of een mail in een ander systeem zetten. AI kan die gegevens uitlezen en klaarzetten. Een mens controleert, zeker in het begin.",
    signals: [
      "Je typt gegevens over uit PDF's, formulieren of mails.",
      "Intake van nieuwe klanten kost veel heen en weer mailen.",
      "Documenten moeten op de juiste plek worden opgeslagen.",
    ],
    before: [
      { label: "Document komt binnen", detail: "PDF, formulier of mail" },
      { label: "Lezen en overtypen", detail: "In het juiste systeem" },
      { label: "Opslaan", detail: "In de juiste map" },
    ],
    after: [
      { label: "Document komt binnen", detail: "Op één vaste plek" },
      { label: "AI leest uit", detail: "En zet gegevens klaar" },
      { label: "Jij controleert", detail: "En het staat in je systeem" },
    ],
    build: [
      "Uitlezen van documenten en mails met AI, met een controlestap.",
      "Intakeformulieren die direct de juiste gegevens ophalen.",
      "Automatisch opslaan en benoemen van documenten.",
      "Afspraken over waar data staat en welke AI-diensten worden gebruikt.",
    ],
    faq: [
      {
        q: "Wat gebeurt er met de gegevens van mijn klanten?",
        a: "We spreken vooraf af welke gegevens waar worden verwerkt en welke AI-diensten daarvoor gebruikt worden. Zonder afspraak gaan er geen persoonsgegevens naar AI-diensten. Waar nodig sluiten we een verwerkersovereenkomst.",
      },
      {
        q: "Maakt AI geen fouten?",
        a: "Soms wel. Daarom bouwen we een controlestap in, en meten we in het begin hoe vaak er iets gecorrigeerd moet worden.",
      },
      {
        q: "Wat kost het?",
        a: "Vanaf €1.500 voor een eerste automatisering. De prijs hangt af van het aantal soorten documenten en systemen.",
      },
    ],
  },
  {
    slug: "ai-assistent",
    title: "AI-assistent op je eigen kennis",
    short: "Een assistent die antwoord geeft uit jouw documenten en werkwijze.",
    metaTitle: "AI-assistent laten bouwen voor je bedrijf",
    metaDescription:
      "Een AI-assistent die vragen beantwoordt uit je eigen documenten, handleidingen en werkwijze. Voor je team of je klanten. Vanaf €1.500.",
    intro:
      "Collega's stellen steeds dezelfde vragen, of klanten zoeken antwoorden die ergens in een handleiding staan. Een AI-assistent op je eigen kennis geeft die antwoorden, met verwijzing naar de bron.",
    signals: [
      "Kennis zit in hoofden van een paar mensen.",
      "Nieuwe medewerkers stellen steeds dezelfde vragen.",
      "Klanten mailen vragen die op je site of in je documenten staan.",
    ],
    before: [
      { label: "Vraag", detail: "Van collega of klant" },
      { label: "Zoeken", detail: "In mappen of bij een collega" },
      { label: "Antwoord", detail: "Na uren of dagen" },
    ],
    after: [
      { label: "Vraag", detail: "Aan de assistent" },
      { label: "Antwoord met bron", detail: "Uit jouw documenten" },
      { label: "Lastige vraag", detail: "Gaat door naar een mens" },
    ],
    build: [
      "Een assistent die alleen antwoordt uit de bronnen die jij kiest.",
      "Bronvermelding bij elk antwoord.",
      "Doorverwijzing naar een mens als het antwoord niet zeker is.",
      "Inzicht in welke vragen gesteld worden, zodat je documentatie beter wordt.",
    ],
    faq: [
      {
        q: "Verzint de assistent geen antwoorden?",
        a: "We beperken de assistent tot jouw bronnen en laten hem eerlijk zeggen als hij het niet weet. Helemaal uitsluiten kan niet, daarom staat de bron er altijd bij.",
      },
      {
        q: "Is dit een chatbot op mijn website?",
        a: "Dat kan, maar het hoeft niet. Veel bedrijven beginnen met een interne assistent voor het eigen team.",
      },
      {
        q: "Wat kost het?",
        a: "Vanaf €1.500 voor een eerste versie, plus maandelijkse kosten voor de AI-dienst en het beheer. Die noemen we vooraf.",
      },
    ],
  },
];

export function getToepassing(slug: string): Toepassing | undefined {
  return toepassingen.find((t) => t.slug === slug);
}
