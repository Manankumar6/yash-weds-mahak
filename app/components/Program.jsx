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
    date: "10th February 2026",
    time: "11:00 AM",
    title: "Lagan Lekhni",
    icon: <FaScroll className="w-8 h-8 text-rose-600" />,
    image: "/images/event8.png",
    
  },
 
  {
    date: "11th February 2026",
    time: "11:00 AM",
    title: "Haldi & Mehendi",
    icon: <GiCampfire className="w-8 h-8 text-yellow-600" />,
    image: "/images/event2.png",
    
  },
   {
    date: "12th February 2026",
    time: "7:00 PM",
    title: "Dinner",
    icon: <MdDinnerDining className="w-8 h-8 text-indigo-600" />,
    image: "/images/event5.png",
    
  },
  {
    date: "12th February 2026",
    time: "8:00 PM",
    title: "Baraat Welcome",
    icon: <GiMusicalNotes className="w-8 h-8 text-indigo-600" />,
    image: "/images/event3.png",
    
  },
 
 
   {
    date: "13th February 2026",
    time: "Early Morning",
    title: "Wedding Vows",
    icon: <GiCampfire className="w-8 h-8 text-orange-600" />,
    image: "/images/event4.png",
    
  },
 
  {
    date: "13th December 2025",
    time: "Morning",
    title: "Tearful Eyes (Bidaai)",
    icon: <FaRegFaceSadTear className="w-8 h-8 text-gray-600" />,
    image: "/images/event7.png",
    
  },
];

const Program = () => {
  return (
  <section className="relative py-24 px-4 overflow-hidden">
      {/* Background with Parallax effect and subtle overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/program-bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center items-center gap-4 mb-2">
            <div className="h-[1px] w-12 bg-accent/40 hidden md:block" />
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm">
              The Celebration
            </span>
            <div className="h-[1px] w-12 bg-accent/40 hidden md:block" />
          </div>
          
          <h2 
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-serif text-gray-900 lowercase italic"
          >
            Wedding Events
          </h2>
          
          <Image
            src="/images/ring.png"
            alt="Rings"
            width={100}
            height={100}
            className="mx-auto opacity-20 animate-pulse duration-[3000ms]"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {programData.map((event, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative flex flex-col bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full p-3 overflow-hidden">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>

                {/* Floating Icon Box */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-accent w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center text-3xl transition-transform duration-500 group-hover:text-white">
                  {event.icon}
                </div>
              </div>

              {/* Content Box */}
              <div className="pt-10 pb-10 px-8 text-center flex flex-col items-center">
                <span className="inline-block px-4 py-1 rounded-full bg-accent/5 text-accent text-xs font-bold tracking-tighter uppercase mb-4">
                  {event.date}
                </span>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-serif">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  <p className="text-lg">{event.time}</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                </div>

                {/* Sub-description if needed */}
                <p className="mt-4 text-sm text-gray-400 line-clamp-2 heading max-w-[220px]">
                  Join us as we celebrate the beginning of our forever.
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
