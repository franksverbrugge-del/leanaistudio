/* Vaste gegevens van Lean AI Studio. Eén plek, zodat bedragen en adres overal gelijk zijn. */

export const SITE_URL = "https://www.leanaistudio.nl";

export const company = {
  name: "Lean AI Studio",
  legalName: "KF Online Services",
  street: "Ambachtsstraat 31",
  postalCity: "Veenendaal",
  country: "NL",
  kvk: "99909375",
  vat: "NL869183035B01",
  email: "frank@leanaistudio.nl",
  phone: "+31 6 57999556",
  phoneHref: "tel:+31657999556",
  linkedin: "https://www.linkedin.com/company/lean-ai-studio",
};

export interface Founder {
  name: string;
  firstName: string;
  role: string;
  photo: string;
  email: string;
  phone: string;
  linkedin: string;
  bio: string;
}

export const founders: Founder[] = [
  {
    name: "Frank Verbrugge",
    firstName: "Frank",
    role: "Mede-eigenaar, bouwt en ontwerpt",
    photo:
      "https://rcovsiiqljrktfumpdzd.supabase.co/storage/v1/object/public/media/FV.jpg",
    email: "frank@leanaistudio.nl",
    phone: "+31 6 57999556",
    linkedin: "https://www.linkedin.com/in/fverbrugge/",
    bio: "Frank is manager van Review.nl bij Reshift Digital en werkt al meer dan tien jaar in de Nederlandse digitale media. Bij Lean AI Studio ontwerpt en bouwt hij: van de structuur van een website tot de koppelingen en automatiseringen erachter. Hij controleert en test alles wat de deur uitgaat.",
  },
  {
    name: "Kevin van Oosteren",
    firstName: "Kevin",
    role: "Mede-eigenaar, strategie en AI-oplossingen",
    photo:
      "https://rcovsiiqljrktfumpdzd.supabase.co/storage/v1/object/public/media/KO.jpg",
    email: "kevin@leanaistudio.nl",
    phone: "+31 6 29566643",
    linkedin: "https://www.linkedin.com/in/kevinvanoosteren/",
    bio: "Kevin is managing director van Reshift Performance, het bedrijf achter Kieskeurig.nl, ID.nl en Review.nl. Daarnaast doet hij business development bij Oncore.ai en zit hij in de Raad van Toezicht van GS1 Nederland. Bij Lean AI Studio vertaalt hij bedrijfsvragen naar oplossingen die echt gebruikt worden: van SEO tot AI-automatisering.",
  },
];

/** Vanaf-prijzen, excl. btw. */
export const prices = {
  website: 2500,
  webapp: 7500,
  automation: 1500,
  care: 49,
};

export function euro(value: number): string {
  return `€${value.toLocaleString("nl-NL")}`;
}

export const guarantees = [
  {
    title: "Vaste prijs per fase",
    text: "Je weet vooraf wat elke fase kost. Meerwerk gebeurt alleen na jouw akkoord.",
  },
  {
    title: "Eerst zien, dan beslissen",
    text: "Niet tevreden na de ontwerpfase? Dan stop je, zonder kosten voor de volgende fasen.",
  },
  {
    title: "30 dagen herstel",
    text: "Fouten die na oplevering opduiken, lossen we de eerste 30 dagen gratis op.",
  },
  {
    title: "Alles op jouw naam",
    text: "Domein, code, accounts en data staan op jouw naam. Je zit nergens aan vast.",
  },
];
