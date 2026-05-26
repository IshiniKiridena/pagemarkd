export function formatReadingTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function calcProgress(
  pagesRead: number,
  totalPages?: number
): number | null {
  if (!totalPages || totalPages <= 0) return null;
  return Math.min(100, Math.round((pagesRead / totalPages) * 100));
}

export function calcPagesPerHour(
  pagesRead: number,
  minutes: number
): number | null {
  if (minutes <= 0) return null;
  return Math.round((pagesRead / minutes) * 60);
}

export function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}
