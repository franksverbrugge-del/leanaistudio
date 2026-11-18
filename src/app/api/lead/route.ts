import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/*
  Ontvangt aanvragen van het contactformulier, de websitecheck en de automatiseringsscan.
  1. Opslaan in Supabase (tabel leads, zie supabase/migrations/005_leads.sql).
  2. Mail naar LEAD_TO_EMAIL via Resend (RESEND_API_KEY).
  Lukt geen van beide, dan krijgt de bezoeker een foutmelding met het mailadres als alternatief.
*/

const TYPES = ["contact", "websitecheck", "scan"] as const;
type LeadType = (typeof TYPES)[number];

const FIELDS = [
  "naam",
  "bedrijf",
  "email",
  "telefoon",
  "website",
  "onderwerp",
  "bericht",
  "belmoment",
] as const;

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: ingevuld betekent bot. Doe alsof het gelukt is.
  if (clean(body.bedrijfsnaam_extra)) {
    return NextResponse.json({ ok: true });
  }

  const type: LeadType = TYPES.includes(body.type as LeadType)
    ? (body.type as LeadType)
    : "contact";

  const lead: Record<string, string> = {};
  for (const f of FIELDS) lead[f] = clean(body[f], f === "bericht" ? 4000 : 300);
  const scanAnswers = clean(body.scan, 4000);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  if (!emailOk || (type !== "scan" && !lead.naam)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  let stored = false;
  let mailed = false;

  // 1. Opslaan
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (url && key) {
    try {
      const supabase = createClient(url, key, { auth: { persistSession: false } });
      const { error } = await supabase.from("leads").insert({
        type,
        naam: lead.naam,
        bedrijf: lead.bedrijf,
        email: lead.email,
        telefoon: lead.telefoon,
        website: lead.website,
        onderwerp: lead.onderwerp,
        bericht: lead.bericht,
        belmoment: lead.belmoment,
        scan: scanAnswers,
      });
      stored = !error;
      if (error) console.error("Lead opslaan mislukt:", error.message);
    } catch (err) {
      console.error("Lead opslaan mislukt:", err);
    }
  }

  // 2. Mailen
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const to = process.env.LEAD_TO_EMAIL || "info@wijntripje.nl";
    const from = process.env.LEAD_FROM_EMAIL || "Lean AI Studio <onboarding@resend.dev>";
    const labels: Record<LeadType, string> = {
      contact: "Nieuwe aanvraag",
      websitecheck: "Websitecheck aangevraagd",
      scan: "Automatiseringsscan ingevuld",
    };
    const rows = [...FIELDS.map((f) => [f, lead[f]] as const), ["scan", scanAnswers] as const]
      .filter(([, v]) => v)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;color:#55606e;vertical-align:top">${k}</td><td style="padding:4px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
      )
      .join("");
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: lead.email,
          subject: `${labels[type]}: ${lead.naam || lead.email}${lead.bedrijf ? ` (${lead.bedrijf})` : ""}`,
          html: `<h2 style="font-family:sans-serif">${labels[type]}</h2><table style="font-family:sans-serif;font-size:14px">${rows}</table><p style="font-family:sans-serif;font-size:12px;color:#55606e">Opgeslagen in Supabase: ${stored ? "ja" : "nee"}</p>`,
        }),
      });
      mailed = res.ok;
      if (!res.ok) console.error("Resend fout:", res.status, await res.text());
    } catch (err) {
      console.error("Mail versturen mislukt:", err);
    }
  }

  if (!stored && !mailed) {
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
