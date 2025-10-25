"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RSVPSection() {
     const letters = [
    { src: "/images/R.png", alt: "R" },
    { src: "/images/S.png", alt: "S" },
    { src: "/images/V.png", alt: "V" },
    { src: "/images/P.png", alt: "P" },
  ];
  return (
    <section className="relative w-full h-auto flex items-center justify-center overflow-hidden">
      {/* 🌸 Background Image */}
      <Image
        src="/images/rsvp-bg.jpg"
        alt="RSVP Background"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* 🩵 Optional overlay for soft fade */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 💌 RSVP Card */}
      <div className="relative my-10 z-10 max-w-md w-full text-center bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 p-10">
        {/* ✨ RSVP Letters as Images */}
        <div className="flex justify-center flex-wrap  p-2 ">
          {letters.map((item, i) => (
            <div key={i} className="w-26 md:w-36 h-26 md:h-36 m-2 relative">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover m-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              />
            </div>
          ))}
        </div>

        <p className="text-white/90 text-xl font-light mb-8">
          We’d love to celebrate this special day with you!  
          Kindly confirm your presence below.
        </p>
       

        {/* 📝 RSVP Button */}
        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfICfvPPryMRVAMxXjOPAWMVcXJe0Zc_aGngMqPxH4f9ETsjg/viewform?usp=publish-editor' target="_blank">
        <button className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-pink-100 transition-all duration-300">
          Confirm Attendance
        </button>
        </Link>
      </div>
    </section>
  );
}
