"use client";
import React from "react";
import Image from "next/image";
import {
  GiDiamondRing,
  GiCampfire,
  GiMusicalNotes,
  GiGlassCelebration,
} from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa";

const programData = [
  {
    date: "19th November 2025",
    time: "11:00 AM",
    title: "Lagan Lekhni",
    icon: <FaScroll className="w-8 h-8 text-rose-600" />,
    image: "/images/event8.png",
    
  },
  {
    date: "19th November 2025",
    time: "2:00 PM",
    title: "Lunch",
    icon: <MdDinnerDining className="w-8 h-8 text-rose-600" />,
    image: "/images/event9.png",
    
  },
  {
    date: "22th November 2025",
    time: "5:00 PM",
    title: "Engagement Ceremony",
    icon: <GiDiamondRing className="w-8 h-8 text-rose-600" />,
    image: "/images/event1.png",
    
  },
  {
    date: "22th November 2025",
    time: "11:00 AM",
    title: "Haldi & Mehendi",
    icon: <GiCampfire className="w-8 h-8 text-yellow-600" />,
    image: "/images/event2.png",
    
  },
  {
    date: "23th November 2025",
    time: "4:00 PM",
    title: "WELCOME CEREMONY",
    icon: <GiMusicalNotes className="w-8 h-8 text-indigo-600" />,
    image: "/images/event3.png",
    
  },
  {
    date: "23th November 2025",
    time: "6:00 PM",
    title: "wedding vows",
    icon: <GiCampfire className="w-8 h-8 text-orange-600" />,
    image: "/images/event4.png",
    
  },
  {
    date: "23th November 2025",
    time: "8:00 PM",
    title: "Dinner",
    icon: <MdDinnerDining className="w-8 h-8 text-indigo-600" />,
    image: "/images/event5.png",
    
  },
  {
    date: "23th November 2025",
    time: "9:00 PM",
    title: "Reception Night",
    icon: <GiGlassCelebration className="w-8 h-8 text-emerald-600" />,
    image: "/images/event6.png",
    
  },
  {
    date: "24th December 2025",
    time: "Morning",
    title: "Tearful Eyes (Bidaai)",
    icon: <FaRegFaceSadTear className="w-8 h-8 text-gray-600" />,
    image: "/images/event7.png",
    
  },
];

const Program = () => {
  return (
    <section
      className="relative py-20 px-4 md:px-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/program-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="flex justify-center items-center gap-3 mb-14 relative">
          <Image
            src="/images/ring.png"
            alt="Program Rings"
            width={80}
            height={80}
            className="opacity-60 absolute left-0 animate-pulse"
            data-aos="fade-right"
          />
          <h2
            data-aos="fade-left"
            className="text-5xl md:text-6xl  font-bold text-gray-800 tracking-wide"
          >
            WEDDING EVENTS
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {programData.map((event, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="relative bg-white/80 backdrop-blur-md shadow-lg rounded-3xl overflow-hidden w-full max-w-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Icon overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 p-3 rounded-full shadow-lg">
                  {event.icon}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 text-center">
                <p className="text-gray-600 text-sm font-semibold uppercase tracking-widest mb-1">
                  {event.date}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 heading">
                  {event.title}
                </h3>
                <p className="text-gray-700 text-lg font-medium mb-1">
                  {event.time}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
