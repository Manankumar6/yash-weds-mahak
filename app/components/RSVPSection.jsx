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
      <div
        data-aos="zoom-in"
        className="relative z-10 max-w-lg w-[90%] text-center bg-white/20 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/30 p-8 md:p-12 m-3"
      >
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

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white italic">
            Will You Join Us?
          </h2>

          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
            We&apos;d love to celebrate this special day with you! <br />
            Kindly confirm your presence below.
          </p>
        </div>


        {/* 📝 RSVP Button */}
        <div className="pt-4">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfICfvPPryMRVAMxXjOPAWMVcXJe0Zc_aGngMqPxH4f9ETsjg/viewform?usp=publish-editor"
            target="_blank"
          >
            <button className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-rose-50 hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm">
              Confirm Attendance
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
