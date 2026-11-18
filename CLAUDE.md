@AGENTS.md

# Lean AI Studio

## Project
Zakelijke website voor Lean AI Studio (leanaistudio.nl), handelsnaam van KF Online Services.
Positionering: websites en automatiseringen voor MKB-bedrijven van 5 tot 50 mensen.
Belofte: "Meer aanvragen. Minder handwerk." Gebouwd met AI, gecontroleerd door Frank en Kevin.

## Tech Stack
- Next.js 16 (App Router), TypeScript, Tailwind CSS 4
- Supabase (CMS-beheer onder /admin, tabel `leads` voor aanvragen)
- Resend voor e-mailmeldingen (env `RESEND_API_KEY`, optioneel `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`)
- Hosting op Vercel; push naar `main` = live, andere branches = preview

## Sitestructuur
- `/` homepage
- Diensten: `/website-laten-maken`, `/website-vernieuwen`, `/webapplicatie-laten-maken`, `/ai-automatisering` (+ `/ai-automatisering/[slug]`), `/beheer-en-onderhoud`
- `/werkwijze`, `/prijzen`, `/cases` (+ `/cases/[slug]`), `/kennisbank` (+ `/kennisbank/[slug]`), `/over`
- Conversie: `/contact`, `/websitecheck`, `/automatiseringsscan` (formulieren posten naar `/api/lead`)
- `/privacy`, `/voorwaarden`

## Waar staat wat
- Vaste gegevens, prijzen en garanties: `src/content/site.ts` (één bron, overal gebruikt)
- Cases en voorbeelden: `src/content/projecten.ts`
- Automatiseringstoepassingen: `src/content/toepassingen.ts`
- Kennisbankartikelen: `src/content/kennisbank.ts`
- Juridische teksten: `src/content/legal.ts`
- Gedeelde bouwstenen: `src/components/ui.tsx`, `blocks.tsx`, `visuals.tsx`, `ServicePage.tsx`

## Conventies
- TypeScript, geen `any`; Tailwind voor styling; mobile-first
- Elke pagina heeft `metadata` met een `canonical`
- Teksten: Nederlands, je-vorm, nuchter, geen gedachtestreepjes (— of –)
- Geen verzonnen cijfers, klanten of resultaten; alleen echte projecten tonen
- Contrast minimaal WCAG AA; kleuren via de tokens in `globals.css`
