"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUDIO_SRC =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
        setBlocked(false);
      } catch {
        setBlocked(true);
        setPlaying(false);
      }
      setInitialized(true);
    };

    const isMobile =
      typeof window !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      tryAutoplay();
    } else {
      setBlocked(true);
      setInitialized(true);
    }

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    }
  }, [playing]);

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-full bg-black/40 backdrop-blur-sm px-4 py-2.5 text-white border border-white/20 hover:bg-black/55 transition-colors"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <span className="flex items-end gap-0.5 h-4">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="wave-bar w-1 bg-white rounded-full"
              style={{ display: "inline-block", width: 3 }}
            />
          ))}
        </span>
      ) : (
        <span className="text-lg leading-none">♪</span>
      )}
      <span className="font-redressed text-sm">
        {blocked && initialized ? "Click to play" : "Beethoven"}
      </span>
    </button>
  );
}
