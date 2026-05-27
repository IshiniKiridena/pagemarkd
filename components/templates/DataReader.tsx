import {
  PagemarkedBrandCorner,
  PagemarkedWatermark,
  TemplateBackground,
  TemplateProps,
  useTemplateStats,
} from "./shared";

export function DataReader({ data }: TemplateProps) {
  const {
    progress,
    sessionPages,
    timeFormatted,
    dateFormatted,
    handle,
    pagesPerHour,
  } = useTemplateStats(data);

  const progressDisplay = progress !== null ? `${progress}%` : "—";
  const speedDisplay =
    pagesPerHour !== null ? `${pagesPerHour} pg/hr` : "—";

  const barFilled = progress !== null ? Math.round(progress / 10) : 0;

  return (
    <TemplateBackground
      imageDataUrl={data.imageDataUrl}
      overlay="rgba(10, 10, 10, 0.88)"
      className="data-grid-bg"
    >
      <div
        className="relative h-full flex flex-col px-16 py-20"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <PagemarkedBrandCorner color="#00ff88" />
        <p
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "#00ff88",
            textTransform: "uppercase",
          }}
        >
          Reading Log
        </p>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 22,
            color: "#00ff88",
            marginTop: 8,
            opacity: 0.8,
          }}
        >
          {dateFormatted}
        </p>

        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 48,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {data.bookTitle}
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#9ca3af",
            marginTop: 12,
          }}
        >
          {data.author}
        </p>

        <div
          className="grid grid-cols-2 gap-px mt-16"
          style={{
            background: "rgba(0, 255, 136, 0.2)",
            border: "1px solid rgba(0, 255, 136, 0.3)",
          }}
        >
          {[
            { label: "Pages Today", value: String(sessionPages) },
            { label: "Time", value: timeFormatted },
            {
              label: "Progress",
              value: progressDisplay,
              extra:
                progress !== null
                  ? "▓".repeat(barFilled) + "░".repeat(10 - barFilled)
                  : undefined,
            },
            { label: "Speed", value: speedDisplay },
          ].map((cell) => (
            <div
              key={cell.label}
              style={{
                background: "#0a0a0a",
                padding: "32px 28px",
              }}
            >
              <p
                style={{
                  fontSize: 18,
                  color: "#00ff88",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {cell.label}
              </p>
              <p
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 48,
                  color: "#ffffff",
                  fontWeight: 700,
                  marginTop: 12,
                  lineHeight: 1.2,
                }}
              >
                {cell.value}
              </p>
              {cell.extra && (
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 28,
                    color: "#00ff88",
                    marginTop: 8,
                    letterSpacing: 2,
                  }}
                >
                  {cell.extra}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1" />

        {data.quote && (
          <p
            style={{
              fontSize: 28,
              fontWeight: 300,
              color: "#9ca3af",
              lineHeight: 1.5,
              marginBottom: 32,
              maxWidth: 900,
            }}
          >
            {data.quote}
          </p>
        )}

        <div className="flex justify-between items-end">
          {/* <PagemarkedWatermark color="rgba(0, 255, 136, 0.5)" /> */}
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 26,
              color: "#00ff88",
            }}
          >
            {handle}
          </p>
        </div>
      </div>
    </TemplateBackground>
  );
}
