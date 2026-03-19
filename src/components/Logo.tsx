interface LogoProps {
  variant?: "light" | "dark";
  showSubline?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 34, text: "text-lg", subline: "text-[9px]" },
  md: { icon: 43, text: "text-xl", subline: "text-xs" },
  lg: { icon: 58, text: "text-2xl", subline: "text-sm" },
};

function LogoIcon({
  size,
  color,
  accent,
}: {
  size: number;
  color: string;
  accent: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Input blocks */}
      <rect x="2" y="8" width="10" height="10" rx="2" fill={accent} />
      <rect x="2" y="20" width="10" height="10" rx="2" fill={accent} opacity="0.7" />
      <rect x="2" y="32" width="10" height="10" rx="2" fill={accent} opacity="0.4" />
      {/* Arrow */}
      <path
        d="M16 24H32M32 24L27 19M32 24L27 29"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Result block */}
      <rect x="36" y="14" width="10" height="20" rx="2" fill={accent} />
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
  const sublineColor = isDark ? "text-white/60" : "text-electric";
  const iconColor = isDark ? "#F0F5FA" : "#0B1829";
  const accentColor = isDark ? "#4A90D9" : "#1E5FA8";
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <LogoIcon size={s.icon} color={iconColor} accent={accentColor} />
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
