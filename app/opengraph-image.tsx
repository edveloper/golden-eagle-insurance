import { ImageResponse } from "next/og"

export const alt = "Golden Eagle Insurance Agency, Westlands, Nairobi"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Link preview for WhatsApp, LinkedIn, X etc. Brand navy and gold, matching the site theme.
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
          padding: "72px 80px",
          background: "#0a1d37",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 3, background: "#c5a100" }} />
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#c5a100", textTransform: "uppercase" }}>
            Insurance · Global Markets Advisory
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>Golden Eagle</div>
          <div style={{ fontSize: 40, color: "rgba(255,255,255,0.85)" }}>
            Three-time AKI winner for Professional Indemnity
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "rgba(255,255,255,0.6)" }}>
          <div>Westlands, Nairobi · Since 2006</div>
          <div>Licensed by the IRA · Reg. No. 11611</div>
        </div>
      </div>
    ),
    size,
  )
}
