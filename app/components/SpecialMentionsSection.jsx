"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPartyPopper, GiChainedHeart, GiLotusFlower, } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";

const SpecialMentionsSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-rose-50 to-pink-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-rose-600 py-4">
          Special Mentions
        </h2>

        {/* 🌸 Special Request */}
        <div
          data-aos="fade-up"
          className="mt-10 relative rounded-2xl shadow-md overflow-hidden"
          style={{
            backgroundImage: "url('/images/relative-bg.png')", // ✅ your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[0.5px]"></div>

          {/* Content */}
          <div className="relative p-6 md:p-10 text-center">
            <GiChainedHeart className="w-10 h-10 mx-auto text-rose-500 mb-3" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Special Request</h3>

            <p className="text-gray-700 heading italic max-w-2xl mx-auto">
              “Your gracious presence and heartfelt blessings are the most cherished gifts of all.”
            </p>

            <p className="text-lg font-semibold text-gray-800 mt-3 leading-relaxed">
              — Madhu, Baburam<br />
              — Ritu, Manoj<br />
              — Uma , Ankit
            </p>
          </div>
        </div>


        {/* 💐 Welcome By / Bowdown To / RSVP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Welcome By */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6"
          >
            <GiPartyPopper className="w-10 h-10 text-pink-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">Welcome By</h3>
            <p className="text-gray-600 heading italic max-w-2xl mx-auto mb-4">
              “With open hearts and warm smiles, we welcome you to share in our joyous celebration.”
            </p>
            <p className="text-gray-600 mt-2 text-lg">
              — Mr.Sanjeev Mittal (Fufa ji) & Mrs. Neetu Mittal (Bua) <br />
              Ishan Jain <br />
              Ashish Jain
            </p>
          </div> */}

          {/* Bowdown To */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6"
          >
            <GiLotusFlower className="w-10 h-10 text-rose-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-800">Bowdown To</h3>
            <p className="text-gray-600 font-serif font-bold mt-2 text-lg">
              Punit, Shayam, Ansh, Kunal, Prachi, Tanvi, Rudraksha
            </p>
          </div>

          {/* RSVP */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6"
          >
            <div className="max-w-5xl mx-auto px-4">
              {/* 🌸 Section Heading */}
              <MdBusiness className="w-10 h-10 mx-auto text-rose-600 mb-3" />
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-rose-400 to-rose-700 mb-2">
                Contact Details
              </h3>
              <p className="text-gray-600 italic mb-10 heading">
                “With heartfelt gratitude to our well-wishers and supporters who made this celebration possible.”
              </p>

              {/* 👥 Names */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Govind Sharma</h4>
                <h4 className="text-xl font-semibold text-gray-800">Laxmi Sharma</h4>
              </div>

              {/* 🏢 Firm & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
               
                <div className="bg-white/70 shadow-md p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-all sm:col-span-2">
                  
                  <div className="flex items-center text-gray-700 mt-1">
                    <FaPhoneAlt className="text-rose-500 mr-2" />
                    <span>+91 7668117319</span>
                  </div>
                </div>
                <div className="bg-white/70 shadow-md p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-all sm:col-span-2">
                  
                  <div className="flex items-center text-gray-700 mt-1">
                    <FaPhoneAlt className="text-rose-500 mr-2" />
                    <span>+91 9258001986</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏢 Firm / Contact Details */}
        {/* <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-10"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Family & Contact</h3>
          <p className="text-gray-600 mb-2">💼 Firm: <span className="font-medium">Bansal Jewellers Pvt. Ltd.</span></p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600">
            <p className="flex items-center gap-2">
              <FaPhoneSquareAlt /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelopeOpen /> info@bansaljewellers.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Agra, Uttar Pradesh
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SpecialMentionsSection;
