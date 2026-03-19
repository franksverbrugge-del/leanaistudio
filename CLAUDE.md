@AGENTS.md

# Lean AI Studio

## Project
Zakelijke website voor Lean AI Studio (leanaistudio.nl).
Een AI-agency die bedrijven helpt met het implementeren van AI-oplossingen.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Taal**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Hosting**: Vercel
- **Package manager**: npm

## Sitestructuur
- `/` — Homepage
- `/diensten` — Diensten
- `/over` — Over ons
- `/cases` — Cases / projecten
- `/contact` — Contact

## Conventies
- Gebruik altijd TypeScript, geen `any`
- Componenten in `src/components/`
- Pagina's via App Router in `src/app/`
- Tailwind voor alle styling, geen losse CSS tenzij noodzakelijk
- Mobile-first
- SEO: elke pagina heeft een `metadata` export

## Omgeving
- Development: `npm run dev`
- Build: `npm run build`
- Vercel deploy: automatisch via GitHub push naar `main`
