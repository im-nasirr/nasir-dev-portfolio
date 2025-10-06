import { ImageResponse } from "next/og";
import { siteConfig } from "./config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const alt = siteConfig.title;

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0b0b0f",
          color: "white",
          padding: "64px",
          fontSize: 48,
        }}
     >
        <div style={{ fontSize: 28, opacity: 0.7 }}>{siteConfig.alias}</div>
        <div style={{ fontWeight: 800, fontSize: 72, marginTop: 8 }}>
          {siteConfig.title}
        </div>
        <div style={{ fontSize: 32, marginTop: 16, opacity: 0.9 }}>
          {siteConfig.taglines?.[0]}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


