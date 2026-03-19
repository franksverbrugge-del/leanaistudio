import type { Metadata } from "next";
import Link from "next/link";
import DarkSection from "@/components/DarkSection";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Lean AI Studio — AI-oplossingen voor bedrijven",
  description:
    "Lean AI Studio helpt Nederlandse bedrijven met het implementeren van slimme AI-oplossingen. Van strategie tot implementatie.",
};

function WebsiteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M4 12H28" stroke="#1E5FA8" strokeWidth="2" />
      <circle cx="8" cy="9" r="1" fill="#1E5FA8" />
      <circle cx="12" cy="9" r="1" fill="#1E5FA8" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#1E5FA8" strokeWidth="2" />
      <circle cx="16" cy="16" r="4" fill="#1E5FA8" />
      <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="16" rx="2" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M12 14L15 17L20 12" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13L9 17L19 7" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="28" height="24" rx="3" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M6 18H34" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M14 6V12M26 6V12" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="23" width="4" height="4" rx="1" fill="#1E5FA8" />
      <rect x="18" y="23" width="4" height="4" rx="1" fill="#1E5FA8" />
      <rect x="24" y="23" width="4" height="4" rx="1" fill="#1E5FA8" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="10" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M25 25L34 34" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="6" stroke="#1E5FA8" strokeWidth="2" />
      <path d="M20 4V8M20 32V36M4 20H8M32 20H36M8.8 8.8L11.6 11.6M28.4 28.4L31.2 31.2M31.2 8.8L28.4 11.6M11.6 28.4L8.8 31.2" stroke="#1E5FA8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-[#1E5FA8]">
      <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface TeamMember {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  photo_url: string | null;
}

const fallbackTeam: TeamMember[] = [
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

const diensten = [
  {
    Icon: WebsiteIcon,
    title: "Websites & platforms",
    description:
      "We kijken waar je tijd verliest en bouwen oplossingen die dat automatiseren.",
  },
  {
    Icon: AIIcon,
    title: "AI-oplossingen",
    description:
      "We automatiseren processen en ontwikkelen slimme toepassingen die werk uit handen nemen.",
  },
  {
    Icon: SystemIcon,
    title: "Bedrijfssystemen",
    description:
      "Van interne tools tot complete workflows: wij bouwen systemen die jouw organisatie efficiënter maken.",
  },
];

const stats = [
  { value: "20+", label: "Projecten" },
  { value: "3 weken", label: "Gemiddelde implementatie" },
  { value: "100%", label: "Nederlandse bedrijven" },
];

const reasons = [
  "Tot 5\u201310x sneller live",
  "Gebouwd met ons eigen AI-systeem",
  "Makkelijk door te ontwikkelen",
  "Effici\u00ebnter dan traditionele development",
];

const samenwerkingBlokken = [
  {
    Icon: CalendarIcon,
    title: "Plan een kennismaking",
    href: "/contact",
  },
  {
    Icon: SearchIcon,
    title: "Ontdek wat er mogelijk is",
    href: "/cases",
  },
  {
    Icon: GearIcon,
    title: "Laat je processen analyseren",
    href: "/contact",
  },
];

export default async function HomePage() {
  let team: TeamMember[] = fallbackTeam;

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
    // Supabase not available, use fallback
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-softwhite">
        <div className="mx-auto max-w-6xl px-6 py-36 text-center sm:py-44">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-navy sm:text-6xl lg:text-7xl">
            Sneller bouwen met AI.
            <br />
            Minder gedoe, meer resultaat.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Wij ontwerpen en bouwen websites, applicaties en bedrijfssystemen met
            ons eigen AI-systeem. Sneller, effici&euml;nter en direct klaar voor
            groei.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/cases"
              className="rounded-md bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-steel"
            >
              Bekijk onze cases
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-steel transition-colors hover:bg-softwhite"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <DarkSection>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* Diensten preview */}
      <section className="bg-softwhite">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center font-display text-sm font-semibold uppercase tracking-widest text-steel">
            Wat we doen
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {diensten.map((dienst) => (
              <div
                key={dienst.title}
                className="rounded-xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <dienst.Icon />
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {dienst.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#374151]">
                  {dienst.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom bedrijven met ons werken */}
      <DarkSection>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Waarom bedrijven met ons werken
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-4">
                <CheckIcon />
                <p className="text-lg text-white">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </DarkSection>

      {/* Hoe we samenwerken */}
      <section style={{ backgroundColor: "#F0F5FA" }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center font-display text-sm font-semibold uppercase tracking-widest text-steel">
            Hoe we samenwerken
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {samenwerkingBlokken.map((blok) => (
              <Link
                key={blok.title}
                href={blok.href}
                className="group relative flex cursor-pointer flex-col items-center rounded-xl border border-[#D6E4F0] bg-white p-8 text-center transition-shadow hover:shadow-md"
              >
                <blok.Icon />
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {blok.title}
                </h3>
                <span className="absolute right-4 bottom-4">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <DarkSection>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
            Benieuwd wat wij voor jou kunnen doen?
          </h2>
          <p className="mt-4 text-center text-lg text-white/60">
            Neem direct contact op met Frank of Kevin.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:gap-12">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                {member.photo_url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={member.photo_url}
                    alt={member.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1E5FA8]">
                    <span className="font-display text-xl font-bold text-white">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <p className="mt-4 font-display text-xl font-semibold text-white">
                  {member.name}
                </p>
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="mt-2 text-sm text-[#4A90D9] transition-colors hover:text-[#6AABEF]"
                  >
                    {member.phone}
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-1 text-sm text-[#4A90D9] transition-colors hover:text-[#6AABEF]"
                  >
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </DarkSection>
    </main>
  );
}
