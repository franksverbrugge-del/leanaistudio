import type { ContentBlock } from "@/content/types";

/** Rendert platte contentblokken uit de kennisbank en de juridische teksten. */
export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-las space-y-5">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "h2":
            return <h2 key={key}>{block.text}</h2>;
          case "h3":
            return <h3 key={key}>{block.text}</h3>;
          case "p":
            return <p key={key}>{block.text}</p>;
          case "ul":
            return (
              <ul key={key} className="list-disc space-y-2 pl-5 marker:text-accent">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key} className="list-decimal space-y-2 pl-5 marker:text-accent">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={key} className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full min-w-[480px] border-collapse bg-surface text-left text-sm">
                  <thead className="bg-paper">
                    <tr>
                      {block.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-semibold text-ink">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={`${key}-r${r}`} className="border-t border-line">
                        {row.map((cell, c) => (
                          <td key={`${key}-r${r}c${c}`} className="px-4 py-3 align-top text-ink-soft">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside
                key={key}
                className="rounded-xl border border-accent/25 bg-accent-soft/60 p-5"
              >
                <p className="font-semibold text-ink">{block.title}</p>
                <p className="mt-1.5">{block.text}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
