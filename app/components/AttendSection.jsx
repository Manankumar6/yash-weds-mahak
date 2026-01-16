"use client";
import React from "react";

const PresenceRequest = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden py-20"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/007/565/369/large_2x/watercolor-floral-background-with-brush-and-floral-frame-for-horizontal-banner-backdrop-wedding-invitation-thank-you-card-wallpaper-free-photo.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* 🩵 Refined soft overlay for a "Paper" texture feel */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

      {/* 💌 Content Container */}
      <div 
        data-aos="fade-up" 
        className="relative z-10 max-w-3xl px-8 flex flex-col items-center"
      >
        {/* Top Decorative Icon */}
        <div className="mb-6 opacity-20">
          <img src="/images/ring.png" alt="" className="w-12 h-12 object-contain" />
        </div>

        <h2 className="text-4xl md:text-6xl font-serif italic text-gray-900 mb-8 leading-tight">
          We request the honor <br /> of your presence
        </h2>

        {/* 🌿 Decorative Divider Top */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/divider.png"
            alt="Floral Divider"
            className="opacity-40 w-48 md:w-64 h-auto object-contain rotate-180"
          />
        </div>

        <div className="space-y-6 max-w-2xl">
          <p className="text-gray-700 text-xl md:text-2xl font-light leading-relaxed">
            Your love, laughter, and blessings <br className="hidden md:block" /> 
            mean the world to us.
          </p>
          
          <p className="text-gray-600 text-lg md:text-xl font-serif italic leading-relaxed">
            Please join us as we begin our new journey together and 
            make this day truly memorable with your presence.
          </p>
        </div>

        {/* 🌿 Decorative Divider Bottom */}
        <div className="flex justify-center mt-8 mb-10">
          <img
            src="/images/divider.png"
            alt="Floral Divider"
            className="opacity-40 w-48 md:w-64 h-auto object-contain"
          />
        </div>

        {/* 💕 Styled Button */}
        <button className="group relative overflow-hidden bg-transparent border border-gray-800 text-gray-900 text-lg md:text-xl font-medium px-12 py-4 rounded-full transition-all duration-500 hover:text-white">
          <span className="absolute inset-0 w-0 bg-gray-900 transition-all duration-500 ease-out group-hover:w-full"></span>
          <span className="relative z-10 uppercase tracking-widest">Thank You</span>
        </button>
      </div>

      {/* Subtle Corner Flowers */}
      <img
        src="/images/pink-flower.png"
        className="absolute top-0 left-0 w-40  rotate-180 opacity-30 pointer-events-none"
        alt=""
      />
      <img
        src="/images/pink-flower.png"
        className="absolute bottom-0 right-0 w-40  opacity-30 pointer-events-none "
        alt=""
      />
    </section>
  );
};

export default PresenceRequest;