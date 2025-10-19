"use client";
import React from "react";
import { FiCamera } from "react-icons/fi";

import { GiDiamondRing, GiPartyPopper } from "react-icons/gi"; // ✅ replaces PiRingsThin
import Image from "next/image";
import { FaGlassCheers } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
const programData = [
  {
    time: "3:30 PM",
    title: "WEDDING CEREMONY",
    icon: <GiDiamondRing className="w-8 h-8 text-gray-700" />,
  },
  {
    time: "4:30 PM",
    title: "COCKTAIL HOUR",
    icon: <FaGlassCheers className="w-8 h-8 text-gray-700" />,
  },
  {
    time: "5:00 PM",
    title: "PHOTO SESSION",
    icon: <FiCamera className="w-8 h-8 text-gray-700" />,
  },
  {
    time: "6:30 PM",
    title: "Dinner Reception",
    icon: <MdDinnerDining className="w-8 h-8 text-gray-700" />,
  },
  {
    time: "8:00 PM",
    title: "Dance Party",
    icon: <GiPartyPopper className="w-8 h-8 text-gray-700" />,
  },
];

const Program = () => {
  return (
    <section
      className="relative py-16 px-4 md:px-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/program-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      {/* Main container */}
      <div className="relative overflow-hidden z-10 rounded-b-full max-w-xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 text-center">
        {/* Title */}
        <div className="flex relative justify-center items-center gap-3 mb-8">
          <Image
            src="/images/ring.png"
            alt="Program Rings"
            width={100}
            height={100}
            className="opacity-70 absolute left-0 "
            data-aos="fade-right"
          />
          <h2
            data-aos="fade-left"
            className="text-4xl md:text-6xl heading font-bold text-gray-700 tracking-wide">
            PROGRAM
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col space-y-8 mt-10">
          {/* vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-400/50"></div>

          {programData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
              data-aos="fade-up"              // 👈 add fade-up animation
              data-aos-delay={index * 200}    // 👈 each one slightly delayed
              data-aos-duration="800"
            >
              {/* Icon + dot */}
              <div className="flex flex-col items-center">
                <div className="bg-white border-2 border-gray-400 rounded-full p-2 z-10">
                  {item.icon}
                </div>
                {index !== programData.length - 1 && (
                  <div className="w-[2px] h-12 bg-gray-400/50"></div>
                )}
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {item.time}
                </h3>
                <p className="text-lg md:text-xl font-semibold text-gray-700 mt-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={'/images/white-flower.png'}
          width={250}
          height={150}
          className="absolute -left-5 bottom-0 -z-10 opacity-40 "
          alt="flower"

        />
      </div>
    </section>
  );
};

export default Program;
