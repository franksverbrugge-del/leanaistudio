import Link from "next/link";
import Logo from "@/components/Logo";

const footerLinks = [
  { href: "/diensten", label: "Diensten" },
  { href: "/cases", label: "Cases" },
  { href: "/over", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy">
      {/* Accent streep */}
      <div className="h-1 bg-electric" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo variant="dark" showSubline />

          <ul className="flex flex-wrap gap-6 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lean AI Studio. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
