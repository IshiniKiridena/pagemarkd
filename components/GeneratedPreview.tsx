"use client";

interface GeneratedPreviewProps {
  imageDataUrl: string | null;
  bookTitle: string;
  onDownload: () => void;
  onReset: () => void;
}

export function GeneratedPreview({
  imageDataUrl,
  bookTitle,
  onDownload,
  onReset,
}: GeneratedPreviewProps) {
  if (!imageDataUrl) return null;

  return (
    <section
      id="preview"
      className="py-16 px-6 flex flex-col items-center"
    >
      <h2 className="font-redressed text-3xl text-[#6e3726] mb-8">
        Your Reading Card
      </h2>

      <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 max-w-[400px] w-full">
        <img
          src={imageDataUrl}
          alt={`Reading card for ${bookTitle}`}
          className="w-full h-auto block"
        />
      </div>

      <p className="text-sm text-brand-dark/60 mt-4 font-redressed">
        Optimized for Instagram Stories (1080×1920)
      </p>

      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        <button
          type="button"
          onClick={onDownload}
          className="px-8 py-3 rounded-full bg-[#6e3726] text-white font-redressed text-lg hover:bg-[#5a2d1f] transition-colors"
        >
          Download
        </button>
        <button
          type="button"
          onClick={onReset}
          className="px-8 py-3 rounded-full border-2 border-[#6e3726] text-[#6e3726] font-redressed text-lg hover:bg-[#6e3726] hover:text-white transition-colors"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
