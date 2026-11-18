"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/content/site";

/** Vaste balk onderin op mobiel: bellen of een gesprek plannen. */
export default function MobileBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <div className="flex gap-3">
        <a
          href={company.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line-strong bg-surface py-3 text-sm font-semibold text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M5.2 1.8 6.6 5 5 6.2a8.5 8.5 0 0 0 4.8 4.8L11 9.4l3.2 1.4-.6 2.8c-.1.5-.6.9-1.1.9A11.6 11.6 0 0 1 1.5 3.5c0-.5.4-1 .9-1.1l2.8-.6Z"
              fill="currentColor"
            />
          </svg>
          Bel ons
        </a>
        <Link
          href="/contact"
          className="flex flex-[1.4] items-center justify-center rounded-lg bg-accent py-3 text-sm font-semibold text-white"
        >
          Plan een gesprek
        </Link>
      </div>
    </div>
  );
}
