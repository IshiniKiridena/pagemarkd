"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DeveloperStory } from "@/components/DeveloperStory";
import { Footer } from "@/components/Footer";
import { GeneratedPreview } from "@/components/GeneratedPreview";
import { Hero } from "@/components/Hero";
import { ReadingForm } from "@/components/ReadingForm";
import { TemplateSelector } from "@/components/TemplateSelector";
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";
import {
  captureTemplateElement,
  downloadDataUrl,
} from "@/lib/generateImage";
import { ReadingSessionData, TemplateId } from "@/lib/types";
import { sanitizeFilename } from "@/lib/utils";

// TODO v2: User accounts + reading history
// TODO v2: Reading streaks
// TODO v2: Social sharing API (Instagram, Twitter)
// TODO v2: Reading goals and progress tracking
// TODO v2: Book search via Google Books API to auto-fill cover

export default function Home() {
  const pageBgUrl =
    "https://images.unsplash.com/photo-1631519952398-5b1d76b946e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId | null>(
    null
  );
  const [sessionData, setSessionData] = useState<ReadingSessionData | null>(
    null
  );
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pendingCapture, setPendingCapture] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const renderRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGenerate = useCallback(
    (data: ReadingSessionData) => {
      if (!selectedTemplate) return;
      setSessionData(data);
      setIsGenerating(true);
      setPendingCapture(true);
    },
    [selectedTemplate]
  );

  useEffect(() => {
    if (!pendingCapture || !sessionData || !selectedTemplate) return;

    let cancelled = false;

    const capture = async () => {
      await new Promise<void>((r) =>
        requestAnimationFrame(() => requestAnimationFrame(() => r()))
      );

      if (cancelled) return;

      const el = renderRef.current;
      if (!el) {
        setIsGenerating(false);
        setPendingCapture(false);
        return;
      }

      try {
        const dataUrl = await captureTemplateElement(el);
        if (!cancelled) {
          setGeneratedImage(dataUrl);
          setTimeout(() => scrollTo("preview"), 100);
        }
      } catch (err) {
        console.error("Image generation failed:", err);
      } finally {
        if (!cancelled) {
          setIsGenerating(false);
          setPendingCapture(false);
        }
      }
    };

    capture();
    return () => {
      cancelled = true;
    };
  }, [pendingCapture, sessionData, selectedTemplate]);

  const handleDownload = () => {
    if (!generatedImage || !sessionData) return;
    const name = sanitizeFilename(sessionData.bookTitle) || "reading";
    downloadDataUrl(generatedImage, `pagemarkd-${name}.png`);
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setSessionData(null);
    setGeneratedImage(null);
    setFormKey((k) => k + 1);
    scrollTo("templates");
  };

  return (
    <main>
      <Hero onScrollToTemplates={() => scrollTo("templates")} />

      <div className="relative">
        {/* Background image behind everything except Hero/Footer */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${pageBgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        />
        {/* Cream overlay to keep the UI readable */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(248, 237, 202, 0.88)" }}
        />

        <div className="relative">
          <TemplateSelector
            selected={selectedTemplate}
            onSelect={setSelectedTemplate}
          />

          <ReadingForm
            key={formKey}
            selectedTemplate={selectedTemplate}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            formKey={formKey}
          />

          <GeneratedPreview
            imageDataUrl={generatedImage}
            bookTitle={sessionData?.bookTitle ?? ""}
            onDownload={handleDownload}
            onReset={handleReset}
          />

          <DeveloperStory />
        </div>
      </div>
      <Footer />

      {sessionData && selectedTemplate && (
        <div
          aria-hidden
          style={{
            position: "fixed",
            left: -9999,
            top: 0,
            pointerEvents: "none",
            zIndex: -1,
          }}
        >
          <div ref={renderRef} id="template-render">
            <TemplateRenderer
              templateId={selectedTemplate}
              data={sessionData}
            />
          </div>
        </div>
      )}
    </main>
  );
}
