import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { voorwaarden } from "@/content/legal";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: voorwaarden.description,
  alternates: { canonical: "/voorwaarden" },
};

export default function VoorwaardenPage() {
  return <LegalPage doc={voorwaarden} path="/voorwaarden" />;
}
