import {
  PagemarkedBrandCorner,
  TemplateBackground,
  TemplateProps,
  useTemplateStats,
} from "./shared";

export function ClassicLibrary({ data }: TemplateProps) {
  const { progress, sessionPages, timeFormatted, dateFormatted, handle } =
    useTemplateStats(data);

  return (
    <TemplateBackground
      imageDataUrl={data.imageDataUrl}
      overlay="rgba(26, 39, 68, 0.75)"
    >
      <div
        className="relative flex flex-col h-full px-16 py-20"
        style={{ fontFamily: "Lora, serif" }}
      >
        <PagemarkedBrandCorner color="#f5f0e6" />

        <div className="flex-1 flex flex-col justify-center">
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#f5f0e6",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {data.bookTitle}
          </h1>
          <p
            style={{
              fontFamily: "Lora, serif",
              fontSize: 36,
              fontStyle: "italic",
              color: "#c9a84c",
              marginTop: 16,
            }}
          >
            by {data.author}
          </p>

          <div
            style={{
              width: 120,
              height: 3,
              background: "#c9a84c",
              margin: "40px 0",
            }}
          />

          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: 56,
              color: "#f5f0e6",
              fontWeight: 700,
            }}
          >
            {sessionPages} pages
          </p>
          <p
            style={{
              fontFamily: "Lora, serif",
              fontSize: 28,
              color: "#d4c4a8",
              marginTop: 8,
              fontStyle: "italic",
            }}
          >
            this session
          </p>
          <p
            style={{
              fontFamily: "Lora, serif",
              fontSize: 40,
              color: "#d4c4a8",
              marginTop: 24,
            }}
          >
            {timeFormatted}
          </p>

          {progress !== null && (
            <div className="mt-10" style={{ maxWidth: 700 }}>
              <div
                style={{
                  height: 8,
                  background: "rgba(245, 240, 230, 0.25)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #f5f0e6, #c9a84c)",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: 24,
                  color: "#c9a84c",
                  marginTop: 12,
                  fontStyle: "italic",
                }}
              >
                {progress}% through the book
              </p>
            </div>
          )}
        </div>

        {data.quote && (
          <p
            style={{
              fontFamily: "Lora, serif",
              fontSize: 32,
              fontStyle: "italic",
              color: "#f5f0e6",
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            <span style={{ color: "#c9a84c", fontSize: 48 }}>&ldquo;</span>
            {data.quote}
            <span style={{ color: "#c9a84c", fontSize: 48 }}>&rdquo;</span>
          </p>
        )}

        <p
          style={{
            fontFamily: "Lora, serif",
            fontSize: 26,
            color: "#d4c4a8",
          }}
        >
          {dateFormatted} · {handle}
        </p>
      </div>
    </TemplateBackground>
  );
}
