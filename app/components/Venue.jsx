"use client";
import React from "react";
import { venueData } from "../data/coupleData";
import { FiMapPin, FiCalendar, FiClock } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Venue = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${venueData.backgroundImage})` }}
    >
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div
        data-aos="fade-up"
        className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-[2rem] shadow-2xl overflow-hidden border border-white/20"
      >
        {/* Decorative Flower Top Left */}
        <Image
          src="/images/pink-flower.png"
          width={150}
          height={100}
          className="absolute top-0 left-0 rotate-180 opacity-40 select-none pointer-events-none"
          alt="decoration"
        />

        <div className="p-8 md:p-14 flex flex-col items-center text-center space-y-8">
          {/* Header Icon & Title */}
          <div className="space-y-4">
            <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/images/venue.png"
                width={48}
                height={48}
                alt="Venue icon"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
              {venueData.title}
            </h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto rounded-full" />
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <div className="flex items-center justify-center gap-3 bg-white/50 p-4 rounded-xl shadow-sm">
              <FiCalendar className="text-accent text-xl" />
              <div className="text-left ">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Date</p>
                <p className="text-gray-800 font-medium">{venueData.date}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/50 p-4 rounded-xl shadow-sm">
              <FiClock className="text-accent text-xl" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Time</p>
                <p className="text-gray-800 font-medium">{venueData.time}</p>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-800 italic">
              {venueData.venueName}
            </h3>
            <p className="text-gray-600 leading-relaxed heading max-w-sm mx-auto">
              {venueData.address}
            </p>
          </div>

          {/* Map */}
          <div className="mt-8 w-full rounded-lg overflow-hidden border border-amber-600/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.2270371895665!2d77.9583387!3d27.180600199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477e91bc7134f%3A0x3a08e9caf275cb3e!2sParadise%20Garden!5e0!3m2!1sen!2sin!4v1768537530690!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          {/* Action Button */}
          <Link
            href={venueData.mapLink}
            target="_blank"
            className="group relative inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-accent text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/40"
          >
            <FiMapPin className="text-xl group-hover:animate-bounce" />
            <span>Open in Google Maps</span>
          </Link>
        </div>

        {/* Decorative Flower Bottom Right */}
        <Image
          src="/images/pink-flower.png"
          width={200}
          height={120}
          className="absolute bottom-0 -z-10 right-0 opacity-60 select-none pointer-events-none"
          alt="decoration"
        />
      </div>
    </section>
  );
};

export default Venue;