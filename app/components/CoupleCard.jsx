import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
const CoupleCard = ({ index, name, profession, image, instagram, role, sonOf, grandsonOf }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 200} // staggered animation
      data-aos-duration="1000"
      className="relative w-full max-w-sm mx-auto overflow-hidden shadow-2xl rounded-2xl"
    >
      {/* Background Image */}
      <div className="relative w-full h-96" data-aos="zoom-in">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>

      {/* Overlay Box */}
      <div
        data-aos="zoom-in"
        data-aos-delay={index * 200 + 300}
        className="rounded-xl bg-white/30 backdrop-blur-md p-4 flex flex-col items-center text-center space-y-1"
      >
        {/* Role Line */}
        <div
          data-aos="fade-right"
          data-aos-delay={index * 200 + 400}
          className="flex items-center space-x-4 w-full justify-center"
        >
          <div className="flex-grow h-px bg-black opacity-50"></div>
          <h2 className="text-md heading font-semibold text-gray-900 drop-shadow-lg uppercase tracking-wide">
            {role}
          </h2>
          <div className="flex-grow h-px bg-black opacity-50"></div>
        </div>

        {/* Name */}
        <h2
          data-aos="zoom-in-up"
          data-aos-delay={index * 200 + 500}
          className="text-4xl font-semibold text-gray-900 drop-shadow-lg"
        >
          {name}
        </h2>
        {/* Grandson / Granddaughter of */}
        {(grandsonOf) && (
          <p
            data-aos="fade-up"
            data-aos-delay={index * 200 + 700}
            className="text-sm md:text-base text-text-secondary italic mb-1 heading"
          >
            {grandsonOf}
          </p>
        )}
        {/* Son of */}
        <p
          data-aos="fade-up"
          data-aos-delay={index * 200 + 600}
          className="text-sm md:text-base text-text-secondary italic mb-1 heading"
        >
          {sonOf}
        </p>

        {/* Profession */}
        {profession && (
          <p
            data-aos="fade-up"
            data-aos-delay={index * 200 + 700}
            className="text-gray-800 text-lg drop-shadow-sm"
          >
            {profession}
          </p>
        )}

        {/* Instagram Link */}
        {instagram && (
          <a
            data-aos="fade-up"
            data-aos-delay={index * 200 + 800}
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-2 border flex items-center border-gray-400 text-black heading rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-300"
          >
            <FaInstagram className="size-4 me-3" /> Instagram
          </a>
        )}
      </div>
    </div>
  );
};

export default CoupleCard;
