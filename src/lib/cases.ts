import type { Case } from "@/types/case";

// Hardcoded voorbeelddata — later te vervangen door Supabase queries
const cases: Case[] = [
  {
    id: "1",
    slug: "klantenservice-chatbot-retailco",
    title: "Intelligente klantenservice chatbot",
    client: "RetailCo",
    description:
      "Een AI-gestuurde chatbot die 70% van de klantvragen automatisch afhandelt en naadloos doorschakelt naar medewerkers wanneer nodig.",
    challenge:
      "RetailCo ontving dagelijks honderden herhalende klantvragen via e-mail en telefoon. Het supportteam was overbelast en responstijden liepen op tot 48 uur.",
    solution:
      "We ontwikkelden een AI-chatbot getraind op de kennisbank van RetailCo. De bot beantwoordt veelgestelde vragen, verwerkt retouraanvragen en escaleert complexe cases automatisch naar de juiste medewerker.",
    result:
      "70% van alle klantvragen wordt nu automatisch afgehandeld. De gemiddelde responstijd daalde van 48 uur naar 2 minuten. Klanttevredenheid steeg met 35%.",
    tags: ["Chatbot", "Klantenservice", "NLP"],
    image_url: null,
    published_at: "2025-11-15",
  },
  {
    id: "2",
    slug: "documentanalyse-juridisch-kantoor",
    title: "Geautomatiseerde documentanalyse",
    client: "Van der Berg Advocaten",
    description:
      "AI-systeem dat juridische documenten analyseert, samenvat en relevante clausules markeert — uren werk teruggebracht tot minuten.",
    challenge:
      "Juristen besteedden gemiddeld 4 uur per contract aan handmatige analyse. Bij grote deals met tientallen documenten werd dit een bottleneck die deadlines in gevaar bracht.",
    solution:
      "We implementeerden een document-AI die contracten automatisch analyseert, kernclausules identificeert, risico's markeert en beknopte samenvattingen genereert. Het systeem is geïntegreerd in hun bestaande documentmanagementsysteem.",
    result:
      "Analysetijd per contract teruggebracht van 4 uur naar 20 minuten. Het kantoor verwerkt nu 3x meer contracten zonder extra personeel.",
    tags: ["Document AI", "Juridisch", "Automatisering"],
    image_url: null,
    published_at: "2025-09-22",
  },
  {
    id: "3",
    slug: "voorspellend-onderhoud-machinefabriek",
    title: "Voorspellend onderhoud met AI",
    client: "TechMach Industries",
    description:
      "Machine learning model dat machinestoringen voorspelt voordat ze optreden, waardoor ongeplande downtime met 80% is verminderd.",
    challenge:
      "TechMach Industries verloor jaarlijks tonnen aan ongeplande machinestilstand. Reactief onderhoud was duur en verstoorde de productie.",
    solution:
      "We bouwden een predictive maintenance model dat sensordata in real-time analyseert. Het systeem detecteert patronen die wijzen op slijtage en waarschuwt het onderhoudsteam dagen voordat een storing optreedt.",
    result:
      "Ongeplande downtime daalde met 80%. Onderhoudskosten zijn met 40% verlaagd en de levensduur van machines is significant verlengd.",
    tags: ["Machine Learning", "IoT", "Predictive Maintenance"],
    image_url: null,
    published_at: "2026-01-10",
  },
];

export function getAllCases(): Case[] {
  return cases;
}

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}
