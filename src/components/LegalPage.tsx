import ContentBlocks from "@/components/ContentBlocks";
import { Breadcrumbs } from "@/components/blocks";
import { Container } from "@/components/ui";
import type { LegalDoc } from "@/content/types";

export default function LegalPage({ doc, path }: { doc: LegalDoc; path: string }) {
  return (
    <main>
      <Breadcrumbs items={[{ href: path, label: doc.title }]} />
      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">{doc.title}</h1>
          <p className="mt-3 text-sm text-muted">Laatst bijgewerkt: {doc.updated}</p>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">{doc.intro}</p>
          <div className="mt-6">
            <ContentBlocks blocks={doc.blocks} />
          </div>
        </div>
      </Container>
    </main>
  );
}
