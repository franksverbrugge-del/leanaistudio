import Link from "next/link";
import Logo from "@/components/Logo";
import { company } from "@/content/site";

const columns = [
  {
    title: "Diensten",
    links: [
      { href: "/website-laten-maken", label: "Website laten maken" },
      { href: "/website-vernieuwen", label: "Website vernieuwen" },
      { href: "/webapplicatie-laten-maken", label: "Webapplicatie en maatwerk" },
      { href: "/ai-automatisering", label: "AI-automatisering" },
      { href: "/beheer-en-onderhoud", label: "Beheer en onderhoud" },
    ],
  },
  {
    title: "Lean AI Studio",
    links: [
      { href: "/werkwijze", label: "Werkwijze" },
      { href: "/cases", label: "Ons werk" },
      { href: "/prijzen", label: "Prijzen" },
      { href: "/kennisbank", label: "Kennisbank" },
      { href: "/over", label: "Over ons" },
    ],
  },
  {
    title: "Aan de slag",
    links: [
      { href: "/contact", label: "Plan een gesprek" },
      { href: "/websitecheck", label: "Gratis websitecheck" },
      { href: "/automatiseringsscan", label: "Automatiseringsscan" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-night pb-24 text-white lg:pb-0">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Logo variant="dark" size="sm" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Websites en automatiseringen voor MKB-bedrijven. Gebouwd met AI,
              gecontroleerd door ons.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <a
                href={company.phoneHref}
                className="block text-white/90 hover:text-white"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block text-white/90 hover:text-white"
              >
                {company.email}
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs leading-relaxed text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            {company.name} is een handelsnaam van {company.legalName},{" "}
            {company.street}, {company.postalCity}. KvK {company.kvk}. Btw{" "}
            {company.vat}.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/voorwaarden" className="hover:text-white">
                Voorwaarden
              </Link>
            </li>
            <li>
              <a
                href={company.linkedin}
                className="hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
