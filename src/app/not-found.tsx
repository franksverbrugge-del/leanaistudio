import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <main>
      <Container className="py-24 sm:py-32">
        <p className="font-display text-sm font-semibold text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Deze pagina bestaat niet (meer)
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Misschien is de pagina verhuisd. Hier vind je de meest bezochte pagina&apos;s.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-medium">
          <li><Link href="/website-laten-maken" className="text-accent hover:text-accent-dark">Website laten maken</Link></li>
          <li><Link href="/ai-automatisering" className="text-accent hover:text-accent-dark">AI-automatisering</Link></li>
          <li><Link href="/cases" className="text-accent hover:text-accent-dark">Ons werk</Link></li>
          <li><Link href="/prijzen" className="text-accent hover:text-accent-dark">Prijzen</Link></li>
        </ul>
        <div className="mt-10">
          <ButtonLink href="/">Naar de homepage</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
