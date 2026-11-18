"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/content/site";

type Variant = "contact" | "websitecheck";
type Status = "idle" | "sending" | "done" | "error";

const inputClass =
  "mt-1.5 block w-full rounded-lg border border-line-strong bg-surface px-3.5 py-3 text-base text-ink placeholder:text-muted/80 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function LeadForm({ variant = "contact" }: { variant?: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const isCheck = variant === "websitecheck";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload: Record<string, string> = { type: variant };
    form.forEach((value, key) => {
      if (typeof value === "string") payload[key] = value.trim();
    });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-accent/30 bg-accent-soft/60 p-8">
        <p className="font-display text-2xl font-semibold text-ink">Dank je, we hebben het ontvangen.</p>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {isCheck
            ? "Binnen twee werkdagen krijg je van ons een persoonlijke video met de drie grootste verbeterpunten voor je website."
            : "We nemen binnen één werkdag contact met je op, op het moment dat jij hebt aangegeven."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Naam <span className="text-accent">*</span>
          <input name="naam" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Bedrijf
          <input name="bedrijf" autoComplete="organization" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-ink">
          E-mail <span className="text-accent">*</span>
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Telefoon
          <input name="telefoon" type="tel" autoComplete="tel" className={inputClass} />
        </label>
      </div>

      {isCheck ? (
        <label className="block text-sm font-medium text-ink">
          Adres van je website <span className="text-accent">*</span>
          <input
            name="website"
            type="url"
            required
            placeholder="https://www.jouwbedrijf.nl"
            className={inputClass}
          />
        </label>
      ) : (
        <label className="block text-sm font-medium text-ink">
          Waar gaat het over?
          <select name="onderwerp" className={inputClass} defaultValue="Weet ik nog niet">
            <option>Een nieuwe website</option>
            <option>Mijn website vernieuwen</option>
            <option>Een webapplicatie of maatwerk</option>
            <option>Automatiseren met AI</option>
            <option>Beheer of onderhoud</option>
            <option>Weet ik nog niet</option>
          </select>
        </label>
      )}

      <label className="block text-sm font-medium text-ink">
        {isCheck ? "Wat wil je dat je website oplevert?" : "Vertel kort waar je mee zit"}
        <textarea
          name="bericht"
          rows={4}
          className={inputClass}
          placeholder={
            isCheck
              ? "Bijvoorbeeld: meer offerteaanvragen, beter gevonden worden in de regio"
              : "Bijvoorbeeld: onze site is verouderd, of we zijn veel tijd kwijt aan offertes"
          }
        />
      </label>

      {!isCheck && (
        <fieldset>
          <legend className="text-sm font-medium text-ink">Wanneer mogen we je bellen?</legend>
          <div className="mt-2 flex flex-wrap gap-3">
            {["Ochtend", "Middag", "Maakt niet uit", "Liever per mail"].map((opt, i) => (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-line-strong bg-surface px-3.5 py-2.5 text-sm text-ink has-[:checked]:border-accent has-[:checked]:bg-accent-soft"
              >
                <input type="radio" name="belmoment" value={opt} defaultChecked={i === 2} className="accent-accent" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Honeypot tegen spam: mensen zien dit veld niet */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Laat dit leeg
          <input name="bedrijfsnaam_extra" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        We gebruiken je gegevens alleen om contact met je op te nemen over je vraag. Lees
        onze{" "}
        <Link href="/privacy" className="text-ink underline underline-offset-4">
          privacyverklaring
        </Link>
        .
      </p>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Er ging iets mis bij het versturen. Probeer het nog eens, of mail direct naar{" "}
          <a href={`mailto:${company.email}`} className="font-semibold underline">
            {company.email}
          </a>{" "}
          of bel {company.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "sending"
          ? "Bezig met versturen..."
          : isCheck
            ? "Vraag de gratis websitecheck aan"
            : "Verstuur, we bellen je terug"}
      </button>
    </form>
  );
}
