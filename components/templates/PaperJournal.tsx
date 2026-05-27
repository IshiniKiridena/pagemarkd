import { BookmarkIcon } from "../BookmarkIcon";
import { TemplateBackground, TemplateProps, useTemplateStats } from "./shared";

export function PaperJournal({ data }: TemplateProps) {
  const { progress, sessionPages, timeFormatted, dateFormatted, handle } =
    useTemplateStats(data);

  return (
    <TemplateBackground
      imageDataUrl={data.imageDataUrl}
      overlay="rgba(250, 246, 239, 0.7)"
      className="paper-noise"
    >
      <div
        className="h-full flex flex-col px-20 py-24 relative"
        style={{ fontFamily: "Caveat, cursive" }}
      >
        <div className="absolute top-16 right-16">
          <BookmarkIcon className="w-12 h-16" color="#1a3a5c" />
        </div>

        <p
          style={{
            fontSize: 36,
            color: "#6b5b4f",
            textAlign: "right",
            paddingRight: 80,
          }}
        >
          {dateFormatted}
        </p>

        <div className="flex-1 flex flex-col justify-center -mt-12">
          <h1
            style={{
              fontSize: 80,
              fontWeight: 600,
              color: "#1a3a5c",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {data.bookTitle}
          </h1>
          <p
            style={{
              fontSize: 44,
              color: "#8b8078",
              marginTop: 12,
            }}
          >
            by {data.author}
          </p>

          <div
            style={{
              height: 2,
              background: "#c4bcb0",
              margin: "40px 0",
              maxWidth: 500,
            }}
          />

          <ul
            style={{
              fontSize: 42,
              color: "#4a4540",
              listStyle: "none",
              padding: 0,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <li style={{ marginBottom: 16 }}>
              ○ Pages today: {sessionPages}
            </li>
            <li style={{ marginBottom: 16 }}>○ Time: {timeFormatted}</li>
            {progress !== null && (
              <li>○ Progress: {progress}%</li>
            )}
          </ul>

          <div
            style={{
              height: 2,
              background: "#c4bcb0",
              margin: "40px 0",
              maxWidth: 400,
            }}
          />

          {data.quote && (
            <p
              style={{
                fontSize: 40,
                fontStyle: "italic",
                color: "#3d3830",
                maxWidth: 800,
                lineHeight: 1.4,
                transform: "rotate(-1deg)",
              }}
            >
              {data.quote}
            </p>
          )}
        </div>

        <p
          style={{
            fontSize: 36,
            color: "#6b5b4f",
          }}
        >
          {handle}
        </p>
      </div>
    </TemplateBackground>
  );
}
