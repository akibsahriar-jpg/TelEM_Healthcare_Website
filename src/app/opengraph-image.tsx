import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "TelEM Healthcare — Proactive, integrated care for effective care transitions";

export default function OpenGraphImage() {
  const leafBuffer = readFileSync(join(process.cwd(), "src", "app", "icon.png"));
  const leafSrc = `data:image/png;base64,${leafBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0E1411",
        }}
      >
        {/* Top: brand lockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={leafSrc} alt="" width={104} height={104} />
          <div
            style={{
              color: "#17A36B",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            TelEM Healthcare
          </div>
        </div>

        {/* Bottom: tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          <div style={{ color: "#FFFFFF" }}>Proactive, integrated care</div>
          <div style={{ color: "#17A36B" }}>
            for effective care transitions.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
