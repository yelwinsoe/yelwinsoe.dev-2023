import { ImageResponse } from "next/og";

export const alt =
  "Ye Lwin Soe — Senior Full-Stack Software Engineer in Auckland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const outcomes = [
  { value: "11+", label: "years experience" },
  { value: "10+", label: "apps unified" },
  { value: "<20 min", label: "build time" },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#f1f5f9",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 86% 12%, rgba(59,130,246,0.24), transparent 32%), radial-gradient(circle at 5% 100%, rgba(6,182,212,0.16), transparent 34%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          <div
            style={{
              color: "#6ee7b7",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            Auckland, New Zealand
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 56 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 720,
            }}
          >
            <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-0.04em" }}>
              Ye Lwin Soe
            </div>
            <div
              style={{
                marginTop: 12,
                color: "#60a5fa",
                fontSize: 35,
                fontWeight: 700,
              }}
            >
              Senior Full-Stack Software Engineer
            </div>
            <div
              style={{
                marginTop: 22,
                color: "#94a3b8",
                fontSize: 25,
                lineHeight: 1.45,
              }}
            >
              React · TypeScript · Python · Cloud · Technical leadership
            </div>
          </div>

          <div
            style={{
              width: 292,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {outcomes.map((outcome) => (
              <div
                key={outcome.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  padding: "20px 22px",
                  border: "1px solid #1e293b",
                  borderRadius: 16,
                  background: "rgba(17,17,25,0.86)",
                }}
              >
                <div style={{ fontSize: 29, fontWeight: 800 }}>{outcome.value}</div>
                <div
                  style={{
                    width: 128,
                    color: "#94a3b8",
                    fontSize: 17,
                    lineHeight: 1.2,
                    textAlign: "right",
                  }}
                >
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#64748b",
            fontSize: 19,
          }}
        >
          <div>Investment · Recruitment · Media · E-commerce</div>
          <div style={{ color: "#cbd5e1", fontWeight: 700 }}>yelwinsoe.dev</div>
        </div>
      </div>
    ),
    size
  );
}
