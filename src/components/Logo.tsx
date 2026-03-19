interface LogoProps {
  variant?: "light" | "dark";
  showSubline?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 48, text: "text-[20px]", subline: "text-[9px]" },
  md: { icon: 48, text: "text-xl", subline: "text-xs" },
  lg: { icon: 58, text: "text-2xl", subline: "text-sm" },
};

function LogoIcon({
  size,
  variant,
}: {
  size: number;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const stripeColor = isDark ? "#38BDF8" : "#2563EB";
  const blockFill = isDark ? "#FFFFFF" : "#0F172A";
  const innerStripe = isDark ? "#2563EB" : "#38BDF8";
  const curveColor = "#2563EB";

  // Scale factor relative to 80x50 viewBox
  const scale = size / 48;

  return (
    <svg
      width={80 * scale}
      height={50 * scale}
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 6 horizontal stripes */}
      <rect x="0" y="0" width="22" height="5" rx="2.5" fill={stripeColor} opacity="0.2" />
      <rect x="0" y="9" width="30" height="5" rx="2.5" fill={stripeColor} opacity="0.35" />
      <rect x="0" y="18" width="18" height="5" rx="2.5" fill={stripeColor} opacity="0.2" />
      <rect x="0" y="27" width="26" height="5" rx="2.5" fill={stripeColor} opacity="0.35" />
      <rect x="0" y="36" width="20" height="5" rx="2.5" fill={stripeColor} opacity="0.2" />
      <rect x="0" y="45" width="28" height="5" rx="2.5" fill={stripeColor} opacity="0.35" />

      {/* Compression curve */}
      <path
        d="M32 0 Q44 25 44 25 Q44 25 32 50"
        stroke={curveColor}
        strokeWidth="1.5"
        opacity="0.4"
        fill="none"
      />

      {/* Result block */}
      <rect x="48" y="8" width="32" height="34" rx="9" fill={blockFill} />

      {/* 3 inner stripes */}
      <rect x="56" y="14" width="16" height="3.5" rx="1.75" fill={innerStripe} />
      <rect x="56" y="23" width="10" height="3.5" rx="1.75" fill={innerStripe} opacity="0.5" />
      <rect x="56" y="32" width="16" height="3.5" rx="1.75" fill={innerStripe} />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  showSubline = false,
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-navy";
  const sublineColor = isDark ? "text-electric" : "text-steel";
  const s = sizes[size];

  return (
    <div className="flex items-center gap-3.5">
      <LogoIcon size={s.icon} variant={variant} />
      <div>
        <span
          className={`font-display font-bold tracking-tight ${s.text} ${textColor}`}
        >
          Lean AI Studio
        </span>
        {showSubline && (
          <p
            className={`${s.subline} tracking-[0.15em] uppercase ${sublineColor}`}
          >
            Minder gedoe. Meer resultaat.
          </p>
        )}
      </div>
    </div>
  );
}
