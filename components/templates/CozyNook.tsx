import { TemplateBackground, TemplateProps, useTemplateStats } from "./shared";

export function CozyNook({ data }: TemplateProps) {
  const { progress, sessionPages, timeFormatted, dateFormatted, handle } =
    useTemplateStats(data);

  return (
    <TemplateBackground
      imageDataUrl={data.imageDataUrl}
      overlay="rgba(245, 230, 211, 0.6)"
    >
      <div className="h-full flex items-center justify-center px-12 relative">
        <div
          className="absolute rounded-full opacity-40"
          style={{
            width: 80,
            height: 80,
            background: "#d4a5a5",
            top: 120,
            right: 100,
          }}
        />
        <div
          className="absolute rounded-full opacity-30"
          style={{
            width: 50,
            height: 50,
            background: "#c4956a",
            bottom: 200,
            left: 80,
          }}
        />

        <div
          style={{
            width: "80%",
            background: "rgba(255, 252, 248, 0.85)",
            borderRadius: 24,
            padding: "64px 56px",
            boxShadow: "0 8px 40px rgba(92, 64, 51, 0.15)",
          }}
        >
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 64,
              fontWeight: 600,
              color: "#5c4033",
              lineHeight: 1.15,
            }}
          >
            {data.bookTitle}
          </h1>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: 32,
              color: "#8b7355",
              marginTop: 12,
            }}
          >
            {data.author}
          </p>

          <div
            className="flex gap-12 mt-12"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 28 }}>📄</span>
              <span style={{ fontSize: 36, color: "#5c4033", fontWeight: 600 }}>
                {sessionPages} pages today
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 28 }}>⏱</span>
              <span style={{ fontSize: 36, color: "#5c4033", fontWeight: 600 }}>
                {timeFormatted}
              </span>
            </div>
          </div>

          {progress !== null && (
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: 26,
                color: "#a08060",
                marginTop: 20,
              }}
            >
              {progress}% through the book
            </p>
          )}

          {data.quote && (
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 34,
                fontStyle: "italic",
                color: "#6b5344",
                marginTop: 40,
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: "#d4a5a5", fontSize: 48 }}>&ldquo;</span>
              {data.quote}
              <span style={{ color: "#d4a5a5", fontSize: 48 }}>&rdquo;</span>
            </p>
          )}

          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: 24,
              color: "#a08060",
              marginTop: 48,
            }}
          >
            {dateFormatted} · {handle}
          </p>
        </div>
      </div>
    </TemplateBackground>
  );
}
