interface DarkSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "footer" | "div";
}

export default function DarkSection({
  children,
  className = "",
  as: Tag = "section",
}: DarkSectionProps) {
  return (
    <Tag
      className={`bg-navy ${className}`}
      style={{
        backgroundImage: [
          "linear-gradient(rgba(30, 95, 168, 0.15) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(30, 95, 168, 0.15) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "40px 40px",
      }}
    >
      {children}
    </Tag>
  );
}
