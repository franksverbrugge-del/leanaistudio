"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const diensten = [
  { href: "/website-laten-maken", label: "Website laten maken" },
  { href: "/website-vernieuwen", label: "Website vernieuwen" },
  { href: "/webapplicatie-laten-maken", label: "Webapplicatie en maatwerk" },
  { href: "/ai-automatisering", label: "AI-automatisering" },
  { href: "/beheer-en-onderhoud", label: "Beheer en onderhoud" },
];

const links = [
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/cases", label: "Werk" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/kennisbank", label: "Kennisbank" },
  { href: "/over", label: "Over ons" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const pathname = usePathname();

  // Menu sluiten bij navigeren
  useEffect(() => {
    setOpen(false);
    setDienstenOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/admin")) return null;

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <nav
        aria-label="Hoofdmenu"
        className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" aria-label="Lean AI Studio, naar de homepage">
          <Logo variant="light" size="sm" />
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <li
            className="relative"
            onMouseEnter={() => setDienstenOpen(true)}
            onMouseLeave={() => setDienstenOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-ink-soft transition-colors hover:text-ink"
              aria-expanded={dienstenOpen}
              aria-controls="menu-diensten"
              onClick={() => setDienstenOpen((v) => !v)}
            >
              Diensten
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="m3 4.5 3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {dienstenOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <ul
                  id="menu-diensten"
                  className="w-64 rounded-xl border border-line bg-surface p-2 shadow-lg shadow-ink/5"
                >
                  {diensten.map((d) => (
                    <li key={d.href}>
                      <Link
                        href={d.href}
                        className="block rounded-lg px-3 py-2.5 text-ink-soft transition-colors hover:bg-paper hover:text-ink"
                      >
                        {d.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`transition-colors hover:text-ink ${
                  isActive(link.href) ? "text-ink" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Plan een gesprek
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          aria-controls="mobiel-menu"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div
          id="mobiel-menu"
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-paper px-5 pb-8 pt-4 lg:hidden"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Diensten
          </p>
          <ul className="mt-2 space-y-1">
            {diensten.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="block rounded-lg py-2.5 text-base font-medium text-ink"
                >
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 border-t border-line pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg py-2.5 text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 block rounded-lg bg-accent px-4 py-3.5 text-center font-semibold text-white"
          >
            Plan een gesprek
          </Link>
        </div>
      )}
    </header>
  );
}
