import { ImageResponse } from "next/og";

export const alt = "Lean AI Studio: meer aanvragen, minder handwerk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f5f0",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0f172a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 6,
              padding: "0 14px",
            }}
          >
            <div style={{ height: 5, width: 28, borderRadius: 3, background: "#38bdf8" }} />
            <div style={{ height: 5, width: 16, borderRadius: 3, background: "#38bdf8" }} />
            <div style={{ height: 5, width: 28, borderRadius: 3, background: "#38bdf8" }} />
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#0f172a" }}>Lean AI Studio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, color: "#0f172a", lineHeight: 1.05 }}>
            Meer aanvragen.
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, color: "#2563eb", lineHeight: 1.05 }}>
            Minder handwerk.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#55606e" }}>
            Websites en automatisering voor het MKB
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
