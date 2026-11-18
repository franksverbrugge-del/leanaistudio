"use client";

import { useState } from "react";
import Link from "next/link";

/*
  Automatiseringsscan: vijf vragen, direct een top 3 met kansrijke automatiseringen.
  Geen beloofde besparingen: alleen de uren die de bezoeker zelf opgeeft, omgerekend naar een jaar.
*/

interface Task {
  id: string;
  label: string;
  href: string;
  title: string;
  why: string;
}

const TASKS: Task[] = [
  {
    id: "offertes",
    label: "Offertes maken",
    href: "/ai-automatisering/offerteproces-automatiseren",
    title: "Offerteproces automatiseren",
    why: "Offertes uit vaste producten en prijzen, die jij alleen nog controleert. Vaak de snelste winst.",
  },
  {
    id: "facturen",
    label: "Facturen opstellen",
    href: "/ai-automatisering/facturatie-automatiseren",
    title: "Facturatie automatiseren",
    why: "Facturen die klaarstaan op basis van uren, orders of afspraken.",
  },
  {
    id: "opvolging",
    label: "Leads en klanten opvolgen",
    href: "/ai-automatisering/e-mail-en-opvolging-automatiseren",
    title: "E-mail en opvolging automatiseren",
    why: "Elke aanvraag krijgt direct een reactie en wordt op tijd opgevolgd.",
  },
  {
    id: "overtypen",
    label: "Gegevens overtypen tussen systemen",
    href: "/ai-automatisering/documenten-en-administratie",
    title: "Systemen koppelen",
    why: "Koppelingen zodat gegevens maar één keer worden ingevoerd.",
  },
  {
    id: "documenten",
    label: "Documenten en formulieren verwerken",
    href: "/ai-automatisering/documenten-en-administratie",
    title: "Documenten laten uitlezen met AI",
    why: "AI leest PDF's, formulieren en mails uit en zet de gegevens klaar.",
  },
  {
    id: "vragen",
    label: "Steeds dezelfde vragen beantwoorden",
    href: "/ai-automatisering/ai-assistent",
    title: "AI-assistent op je eigen kennis",
    why: "Antwoorden uit je eigen documenten, voor je team of je klanten.",
  },
  {
    id: "rapportages",
    label: "Rapportages en overzichten maken",
    href: "/ai-automatisering",
    title: "Rapportages automatiseren",
    why: "Overzichten die zichzelf bijwerken in plaats van elke week knippen en plakken.",
  },
];

const SIZES = ["1 tot 4", "5 tot 9", "10 tot 49", "50 of meer"];
const HOURS = [
  { label: "Minder dan 5 uur", mid: 3 },
  { label: "5 tot 10 uur", mid: 7.5 },
  { label: "10 tot 20 uur", mid: 15 },
  { label: "Meer dan 20 uur", mid: 25 },
];
const SYSTEMS = [
  "Boekhoudpakket",
  "CRM",
  "Excel of Google Sheets",
  "Outlook of Gmail",
  "Eigen software",
  "Weet ik niet",
];
const WEBSITE = [
  "Levert regelmatig aanvragen op",
  "Bestaat, maar levert weinig op",
  "Is verouderd",
  "We hebben geen website",
];

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
        selected
          ? "border-accent bg-accent-soft text-ink"
          : "border-line-strong bg-surface text-ink-soft hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}

export default function Scan() {
  const [step, setStep] = useState(0);
  const [size, setSize] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [hours, setHours] = useState(-1);
  const [systems, setSystems] = useState<string[]>([]);
  const [website, setWebsite] = useState("");
  const [sent, setSent] = useState<"idle" | "sending" | "done" | "error">("idle");

  const toggle = (list: string[], set: (v: string[]) => void, id: string) =>
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  const questions = [
    {
      title: "Met hoeveel mensen werk je?",
      done: size !== "",
      body: (
        <div className="grid gap-3 sm:grid-cols-2">
          {SIZES.map((s) => (
            <Chip key={s} selected={size === s} onClick={() => setSize(s)}>
              {s} mensen
            </Chip>
          ))}
        </div>
      ),
    },
    {
      title: "Welke taken kosten jullie de meeste tijd?",
      hint: "Kies er maximaal drie, de belangrijkste eerst.",
      done: tasks.length > 0,
      body: (
        <div className="grid gap-3 sm:grid-cols-2">
          {TASKS.map((t) => (
            <Chip
              key={t.id}
              selected={tasks.includes(t.id)}
              onClick={() => {
                if (!tasks.includes(t.id) && tasks.length >= 3) return;
                toggle(tasks, setTasks, t.id);
              }}
            >
              {t.label}
            </Chip>
          ))}
        </div>
      ),
    },
    {
      title: "Hoeveel uur per week gaat daar ongeveer naartoe, met z'n allen?",
      done: hours >= 0,
      body: (
        <div className="grid gap-3 sm:grid-cols-2">
          {HOURS.map((h, i) => (
            <Chip key={h.label} selected={hours === i} onClick={() => setHours(i)}>
              {h.label}
            </Chip>
          ))}
        </div>
      ),
    },
    {
      title: "Welke systemen gebruik je?",
      hint: "Meerdere antwoorden mogelijk.",
      done: systems.length > 0,
      body: (
        <div className="grid gap-3 sm:grid-cols-2">
          {SYSTEMS.map((s) => (
            <Chip key={s} selected={systems.includes(s)} onClick={() => toggle(systems, setSystems, s)}>
              {s}
            </Chip>
          ))}
        </div>
      ),
    },
    {
      title: "En je website?",
      done: website !== "",
      body: (
        <div className="grid gap-3 sm:grid-cols-2">
          {WEBSITE.map((w) => (
            <Chip key={w} selected={website === w} onClick={() => setWebsite(w)}>
              {w}
            </Chip>
          ))}
        </div>
      ),
    },
  ];

  const total = questions.length;
  const finished = step >= total;
  const current = questions[Math.min(step, total - 1)];
  const chosen = tasks
    .map((id) => TASKS.find((t) => t.id === id))
    .filter((t): t is Task => Boolean(t));
  const yearHours = hours >= 0 ? Math.round(HOURS[hours].mid * 46) : 0;
  const websiteNeedsWork = website !== "" && website !== WEBSITE[0];

  const summary = [
    `Bedrijfsgrootte: ${size}`,
    `Tijdvreters: ${chosen.map((t) => t.label).join(", ")}`,
    `Uren per week: ${hours >= 0 ? HOURS[hours].label : ""}`,
    `Systemen: ${systems.join(", ")}`,
    `Website: ${website}`,
  ].join("\n");

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "scan",
          naam: String(form.get("naam") ?? ""),
          email: String(form.get("email") ?? ""),
          telefoon: String(form.get("telefoon") ?? ""),
          bedrijfsnaam_extra: String(form.get("bedrijfsnaam_extra") ?? ""),
          scan: summary,
        }),
      });
      setSent(res.ok ? "done" : "error");
    } catch {
      setSent("error");
    }
  }

  if (finished) {
    return (
      <div className="space-y-8">
        <div>
          <p className="text-sm font-semibold text-accent">Jouw uitkomst</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
            Hier zit de meeste tijd te winnen
          </h2>
          {yearHours > 0 && (
            <p className="mt-4 leading-relaxed text-ink-soft">
              Volgens je eigen schatting gaat er ongeveer{" "}
              <strong className="text-ink">{yearHours.toLocaleString("nl-NL")} uur per jaar</strong>{" "}
              naar deze taken (uitgaande van 46 werkweken). Hoeveel daarvan te automatiseren is,
              hangt af van je processen. Dat zoeken we graag met je uit.
            </p>
          )}
        </div>
        <ol className="space-y-4">
          {chosen.map((t, i) => (
            <li key={t.id} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-accent">Kans {i + 1}</p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">{t.title}</p>
              <p className="mt-1 text-muted">{t.why}</p>
              <Link href={t.href} className="mt-3 inline-block text-sm font-semibold text-accent hover:text-accent-dark">
                Zo pakken we dit aan
              </Link>
            </li>
          ))}
          {websiteNeedsWork && (
            <li className="rounded-xl border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-accent">Ook de moeite waard</p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">Je website</p>
              <p className="mt-1 text-muted">
                Automatisering werkt het best als je website de aanvragen goed binnenhaalt.
              </p>
              <Link href="/websitecheck" className="mt-3 inline-block text-sm font-semibold text-accent hover:text-accent-dark">
                Vraag een gratis websitecheck aan
              </Link>
            </li>
          )}
        </ol>
        <p className="text-sm text-muted">
          Een eerste automatisering begint vanaf €1.500 excl. btw, met een vaste prijs vooraf.
        </p>

        <div className="rounded-2xl border border-accent/30 bg-accent-soft/50 p-6 sm:p-8">
          {sent === "done" ? (
            <p role="status" className="font-medium text-ink">
              Dank je. We nemen binnen één werkdag contact met je op om je uitkomst te bespreken.
            </p>
          ) : (
            <form onSubmit={send} className="space-y-4">
              <p className="font-display text-xl font-semibold text-ink">Bespreek je uitkomst, gratis</p>
              <p className="text-ink-soft">
                Laat je gegevens achter, dan bellen we je voor een gesprek van 30 minuten over wat
                er bij jou te automatiseren valt.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block text-sm font-medium text-ink">
                  Naam
                  <input name="naam" required autoComplete="name" className="mt-1.5 block w-full rounded-lg border border-line-strong bg-surface px-3.5 py-3 text-base" />
                </label>
                <label className="block text-sm font-medium text-ink">
                  E-mail
                  <input name="email" type="email" required autoComplete="email" className="mt-1.5 block w-full rounded-lg border border-line-strong bg-surface px-3.5 py-3 text-base" />
                </label>
                <label className="block text-sm font-medium text-ink">
                  Telefoon
                  <input name="telefoon" type="tel" autoComplete="tel" className="mt-1.5 block w-full rounded-lg border border-line-strong bg-surface px-3.5 py-3 text-base" />
                </label>
              </div>
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <input name="bedrijfsnaam_extra" tabIndex={-1} autoComplete="off" />
              </div>
              <p className="text-xs text-muted">
                Met je gegevens en je antwoorden nemen we alleen contact met je op over deze scan. Zie
                onze <Link href="/privacy" className="underline">privacyverklaring</Link>.
              </p>
              {sent === "error" && (
                <p role="alert" className="text-sm text-red-800">
                  Versturen lukte niet. Mail je vraag naar frank@leanaistudio.nl.
                </p>
              )}
              <button
                type="submit"
                disabled={sent === "sending"}
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark disabled:opacity-60"
              >
                {sent === "sending" ? "Bezig..." : "Bel me over mijn uitkomst"}
              </button>
            </form>
          )}
        </div>
        <button
          type="button"
          onClick={() => setStep(0)}
          className="text-sm text-muted underline underline-offset-4 hover:text-ink"
        >
          Opnieuw beginnen
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          Vraag {step + 1} van {total}
        </span>
        <span aria-hidden="true">{Math.round((step / total) * 100)}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${(step / total) * 100}%` }} />
      </div>
      <fieldset className="mt-8">
        <legend className="font-display text-2xl font-semibold text-ink">{current.title}</legend>
        {"hint" in current && current.hint && <p className="mt-2 text-muted">{current.hint}</p>}
        <div className="mt-6">{current.body}</div>
      </fieldset>
      <div className="mt-8 flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="rounded-lg border border-line-strong px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
          >
            Vorige
          </button>
        )}
        <button
          type="button"
          disabled={!current.done}
          onClick={() => setStep(step + 1)}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          {step === total - 1 ? "Bekijk mijn uitkomst" : "Volgende"}
        </button>
      </div>
    </div>
  );
}
