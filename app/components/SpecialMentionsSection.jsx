"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiChainedHeart, GiLotusFlower } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";

const SpecialMentionsSection = () => {
  return (
    <section className="relative w-full bg-[#fffafa] py-20 px-4 md:px-12 overflow-hidden">
      {/* Subtle Background Accents */}
      <img
        src="/images/blue-flower.png"
        className="absolute top-0 left-0 w-40 opacity-20 -translate-x-10 -translate-y-10"
        alt=""
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">
            Special Mentions
          </h2>
          <div className="h-1 w-24 bg-rose-200 mx-auto rounded-full" />
        </div>

        {/* 🌸 Hero: Special Request Card */}
        <div
          data-aos="fade-up"
          className="relative rounded-[2.5rem] shadow-xl overflow-hidden mb-12 border border-rose-100"
        >
          {/* Background Image with optimized overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/relative-bg.png')" }}
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />

          <div className="relative p-8 md:p-14">
            <GiChainedHeart className="text-5xl text-rose-500 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4 italic">
              Special Request
            </h3>
            <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;Your gracious presence and heartfelt blessings are the most cherished gifts of all.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-800 font-bold tracking-wide">
              <span className="bg-rose-50 px-4 py-2 rounded-lg">— Madhu, Baburam</span>
              <span className="bg-rose-50 px-4 py-2 rounded-lg">— Ritu, Manoj</span>
              <span className="bg-rose-50 px-4 py-2 rounded-lg">— Uma, Ankit</span>
            </div>
          </div>
        </div>

        {/* 💐 Lower Grid: Mentions & Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Bowdown To */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-[2rem] shadow-lg p-8 md:p-12 border border-gray-50 flex flex-col items-center justify-center group"
          >
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GiLotusFlower className="text-4xl text-rose-600" />
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-4 uppercase tracking-widest">
              Bowdown To
            </h3>
            <p className="text-gray-600 text-lg leading-loose font-medium max-w-xs">
              Punit, Shayam, Ansh, Kunal, <br />
              Prachi, Tanvi, Rudraksha
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-[2rem] shadow-lg p-8 md:p-12 border border-gray-50 text-left"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-xl">
                <MdContactPhone className="text-3xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-gray-800">Contact Details</h3>
                <p className="text-sm text-gray-400 font-medium">For any assistance</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Person 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <span className="text-xl font-semibold text-gray-700">Govind Sharma</span>
                <a href="tel:+917668117319" className="flex items-center text-rose-500 font-bold hover:scale-105 transition-transform">
                  <FaPhoneAlt className="mr-2 text-sm" /> +91 7668117319
                </a>
              </div>

              {/* Person 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <span className="text-xl font-semibold text-gray-700">Laxmi Sharma</span>
                <a href="tel:+919258001986" className="flex items-center text-rose-500 font-bold hover:scale-105 transition-transform">
                  <FaPhoneAlt className="mr-2 text-sm" /> +91 9258001986
                </a>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-400 italic text-center">
              &ldquo;With heartfelt gratitude to our well-wishers.&rdquo;
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Decoration */}
      <img
        src="/images/blue-flower.png"
        className="absolute bottom-0 right-0 w-48 opacity-20 translate-x-12 translate-y-12 rotate-180"
        alt=""
      />
    </section>
  );
};

export default SpecialMentionsSection;