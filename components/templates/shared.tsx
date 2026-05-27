import { ReadingSessionData } from "@/lib/types";
import {
  calcPagesPerHour,
  calcProgress,
  formatDate,
  formatReadingTime,
} from "@/lib/utils";

export interface TemplateProps {
  data: ReadingSessionData;
}

export function useTemplateStats(data: ReadingSessionData) {
  const progress = calcProgress(data.lastPageRead, data.totalPages);
  const timeFormatted = formatReadingTime(data.readingTimeMinutes);
  const dateFormatted = formatDate(data.date);
  const pagesPerHour = calcPagesPerHour(
    data.pagesRead,
    data.readingTimeMinutes
  );
  const handle = data.handle.trim() || "@reader";
  const sessionPages = data.pagesRead;

  return {
    progress,
    sessionPages,
    timeFormatted,
    dateFormatted,
    pagesPerHour,
    handle,
  };
}

export function TemplateBackground({
  imageDataUrl,
  overlay,
  children,
  className = "",
}: {
  imageDataUrl: string;
  overlay: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: 1080,
        height: 1920,
        backgroundImage: `url(${imageDataUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}

export function PagemarkdBrand({ color = "#f5f0e6" }: { color?: string }) {
  return (
    <span
      style={{
        fontFamily: "Redressed, cursive",
        fontSize: 32,
        color,
      }}
    >
      Pagemarkd
    </span>
  );
}

export function PagemarkdBrandCorner({ color = "#f5f0e6" }: { color?: string }) {
  return (
    <div
      className="absolute top-20 right-16 z-20"
      style={{ pointerEvents: "none" }}
    >
      <PagemarkdBrand color={color} />
    </div>
  );
}

export function PagemarkdWatermark({ color = "#f5f0e6" }: { color?: string }) {
  return (
    <span
      style={{
        fontFamily: "Redressed, cursive",
        fontSize: 28,
        color,
        opacity: 0.85,
      }}
    >
      Pagemarkd
    </span>
  );
}
