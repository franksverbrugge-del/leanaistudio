import type { Metadata } from "next";
import Link from "next/link";
import DarkSection from "@/components/DarkSection";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Over ons — Lean AI Studio",
  description:
    "Lean AI Studio bouwt slimme digitale oplossingen die echt werken. Leer meer over ons team en onze aanpak.",
};

/* ── Icons ── */

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M5 13L9 17L19 7" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="22" r="14" stroke="#2563EB" strokeWidth="2" />
      <path d="M20 22L28 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 10H26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 8V10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6C14 6 10 10 10 16C10 20 12 23 15 25V32H25V25C28 23 30 20 30 16C30 10 26 6 20 6Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 32H24M17 28H23" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16C16 14.5 17 13 20 13C23 13 24 14.5 24 16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6V34" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 34H28" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 14L20 10L30 14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L6 24H14L10 14Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" />
      <path d="M30 14L26 24H34L30 14Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Types ── */

interface TeamMember {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  photo_url: string | null;
}

interface FallbackTeamMember {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo_url: string | null;
}

const fallbackTeam: FallbackTeamMember[] = [
  {
    id: "frank",
    name: "Frank Verbrugge",
    phone: "+31 6 57999556",
    email: "frank@leanaistudios.nl",
    photo_url: null,
  },
  {
    id: "kevin",
    name: "Kevin van Oosteren",
    phone: "+31 6 29566643",
    email: "kevin@leanaistudios.nl",
    photo_url: null,
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((p) => p[0] === p[0].toUpperCase())
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

/* ── Data ── */

const aanpakPunten = [
  "We denken vanuit jouw business, niet vanuit techniek",
  "We bouwen snel en itereren direct",
  "We automatiseren waar mogelijk",
  "We leveren oplossingen die direct gebruikt kunnen worden",
];

const verschilKaarten = [
  { Icon: SpeedIcon, text: "Sneller bouwen" },
  { Icon: BrainIcon, text: "Slimmer werken en fouten verminderen" },
  { Icon: ScaleIcon, text: "Beter schaalbare oplossingen" },
];

const waarden = [
  { title: "Praktisch", description: "geen theorie, maar werkende oplossingen" },
  { title: "Snel", description: "korte doorlooptijden, snelle iteraties" },
  { title: "Slim", description: "technologie die echt iets oplevert" },
  { title: "Betrokken", description: "we denken mee als partner" },
];

const voorWiePunten = [
  "Slimmer willen werken",
  "Processen willen automatiseren",
  "Technologie willen inzetten voor groei",
  "Behoefte hebben aan een partij die snel kan schakelen",
];

/* ── Page ── */

export default async function OverPage() {
  let team: TeamMember[] = [];

  try {
    const supabase = await createServerSupabaseClient();
    const { data } = await supabase
      .from("team")
      .select("id, name, phone, email, photo_url")
      .order("order_index");
    if (data && data.length > 0) {
      team = data;
    }
  } catch {
    // Supabase not available
  }

  // Use Supabase data if available, otherwise fallback
  const displayTeam =
    team.length > 0
      ? team.map((m) => ({
          id: m.id,
          name: m.name,
          phone: m.phone,
          email: m.email,
          photo_url: m.photo_url,
        }))
      : fallbackTeam;

  return (
    <main>
      {/* Sectie 1 — Hero */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Wij bouwen slimme digitale oplossingen die echt werken.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Lean AI Studio is opgericht vanuit &eacute;&eacute;n duidelijke
            overtuiging: technologie moet je bedrijf versnellen, niet vertragen.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#374151]">
            Te veel digitale projecten duren te lang, kosten te veel en leveren
            te weinig op. Wij doen dat anders. Met ons eigen AI-systeem bouwen
            we websites, applicaties en bedrijfssystemen sneller, effici&euml;nter
            en slimmer.
          </p>
        </div>
      </section>

      {/* Sectie 2 — Onze aanpak */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Geen lange trajecten. Geen onnodige complexiteit. Gewoon resultaat.
          </h2>
          <p className="mt-4 text-center text-lg text-white/60">
            Wij combineren technologie met een pragmatische manier van werken:
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {aanpakPunten.map((punt) => (
              <div key={punt} className="flex items-center gap-4">
                <CheckIcon />
                <p className="text-lg text-white">{punt}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-16 text-center font-display text-2xl italic text-white sm:text-3xl">
            &ldquo;Daardoor realiseren we in weken wat normaal maanden
            duurt.&rdquo;
          </blockquote>
        </div>
      </DarkSection>

      {/* Sectie 3 — Ons verschil */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Gebouwd op een eigen AI-systeem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            Wij hebben een eigen AI-gedreven ontwikkelsysteem ontwikkeld dat ons
            helpt met:
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {verschilKaarten.map((kaart) => (
              <div
                key={kaart.text}
                className="flex flex-col items-center rounded-xl border border-[#DBEAFE] bg-white p-8 text-center"
              >
                <kaart.Icon />
                <p className="mt-5 font-display text-lg font-semibold text-navy">
                  {kaart.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-base text-[#2563EB]">
            Dit stelt ons in staat om effici&euml;nter te werken dan
            traditionele partijen, en dat zie je terug in snelheid,
            kwaliteit en kosten.
          </p>
        </div>
      </section>

      {/* Sectie 4 — Het team */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Het team
          </h2>
          <div className="mt-14 grid gap-12 sm:grid-cols-2">
            {displayTeam.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                {member.photo_url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={member.photo_url}
                    alt={member.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2563EB]">
                    <span className="font-display text-xl font-bold text-white">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <p className="mt-4 font-display text-2xl font-semibold text-white">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-[#38BDF8]">Eigenaar</p>
                <div className="mt-4 flex flex-col gap-1">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="text-sm text-[#38BDF8] transition-colors hover:text-[#6AABEF]"
                    >
                      {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-[#38BDF8] transition-colors hover:text-[#6AABEF]"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DarkSection>

      {/* Sectie 5 — Waar we voor staan */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Waar we voor staan
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {waarden.map((w) => (
              <div
                key={w.title}
                className="rounded-xl border border-[#DBEAFE] bg-white p-8"
              >
                <h3 className="font-display text-lg font-semibold text-navy">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#374151]">
                  {w.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 6 — Voor wie */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Voor wie we werken
          </h2>
          <p className="mt-4 text-center text-lg text-white/60">
            We werken met organisaties die:
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {voorWiePunten.map((punt) => (
              <div key={punt} className="flex items-center gap-4">
                <CheckIcon />
                <p className="text-lg text-white">{punt}</p>
              </div>
            ))}
          </div>
        </div>
      </DarkSection>

      {/* Sectie 7 — Minder gedoe */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-32 text-center sm:py-40">
          <p className="font-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Minder gedoe.
          </p>
          <p className="mt-4 font-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Meer resultaat.
          </p>
        </div>
      </DarkSection>

      {/* Sectie 8 — CTA */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Benieuwd wat we voor jouw organisatie kunnen betekenen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            We laten je graag zien hoe we jouw processen kunnen verbeteren en
            versnellen met slimme AI-oplossingen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy"
            >
              Plan een kennismaking
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-[#DBEAFE] px-6 py-3 text-sm font-medium text-steel transition-colors hover:bg-white"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
