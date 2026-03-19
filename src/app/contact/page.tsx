import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lean AI Studio",
  description: "Neem contact op met Lean AI Studio.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
    </main>
  );
}
