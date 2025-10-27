"use client";
import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

export default function FloatingMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleUserInteraction = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Autoplay failed:", err);
      }

      // remove listeners after first interaction
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    // start music when user interacts with page (click, scroll, touch)
    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("scroll", handleUserInteraction, { once: true });
    window.addEventListener("touchstart", handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* 🌸 Floating Music Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border border-white/50"
      >
        {isPlaying ? (
          <FaPause className="w-6 h-6 animate-pulse" />
        ) : (
          <FaMusic className="w-6 h-6 animate-spin-slow" />
        )}
      </button>

      {/* 🎵 Label below button */}
      <p className="fixed bottom-1 right-6 text-xs sm:text-sm text-gray-800 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-md z-40">
        {isPlaying ? "Music Playing..." : "Click to Play Music"}
      </p>

      {/* 🎶 Background Music */}
      <audio ref={audioRef} src="/music/wedding-theme.mp3" loop preload="auto" />
    </>
  );
}
