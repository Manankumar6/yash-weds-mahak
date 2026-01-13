import React from "react";
import { FaInstagram } from "react-icons/fa";

const CoupleCard = ({ index, name, profession, image, instagram, role, sonOf, grandsonOf }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 200}
      className="relative w-full max-w-[340px] mx-auto mb-20"
    >
      {/* 1. Main Image Container with a "Polaroid-Luxury" Frame */}
      <div className="relative group overflow-hidden bg-stone-100 p-2 pb-12 shadow-xl border border-stone-200">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          {/* Subtle Golden Gradient Overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
        </div>

        {/* 2. Floating Elegant Role Label */}
        <div className="absolute top-6 left-[-10px] bg-[#C5A358] text-white px-6 py-1 text-[10px] tracking-[0.3em] uppercase shadow-lg">
          {role}
        </div>
      </div>

      {/* 3. The Content Box (Intentional Overlap) */}
      <div 
        className="relative -mt-16 mx-4 z-20 bg-white p-6 shadow-2xl border-t-2 border-[#C5A358] text-center"
        data-aos="fade-up"
        data-aos-delay={index * 200 + 300}
      >
        {/* Name with Serif Styling */}
        <h2 className="text-3xl heading italic text-stone-800 leading-tight">
          {name}
        </h2>

        {/* Profession - Minimalist */}
        {profession && (
          <p className="text-[10px] uppercase  tracking-widest text-[#C5A358] font-bold mt-1 mb-4">
            {profession}
          </p>
        )}

        {/* Family Details - Elegant Spacing */}
        <div className="space-y-1 text-stone-500 text-sm italic font-light border-t border-stone-100 pt-4">
          {grandsonOf && (
            <p className="leading-tight">
              <span className="text-[10px] uppercase not-italic block text-stone-400 tracking-tighter">Grandchild of</span>
              {grandsonOf}
            </p>
          )}
          {sonOf && (
            <p className="leading-tight pt-2">
              <span className="text-[10px] uppercase not-italic block text-stone-400 tracking-tighter">Child of</span>
              {sonOf}
            </p>
          )}
        </div>

        {/* 4. Minimal Instagram Icon Button */}
        {instagram && (
          <div className="mt-6 flex justify-center">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-800 hover:text-[#C5A358] transition-colors duration-300"
            >
              <FaInstagram className="text-lg" />
              <span className="text-[10px] uppercase tracking-widest font-semibold border-b border-stone-800">
                Follow Journey
              </span>
            </a>
          </div>
        )}
      </div>

      {/* 5. Abstract Background Element for Premium Texture */}
      <div className="absolute -bottom-6 -right-4 w-24 h-24 bg-stone-200/50 -z-10 rounded-full blur-2xl"></div>
    </div>
  );
};

export default CoupleCard;