import type { Metadata } from "next";
import DarkSection from "@/components/DarkSection";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Contact — Lean AI Studio",
  description:
    "Neem contact op met Lean AI Studio. Plan een kennismaking of stuur ons direct een bericht.",
};

/* ── Icons ── */

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M5 13L9 17L19 7" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    email: "frank@leanaistudio.nl",
    photo_url: null,
  },
  {
    id: "kevin",
    name: "Kevin van Oosteren",
    phone: "+31 6 29566643",
    email: "kevin@leanaistudio.nl",
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

const kennismakingPunten = [
  "Waar je tijd of kansen verliest",
  "Wat er te automatiseren valt",
  "Hoe we dit snel kunnen realiseren",
];

/* ── Page ── */

export default async function ContactPage() {
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
            Klaar om slimmer te werken met AI?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            We denken graag met je mee over hoe je processen kunt verbeteren,
            automatiseren en versnellen.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#374151]">
            Of je nu een idee hebt voor een nieuwe website, een applicatie wilt
            laten bouwen of benieuwd bent wat AI voor jouw organisatie kan
            betekenen &mdash; we helpen je graag verder. Geen lange trajecten of
            ingewikkelde intake. Gewoon een helder gesprek over wat er mogelijk
            is.
          </p>
        </div>
      </section>

      {/* Sectie 2 — Plan een kennismaking */}
      <DarkSection>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Plan een kennismaking
          </h2>
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-[#2563EB] bg-[#1A2E45] p-8 sm:p-10">
            <p className="text-lg font-medium text-white">
              In een kort gesprek kijken we samen naar:
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {kennismakingPunten.map((punt) => (
                <div key={punt} className="flex items-center gap-4">
                  <CheckIcon />
                  <p className="text-white">{punt}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <span className="rounded-full bg-[#0B3060] px-4 py-1.5 text-sm font-medium text-[#38BDF8]">
                Vrijblijvend en direct praktisch
              </span>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:frank@leanaistudio.nl"
              className="rounded-md bg-[#38BDF8] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#3A7BC8]"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </DarkSection>

      {/* Sectie 3 — Liever direct contact? */}
      <section style={{ backgroundColor: "#F0F7FF" }}>
        <div className="mx-auto max-w-4xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Liever direct contact opnemen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            Stuur ons een bericht of mail, dan nemen we snel contact met je op.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {displayTeam.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center rounded-xl border border-[#DBEAFE] bg-white p-8 shadow-sm"
              >
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
                <p className="mt-4 font-display text-2xl font-semibold text-[#0F172A]">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-[#2563EB]">Eigenaar</p>
                <div className="mt-4 flex flex-col gap-1">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="text-sm text-[#38BDF8] transition-colors hover:text-[#3A7BC8]"
                    >
                      {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-[#38BDF8] transition-colors hover:text-[#3A7BC8]"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie 4 — Afsluiting */}
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
    </main>
  );
}
