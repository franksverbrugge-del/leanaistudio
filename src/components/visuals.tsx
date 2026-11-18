import Image from "next/image";

/* Visuele bouwstenen: echt werk in een browserkader en stroomschema's van automatiseringen. */

export function BrowserFrame({
  url,
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-line-strong bg-surface shadow-xl shadow-ink/10 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 truncate rounded-md bg-surface px-3 py-1 text-xs text-muted">
          {url}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}

export interface FlowStep {
  label: string;
  detail?: string;
}

/** Stroomschema: een rij stappen met pijlen. Staat verticaal op mobiel. */
export function Flow({
  title,
  steps,
  tone = "after",
}: {
  title: string;
  steps: FlowStep[];
  tone?: "before" | "after";
}) {
  const isAfter = tone === "after";
  return (
    <div
      className={`rounded-xl border p-5 ${
        isAfter
          ? "border-accent/30 bg-accent-soft/60"
          : "border-line bg-surface"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.14em] ${
          isAfter ? "text-accent-dark" : "text-muted"
        }`}
      >
        {title}
      </p>
      <ol className="mt-4 flex flex-col gap-2 md:flex-row md:items-stretch">
        {steps.map((step, i) => (
          <li key={step.label} className="flex flex-col md:flex-1 md:flex-row md:items-center">
            <div
              className={`flex-1 rounded-lg border px-3.5 py-3 ${
                isAfter ? "border-accent/25 bg-surface" : "border-line bg-paper"
              }`}
            >
              <p className="text-sm font-semibold text-ink">{step.label}</p>
              {step.detail && (
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {step.detail}
                </p>
              )}
            </div>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className={`flex items-center justify-center py-1 md:px-1.5 md:py-0 ${
                  isAfter ? "text-accent" : "text-line-strong"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" className="rotate-90 md:rotate-0">
                  <path
                    d="M3 8h10m0 0L9 4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Voor en na naast elkaar. */
export function BeforeAfter({
  before,
  after,
}: {
  before: FlowStep[];
  after: FlowStep[];
}) {
  return (
    <div className="space-y-4">
      <Flow title="Zo gaat het nu" steps={before} tone="before" />
      <Flow title="Zo gaat het straks" steps={after} tone="after" />
    </div>
  );
}

export function StatCard({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-line bg-surface px-5 py-4 shadow-lg shadow-ink/10 ${className}`}
    >
      <p className="font-display text-2xl font-semibold text-ink">{value}</p>
      <p className="mt-0.5 text-sm text-muted">{label}</p>
    </div>
  );
}
