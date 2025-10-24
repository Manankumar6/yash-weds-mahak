"use client";
import React from "react";
import { venueData } from "../data/coupleData";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Venue = () => {
    return (
        <section

            style={{
                backgroundImage: `url(${venueData.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative py-16 px-4 md:px-8 h-[100vh] my-auto "
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main content */}
            <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="relative  items-center justify-center flex top-1/2  -translate-y-1/2  rounded-t-full max-w-xl h-[90%] md:h-[90vh] mx-auto bg-white/60 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-12 pt-20 text-center space-y-4">
                <div className=" space-y-10">
                    <div
                        data-aos="fade-down"
                        data-aos-delay="300"
                        className="flex justify-center items-center heading gap-2"
                    >
                        <Image
                            src={"/images/venue.png"}
                            width={80}
                            height={80}
                            alt="venue image"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        />
                        <h2 className="text-3xl    font-semibold text-gray-900">
                            {venueData.title}
                        </h2>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="flex flex-col sm:flex-row text-base sm:text-lg  heading justify-center gap-3 sm:gap-6 text-gray-700"
                    >
                        <p>
                            <span className="font-semibold">Date:</span> {venueData.date}
                        </p>
                        <p>
                            <span className="font-semibold">Time:</span> {venueData.time}
                        </p>
                    </div>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="text-lg sm:text-xl  heading font-semibold text-gray-700"
                    >
                        {venueData.venueName}
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="text-sm sm:text-base  font-bold heading text-gray-600 max-w-md"
                    >
                        {venueData.address}
                    </p>


                    <Link
                        href={venueData.mapLink}
                        target="_blank"
                        className="inline-flex heading items-center justify-center gap-2 bg-accent/90 hover:bg-accent text-white font-medium py-3 px-6 rounded-full transition-all mt-6"
                    >
                        <FiMapPin className="w-5 h-5" />
                        View on Google Map
                    </Link>
                    <Image
                        src={'/images/pink-flower.png'}
                        width={250}
                        height={150}
                        className="absolute right-0 bottom-0 -z-10 opacity-70 "
                        alt="flower"

                    />
                </div>
            </div>
        </section>
    );
};

export default Venue;
