import {
  PagemarkdBrandCorner,
  TemplateBackground,
  TemplateProps,
  useTemplateStats,
} from "./shared";

export function ModernMinimal({ data }: TemplateProps) {
  const { progress, sessionPages, timeFormatted, dateFormatted, handle } =
    useTemplateStats(data);

  return (
    <TemplateBackground
      imageDataUrl={data.imageDataUrl}
      overlay="rgba(255, 255, 255, 0.85)"
    >
      <div
        className="h-full flex"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div
          style={{
            width: 8,
            background: "#3b82f6",
            flexShrink: 0,
          }}
        />
        <div className="relative flex-1 flex flex-col px-20 py-24">
          <PagemarkdBrandCorner color="#2c2c2c" />
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#3b82f6",
              textTransform: "uppercase",
            }}
          >
            Reading Session
          </p>

          <h1
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#2c2c2c",
              marginTop: 48,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {data.bookTitle}
          </h1>
          <p
            style={{
              fontSize: 36,
              color: "#6b7280",
              marginTop: 16,
              fontWeight: 400,
            }}
          >
            {data.author}
          </p>

          <div className="flex gap-16 mt-20">
            <div>
              <p
                style={{
                  fontSize: 80,
                  fontWeight: 900,
                  color: "#1f2937",
                  lineHeight: 1,
                }}
              >
                {sessionPages}
              </p>
              <p
                style={{
                  fontSize: 22,
                  color: "#9ca3af",
                  letterSpacing: "0.1em",
                  marginTop: 8,
                  textTransform: "uppercase",
                }}
              >
                Pages Today
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 80,
                  fontWeight: 900,
                  color: "#1f2937",
                  lineHeight: 1,
                }}
              >
                {timeFormatted}
              </p>
              <p
                style={{
                  fontSize: 22,
                  color: "#9ca3af",
                  letterSpacing: "0.1em",
                  marginTop: 8,
                  textTransform: "uppercase",
                }}
              >
                Time
              </p>
            </div>
          </div>

          {progress !== null && (
            <div className="mt-16" style={{ maxWidth: 600 }}>
              <div
                style={{
                  height: 6,
                  background: "#e5e7eb",
                  borderRadius: 3,
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "#3b82f6",
                    borderRadius: 3,
                  }}
                />
              </div>
              <p style={{ fontSize: 24, color: "#6b7280", marginTop: 12 }}>
                {progress}% through book
              </p>
            </div>
          )}

          <div className="flex-1" />

          {data.quote && (
            <p
              style={{
                fontSize: 32,
                fontWeight: 300,
                fontStyle: "italic",
                color: "#4b5563",
                lineHeight: 1.5,
                marginBottom: 40,
              }}
            >
              {data.quote}
            </p>
          )}

          <p style={{ fontSize: 26, color: "#6b7280" }}>
            {handle}
            <span style={{ color: "#3b82f6", margin: "0 12px" }}>·</span>
            {dateFormatted}
          </p>
        </div>
      </div>
    </TemplateBackground>
  );
}
