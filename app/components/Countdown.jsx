"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();
            if (difference <= 0)
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!mounted) return null;

    return (
      <section
      data-aos="fade-up"
      data-aos-duration="1200"
      className="relative py-24 px-4 flex items-center justify-center min-h-[700px] overflow-hidden bg-fixed"
      style={{
        backgroundImage: "url(/images/ring-bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Main Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-[3rem] shadow-2xl p-10 md:p-20 text-center overflow-hidden border border-white/20">
        
        {/* Top Decoration */}
        <img
          src="/images/blue-flower.png"
          className="absolute -top-6 -left-4 w-32 h-auto opacity-40 pointer-events-none"
          alt="decoration"
        />

        {/* Title Group */}
        <div className="mb-14">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-3 tracking-tight">
            The Countdown
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-accent/30" />
            <p className="text-md font-medium italic text-accent uppercase ">
              to forever has begun
            </p>
            <div className="h-[1px] w-8 bg-accent/30" />
          </div>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-6 md:gap-10 mb-16">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Sec", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-3xl shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                <span className="text-4xl md:text-5xl font-bold text-gray-800 tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-3 text-xs uppercase tracking-[0.3em] font-bold text-gray-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Iconic Centerpiece */}
        <div className="relative h-40 flex items-center justify-center mb-8">
          <img
            src="/images/heart.png"
            className="absolute w-40 h-auto opacity-10 animate-pulse mix-blend-multiply"
            alt="Heart Decor"
          />
          <img
            src="/images/ring.png"
            className="relative z-10 w-24 h-auto drop-shadow-2xl"
            alt="Wedding Rings"
            data-aos="zoom-in"
          />
        </div>

        {/* Footer Message */}
        <div className="max-w-md mx-auto relative z-10">
          <h3 
            data-aos="fade-up" 
            className="text-3xl md:text-4xl font-serif leading-snug text-gray-800"
          >
            We can&apos;t wait to celebrate with you!
          </h3>
        </div>

        {/* Bottom Decoration */}
        <img
          src="/images/blue-flower.png"
          className="absolute -bottom-10 -right-4 w-48 h-auto rotate-180 opacity-40 pointer-events-none"
          alt="decoration"
        />
      </div>
    </section>
    );
};

export default Countdown;
