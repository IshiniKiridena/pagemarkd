import {
  PagemarkdBrandCorner,
  PagemarkdWatermark,
  TemplateBackground,
  TemplateProps,
  useTemplateStats,
} from "./shared";

export function DarkLiterary({ data }: TemplateProps) {
  const { progress, sessionPages, timeFormatted, dateFormatted, handle } =
    useTemplateStats(data);

  return (
    <TemplateBackground
      imageDataUrl={data.imageDataUrl}
      overlay="rgba(11, 11, 15, 0.8)"
      className="dark-literary"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(80, 60, 120, 0.25) 100%)",
        }}
      />
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center px-16 py-20 text-center"
        style={{ fontFamily: "EB Garamond, serif" }}
      >
        <PagemarkdBrandCorner color="#f5f0e6" />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 68,
              fontWeight: 700,
              color: "#c9a84c",
              lineHeight: 1.15,
              maxWidth: 920,
            }}
          >
            {data.bookTitle}
          </h1>
          <p
            style={{
              fontSize: 38,
              fontStyle: "italic",
              color: "#f5f0e6",
              marginTop: 24,
              opacity: 0.9,
            }}
          >
            {data.author}
          </p>

          <p
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 28,
              color: "#c9a84c",
              margin: "48px 0",
              letterSpacing: "0.3em",
            }}
          >
            ── ✦ ──
          </p>

          <p
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 72,
              color: "#f5f0e6",
              fontWeight: 700,
            }}
          >
            {sessionPages}
          </p>
          <p
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 28,
              color: "#c9a84c",
              marginTop: 8,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            pages today
          </p>
          <p
            style={{
              fontSize: 40,
              color: "#d4c4a8",
              marginTop: 32,
            }}
          >
            {timeFormatted}
          </p>

          {progress !== null && (
            <p
              style={{
                fontSize: 28,
                color: "#a89870",
                marginTop: 24,
                fontStyle: "italic",
              }}
            >
              {progress}% through the book
            </p>
          )}

          {data.quote && (
            <p
              style={{
                fontSize: 34,
                fontStyle: "italic",
                color: "#f5f0e6",
                marginTop: 56,
                maxWidth: 800,
                lineHeight: 1.6,
                opacity: 0.95,
              }}
            >
              <span
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 56,
                  color: "#c9a84c",
                }}
              >
                &ldquo;
              </span>
              {data.quote}
              <span
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 56,
                  color: "#c9a84c",
                }}
              >
                &rdquo;
              </span>
            </p>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 pb-8">
          {/* <PagemarkdWatermark color="#c9a84c" /> */}
          <p
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 24,
              color: "#a89870",
              letterSpacing: "0.1em",
            }}
          >
            {handle} · {dateFormatted}
          </p>
        </div>
      </div>
    </TemplateBackground>
  );
}
