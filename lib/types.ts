export type TemplateId =
  | "classic-library"
  | "cozy-nook"
  | "modern-minimal"
  | "dark-literary"
  | "paper-journal"
  | "data-reader";

export interface ReadingSessionData {
  bookTitle: string;
  author: string;
  /** Pages read in this session */
  pagesRead: number;
  /** Furthest page reached in the book */
  lastPageRead?: number;
  totalPages?: number;
  readingTimeMinutes: number;
  handle: string;
  quote: string;
  imageDataUrl: string;
  date: string;
}

export interface TemplateMeta {
  id: TemplateId;
  name: string;
  emoji: string;
  bestFor: string;
  vibeTag: string;
  fontsNote: string;
  previewBg: string;
  previewText: string;
  previewAccent?: string;
}

export const TEMPLATES: TemplateMeta[] = [
  {
    id: "classic-library",
    name: "Classic Library",
    emoji: "📚",
    bestFor:
      "Scholars, non-fiction readers, literary fiction lovers, academic types",
    vibeTag: "For the serious reader",
    fontsNote: "Playfair Display + Lora",
    previewBg: "#1a2744",
    previewText: "#f5f0e6",
    previewAccent: "#c9a84c",
  },
  {
    id: "cozy-nook",
    name: "Cozy Reading Nook",
    emoji: "🌙",
    bestFor: "BookTok fans, romance readers, fantasy lovers, emotional reads",
    vibeTag: "Coffee, blanket, and rain weather",
    fontsNote: "Cormorant Garamond + Nunito",
    previewBg: "#f5e6d3",
    previewText: "#5c4033",
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    emoji: "🖤",
    bestFor:
      "Self-help readers, non-fiction, tech books, productivity nerds",
    vibeTag: "I read to improve myself",
    fontsNote: "Inter",
    previewBg: "#ffffff",
    previewText: "#2c2c2c",
    previewAccent: "#3b82f6",
  },
  {
    id: "dark-literary",
    name: "Dark Literary",
    emoji: "🕯️",
    bestFor:
      "Philosophy, classics, late-night reading, moody aesthetic lovers",
    vibeTag: "Deep thoughts at midnight",
    fontsNote: "Cinzel + EB Garamond",
    previewBg: "#0b0b0f",
    previewText: "#c9a84c",
  },
  {
    id: "paper-journal",
    name: "Paper Journal",
    emoji: "📖",
    bestFor:
      "Reading diary keepers, highlight sharers, reflective readers, personal notes",
    vibeTag: "My reading journal",
    fontsNote: "Caveat + sans body",
    previewBg: "#faf6ef",
    previewText: "#5c4a3a",
    previewAccent: "#1a3a5c",
  },
  {
    id: "data-reader",
    name: "Data Reader",
    emoji: "📊",
    bestFor:
      "Analytics lovers, reading challenge trackers, people who count pages and minutes",
    vibeTag: "I measure everything",
    fontsNote: "Inter + JetBrains Mono",
    previewBg: "#0a0a0a",
    previewText: "#00ff88",
  },
];
