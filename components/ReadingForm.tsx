"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ReadingSessionData, TemplateId } from "@/lib/types";

export interface FormValues {
  bookTitle: string;
  author: string;
  pagesRead: string;
  lastPageRead: string;
  totalPages: string;
  readingTimeMinutes: string;
  handle: string;
  quote: string;
  date: string;
}

interface ReadingFormProps {
  selectedTemplate: TemplateId | null;
  onGenerate: (data: ReadingSessionData) => void;
  isGenerating: boolean;
  formKey: number;
}

const defaultForm = (): FormValues => ({
  bookTitle: "",
  author: "",
  pagesRead: "",
  lastPageRead: "",
  totalPages: "",
  readingTimeMinutes: "",
  handle: "",
  quote: "",
  date: new Date().toISOString().split("T")[0],
});

export function ReadingForm({
  selectedTemplate,
  onGenerate,
  isGenerating,
  formKey,
}: ReadingFormProps) {
  const [form, setForm] = useState<FormValues>(defaultForm);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setForm(defaultForm());
    setImageDataUrl(null);
    setErrors({});
  }, [formKey]);

  const update = (field: keyof FormValues, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[field];
      return next;
    });
  };

  const handleImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        setErrors((err) => ({
          ...err,
          image: "Please upload an image file",
        }));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImageDataUrl(reader.result as string);
        setErrors((err) => {
          const next = { ...err };
          delete next.image;
          return next;
        });
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!form.bookTitle.trim()) next.bookTitle = "Book title is required";
    if (!form.author.trim()) next.author = "Author is required";
    if (!form.pagesRead || Number(form.pagesRead) < 1)
      next.pagesRead = "Enter pages read today";
    if (form.totalPages) {
      if (!form.lastPageRead || Number(form.lastPageRead) < 1)
        next.lastPageRead = "Enter the last page you read";
      else if (Number(form.lastPageRead) > Number(form.totalPages))
        next.lastPageRead = "Last page cannot exceed total pages";
    }
    if (!form.readingTimeMinutes || Number(form.readingTimeMinutes) < 1)
      next.readingTimeMinutes = "Enter reading time in minutes";
    if (!imageDataUrl) next.image = "Upload a book cover or mood image";
    if (!selectedTemplate) next.template = "Select a template above";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const canSubmit = useMemo(() => {
    return (
      !!selectedTemplate &&
      !!form.bookTitle.trim() &&
      !!form.author.trim() &&
      Number(form.pagesRead) >= 1 &&
      Number(form.readingTimeMinutes) >= 1 &&
      !!imageDataUrl &&
      !isGenerating
    );
  }, [selectedTemplate, form, imageDataUrl, isGenerating]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !imageDataUrl || !selectedTemplate) return;

    const data: ReadingSessionData = {
      bookTitle: form.bookTitle.trim(),
      author: form.author.trim(),
      pagesRead: Number(form.pagesRead),
      lastPageRead: form.lastPageRead
        ? Number(form.lastPageRead)
        : undefined,
      totalPages: form.totalPages ? Number(form.totalPages) : undefined,
      readingTimeMinutes: Number(form.readingTimeMinutes),
      handle: form.handle.trim() || "@reader",
      quote: form.quote.trim().slice(0, 120),
      imageDataUrl,
      date: form.date,
    };
    onGenerate(data);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-[#c4956a]/40 bg-white/80 text-brand-dark font-redressed text-lg focus:outline-none focus:ring-2 focus:ring-[#6e3726]/30";

  return (
    <section id="form" className="py-16 px-6 md:px-12 max-w-2xl mx-auto">
      <h2 className="font-redressed text-4xl text-[#6e3726] text-center mb-10">
        Log Your Reading Session
      </h2>

      {errors.template && (
        <p className="text-center text-[#6e3726] mb-4 font-redressed">
          {errors.template}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            Book Title *
          </label>
          <input
            className={inputClass}
            value={form.bookTitle}
            onChange={(e) => update("bookTitle", e.target.value)}
            placeholder="The Name of the Wind"
          />
          {errors.bookTitle && (
            <p className="text-[#6e3726] text-sm mt-1">{errors.bookTitle}</p>
          )}
        </div>

        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            Author *
          </label>
          <input
            className={inputClass}
            value={form.author}
            onChange={(e) => update("author", e.target.value)}
            placeholder="Patrick Rothfuss"
          />
          {errors.author && (
            <p className="text-[#6e3726] text-sm mt-1">{errors.author}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#6e3726] mb-1 font-redressed">
              Pages Read Today *
            </label>
            <input
              type="number"
              min={1}
              className={inputClass}
              value={form.pagesRead}
              onChange={(e) => update("pagesRead", e.target.value)}
            />
            {errors.pagesRead && (
              <p className="text-[#6e3726] text-sm mt-1">{errors.pagesRead}</p>
            )}
          </div>
          <div>
            <label className="block text-[#6e3726] mb-1 font-redressed">
              Last Page Read
            </label>
            <input
              type="number"
              min={1}
              className={inputClass}
              value={form.lastPageRead}
              onChange={(e) => update("lastPageRead", e.target.value)}
              placeholder={
                form.totalPages ? "Required for progress %" : "Optional"
              }
            />
            {errors.lastPageRead && (
              <p className="text-[#6e3726] text-sm mt-1">
                {errors.lastPageRead}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            Total Pages in Book
          </label>
          <input
            type="number"
            min={1}
            className={inputClass}
            value={form.totalPages}
            onChange={(e) => update("totalPages", e.target.value)}
            placeholder="Optional — needed with last page for progress %"
          />
        </div>

        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            Reading Time (minutes) *
          </label>
          <input
            type="number"
            min={1}
            className={inputClass}
            value={form.readingTimeMinutes}
            onChange={(e) => update("readingTimeMinutes", e.target.value)}
          />
          {errors.readingTimeMinutes && (
            <p className="text-[#6e3726] text-sm mt-1">
              {errors.readingTimeMinutes}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            Your Name / Handle
          </label>
          <input
            className={inputClass}
            value={form.handle}
            onChange={(e) => update("handle", e.target.value)}
            placeholder="@yourname"
          />
        </div>

        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            A quote or thought
          </label>
          <textarea
            className={`${inputClass} resize-none`}
            rows={3}
            maxLength={120}
            value={form.quote}
            onChange={(e) => update("quote", e.target.value)}
            placeholder="Optional — max 120 characters"
          />
          <p className="text-xs text-brand-dark/50 text-right mt-1">
            {form.quote.length}/120
          </p>
        </div>

        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            Upload Book Cover / Mood Image *
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="block w-full text-sm text-brand-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#6e3726] file:text-white file:font-redressed hover:file:bg-[#5a2d1f] cursor-pointer"
          />
          {errors.image && (
            <p className="text-[#6e3726] text-sm mt-1">{errors.image}</p>
          )}
          {imageDataUrl && (
            <img
              src={imageDataUrl}
              alt="Upload preview"
              className="mt-3 w-24 h-32 object-cover rounded-lg border border-[#c4956a]/40"
            />
          )}
        </div>

        <div>
          <label className="block text-[#6e3726] mb-1 font-redressed">
            Date
          </label>
          <input
            type="date"
            className={inputClass}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full py-4 rounded-xl bg-[#6e3726] text-white font-redressed text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5a2d1f] transition-colors flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Generating...
            </>
          ) : (
            "Generate My Reading Card ✨"
          )}
        </button>
      </form>
    </section>
  );
}
