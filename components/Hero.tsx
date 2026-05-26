"use client";

import { useEffect, useState } from "react";
import { ROTATING_QUOTES } from "@/lib/quotes";
import { Logo } from "./Logo";
import { MusicPlayer } from "./MusicPlayer";

interface HeroProps {
  onScrollToTemplates: () => void;
}

export function Hero({ onScrollToTemplates }: HeroProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % ROTATING_QUOTES.length);
      setFadeKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(44,24,16,0.7))",
        }}
      />

      <MusicPlayer />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <Logo color="#faf6ef" size="lg" className="mb-10" />

        <h1 className="font-redressed text-2xl md:text-4xl lg:text-5xl leading-snug text-white/95 max-w-3xl">
          Reading is not a habit. It&apos;s a conversation with the universe.
        </h1>

        <div className="mt-12 h-24 flex items-center justify-center max-w-2xl">
          <p
            key={fadeKey}
            className="quote-fade font-redressed text-lg md:text-xl text-white/80 italic leading-relaxed"
          >
            {ROTATING_QUOTES[quoteIndex]}
          </p>
        </div>

        <button
          type="button"
          onClick={onScrollToTemplates}
          className="mt-16 px-8 py-3.5 rounded-full border-2 border-white text-white font-redressed text-xl transition-colors hover:bg-[#6e3726] hover:border-[#6e3726]"
        >
          Share Your Read →
        </button>
      </div>
    </section>
  );
}
