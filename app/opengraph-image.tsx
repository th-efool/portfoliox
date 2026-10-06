import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Agrim Singh | Systems Engineer · Multi-Agent & XR Architect";
export const size = {
  width: 1200,
  height: 630,
};
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
          backgroundColor: "#030014",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(6, 182, 212, 0.15) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
          padding: "54px 64px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle decorative grid borders */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 24,
            display: "flex",
            pointerEvents: "none",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "rgba(99, 102, 241, 0.12)",
              border: "1px solid rgba(99, 102, 241, 0.35)",
              borderRadius: 9999,
              padding: "8px 20px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#38bdf8",
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#93c5fd",
                textTransform: "uppercase",
              }}
            >
              IIT Roorkee · Systems Architect
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "#a1a1aa",
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ color: "#34d399" }}>●</span>
            <span>EVENT_HORIZON // 2026</span>
          </div>
        </div>

        {/* Main Hero Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 1,
            marginTop: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
            }}
          >
            <h1
              style={{
                fontSize: 68,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: 0,
                padding: 0,
                color: "#ffffff",
                lineHeight: 1.05,
              }}
            >
              Agrim Singh
            </h1>
          </div>

          <p
            style={{
              fontSize: 26,
              fontWeight: 500,
              color: "#cbd5e1",
              margin: 0,
              padding: 0,
              lineHeight: 1.35,
              maxWidth: 960,
            }}
          >
            Distributed Multi-Agent Systems · Low-Level XR & DirectX 11 · Quant Infra
          </p>

          {/* Technical Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: "#e2e8f0",
              }}
            >
              LangGraph State Machines
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: "#e2e8f0",
              }}
            >
              UE5 & DirectX 11 HLSL
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: "#e2e8f0",
              }}
            >
              Digital Twin Haptics
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: "#e2e8f0",
              }}
            >
              HPC / MPI / CUDA
            </div>
          </div>
        </div>

        {/* Accolades & Roles Matrix */}
        <div
          style={{
            display: "flex",
            gap: 16,
            zIndex: 1,
            marginTop: 4,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 14,
              padding: "14px 18px",
            }}
          >
            <span style={{ fontSize: 13, color: "#f59e0b", fontWeight: 700 }}>
              🥈 1st Runner-Up
            </span>
            <span style={{ fontSize: 15, color: "#f1f5f9", fontWeight: 600 }}>
              Pinch Hackathon 2026
            </span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>
              9-Agent Conference Engine
            </span>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 14,
              padding: "14px 18px",
            }}
          >
            <span style={{ fontSize: 13, color: "#f59e0b", fontWeight: 700 }}>
              🥈 1st Runner-Up
            </span>
            <span style={{ fontSize: 15, color: "#f1f5f9", fontWeight: 600 }}>
              PancakeSwap Hackathon
            </span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>
              Continuous Quant Trading Loop
            </span>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 14,
              padding: "14px 18px",
            }}
          >
            <span style={{ fontSize: 13, color: "#a78bfa", fontWeight: 700 }}>
              🥉 2nd Runner-Up
            </span>
            <span style={{ fontSize: 15, color: "#f1f5f9", fontWeight: 600 }}>
              GDAI Hackathon 2025
            </span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>
              UE5 Causality Engine Loop
            </span>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 14,
              padding: "14px 18px",
            }}
          >
            <span style={{ fontSize: 13, color: "#38bdf8", fontWeight: 700 }}>
              📐 IMO AIR 477 · NSO 375
            </span>
            <span style={{ fontSize: 15, color: "#f1f5f9", fontWeight: 600 }}>
              Tinkering & SEED Lab
            </span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>
              Project Lead & Researcher
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            zIndex: 1,
            paddingTop: 12,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 15,
              color: "#94a3b8",
            }}
          >
            <span>github.com/th-efool</span>
            <span>·</span>
            <span>linkedin.com/in/agrimsinghx</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 15,
              fontWeight: 600,
              color: "#38bdf8",
            }}
          >
            agrimsingh.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
