"use client";

import { TEMPLATES, TemplateId } from "@/lib/types";

interface TemplateSelectorProps {
  selected: TemplateId | null;
  onSelect: (id: TemplateId) => void;
}

export function TemplateSelector({
  selected,
  onSelect,
}: TemplateSelectorProps) {
  return (
    <section
      id="templates"
      className="py-20 px-6 md:px-12 max-w-6xl mx-auto"
    >
      <h2 className="font-redressed text-4xl md:text-5xl text-[#6e3726] text-center">
        Choose Your Reading Aesthetic
      </h2>
      <p className="text-center text-brand-dark/80 mt-4 text-lg max-w-2xl mx-auto font-redressed">
        Each template tells a different story about your relationship with books
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {TEMPLATES.map((t) => {
          const isSelected = selected === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(t.id)}
              className={`relative text-left rounded-2xl p-6 transition-all border-2 bg-white/60 hover:shadow-lg ${
                isSelected
                  ? "border-[#6e3726] shadow-md ring-2 ring-[#6e3726]/20"
                  : "border-transparent hover:border-[#c4956a]/50"
              }`}
            >
              {isSelected && (
                <span
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#6e3726] text-white flex items-center justify-center text-sm font-bold"
                  aria-hidden
                >
                  ✓
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className="w-28 h-40 rounded-lg flex-shrink-0 flex flex-col justify-end p-3 overflow-hidden"
                  style={{ background: t.previewBg }}
                >
                  <div
                    className="h-0.5 w-8 mb-2"
                    style={{
                      background: t.previewAccent || t.previewText,
                      opacity: 0.7,
                    }}
                  />
                  <p
                    className="text-xs font-bold leading-tight"
                    style={{ color: t.previewText }}
                  >
                    Title
                  </p>
                  <p
                    className="text-[10px] opacity-70 mt-1"
                    style={{ color: t.previewText }}
                  >
                    Author
                  </p>
                  {t.id === "data-reader" && (
                    <div
                      className="mt-2 grid grid-cols-2 gap-0.5 opacity-60"
                      style={{
                        borderTop: `1px solid ${t.previewText}`,
                        paddingTop: 4,
                      }}
                    >
                      <span
                        className="text-[8px]"
                        style={{ color: t.previewText }}
                      >
                        42
                      </span>
                      <span
                        className="text-[8px]"
                        style={{ color: t.previewText }}
                      >
                        1h
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-redressed text-2xl text-[#6e3726]">
                    {t.emoji} {t.name}
                  </h3>
                  <p className="text-sm text-brand-dark/70 mt-2 leading-snug">
                    <span className="font-semibold text-[#6e3726]">
                      Best for:
                    </span>{" "}
                    {t.bestFor}
                  </p>
                  <p className="text-sm italic text-brand-accent mt-3">
                    &ldquo;{t.vibeTag}&rdquo;
                  </p>
                  <p className="text-xs text-brand-dark/50 mt-3">
                    Fonts: {t.fontsNote}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
