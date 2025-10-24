"use client";
import Image from "next/image";
import React from "react";

export default function AttendSection() {
    return (
        <section
            style={{
                backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/007/565/369/large_2x/watercolor-floral-background-with-brush-and-floral-frame-for-horizontal-banner-backdrop-wedding-invitation-thank-you-card-wallpaper-free-photo.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">


            {/* 🩵 Soft overlay */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

            {/* 💌 Content */}
            <div className="relative z-10 max-w-2xl px-6 py-16">
                <h2 className="text-3xl md:text-5xl font-[Playfair_Display] italic text-gray-800 mb-6">
                    We request the honor of your presence
                </h2>

                <p className="text-gray-700 text-xl  font-light leading-relaxed mb-10">
                    Your love, laughter, and blessings mean the world to us.
                    Please join us as we begin our new journey together and
                    make this day truly memorable with your presence.
                </p>

                {/* 🌿 Decorative Divider */}
                <div className="flex justify-center ">
                    <img
                        src="https://images.vexels.com/media/users/3/135786/isolated/preview/a761c2a6d4fe4a9f2506fe4fa00b45b2-decorative-floral-divider.png"
                        alt="Floral Divider"
                        className="opacity-80 w-40 md:w-56 h-auto object-contain"
                    />
                </div>


                {/* 💕 Button */}
                <button className="bg-black text-white text-lg md:text-xl font-semibold px-10 py-3 rounded-full hover:bg-neutral-800 transition-all duration-300">
                    I’ll Be There
                </button>
            </div>
        </section>
    );
}
