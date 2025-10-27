"use client";
import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

export default function MusicConsentPopup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true); // ✅ Always true on page load
  const audioRef = useRef(null);

  // 🎵 Toggle music manually (from button)
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn("Playback failed:", err);
    }
  };

  // ✅ User accepts to play
  const handleAccept = async () => {
    setShowModal(false);
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Autoplay blocked:", err);
    }
  };

  // 🚫 User skips music
  const handleSkip = () => {
    setShowModal(false);
    setIsPlaying(false);
  };

  return (
    <>
      {/* 🎵 Floating Music Button */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 border border-white/50"
      >
        {isPlaying ? (
          <FaPause className="w-6 h-6" />
        ) : (
          <FaMusic className="w-6 h-6" />
        )}
      </button>

      {/* 🎶 Label */}
      <p className="fixed bottom-1 right-6 text-xs sm:text-sm text-gray-800 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md z-40">
        {isPlaying ? "Music Playing..." : "Click to Play Music"}
      </p>

      {/* 🎧 Audio element */}
      <audio ref={audioRef} src="/music/wedding-theme.mp3" loop preload="auto" />

      {/* 🌸 Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Popup Box */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl p-5 sm:p-6 z-10 mx-2 sm:mx-0">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 mx-auto sm:mx-0 bg-rose-50 rounded-full p-3">
                <FaMusic className="w-8 h-8 text-rose-500" />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Play Wedding Music?
                </h3>
                <p className="mt-2 text-lg text-gray-600 leading-relaxed">
                  Would you like to play soft wedding background music while
                  viewing this site?
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={handleAccept}
                    className="flex-1 inline-flex heading items-center justify-center gap-2 px-4 py-2 rounded-full bg-rose-500 text-white font-medium shadow hover:scale-105 transition"
                  >
                    <FaMusic /> Play
                  </button>

                  <button
                    onClick={handleSkip}
                    className="flex-1 inline-flex heading items-center justify-center px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition"
                  >
                    No, thanks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
