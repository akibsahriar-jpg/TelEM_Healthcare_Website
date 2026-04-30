import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0E1411",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={leafSrc}
          alt=""
          width={92}
          height={92}
          style={{ marginBottom: 6 }}
        />
        <div
          style={{
            color: "#17A36B",
            fontSize: 38,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          TelEM
        </div>
      </div>
    ),
    { ...size }
  );
}
