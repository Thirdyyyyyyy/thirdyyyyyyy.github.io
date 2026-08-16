import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Henry Bautista Hudieres III — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #f7f9fc 0%, #eef2f9 50%, #e0e7ff 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 500,
            height: 500,
            borderRadius: "9999px",
            background: "rgba(147,197,253,0.55)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 500,
            height: 500,
            borderRadius: "9999px",
            background: "rgba(196,181,253,0.5)",
            filter: "blur(80px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #60a5fa, #c4b5fd)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            H
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#334155",
              fontWeight: 600,
            }}
          >
            henry-hudieres.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              background: "white",
              border: "1px solid #e4e8f0",
              borderRadius: 9999,
              width: "fit-content",
              fontSize: 18,
              color: "#334155",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                background: "#10b981",
                borderRadius: 9999,
              }}
            />
            Available for new opportunities
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Henry Bautista
            <br />
            Hudieres III
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#475569",
              fontWeight: 500,
            }}
          >
            Full-stack Software Engineer · 6+ years shipping production systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#64748b",
          }}
        >
          <div>TypeScript · Next.js · NestJS · .NET · Docker</div>
          <div style={{ color: "#94a3b8" }}>hhudieres7@gmail.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
