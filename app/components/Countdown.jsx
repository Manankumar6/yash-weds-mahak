"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();
            if (difference <= 0)
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!mounted) return null;

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1200"
            style={{
                backgroundImage: "url(/images/ring-bg.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="relative py-12 px-4 md:px-6"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Main content */}
            <div className="relative z-10 bg-white/90 p-6 sm:p-10 rounded-2xl max-w-2xl mx-auto">
                <h2 className="text-5xl font-light text-gray-900  text-left">
                    The Countdown
                </h2>
                <p className="text-md heading  text-gray-700 mb-6 ms-10 relative bottom-2 text-left">
                    to forever has begun...
                </p>

                {/* Countdown boxes */}
                <div className="flex flex-wrap justify-center  gap-3 sm:gap-6 md:gap-10 mb-8">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes },
                        { label: "Seconds", value: timeLeft.seconds },
                    ].map((item, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                            className="flex flex-col items-center bg-white/40 backdrop-blur-md  sm:px-5 py-2 sm:py-3 rounded-2xl shadow-md min-w-[100px] sm:min-w-[80px]"
                        >
                            <span className="text-4xl  font-bold text-accent drop-shadow-lg">
                                {String(item.value).padStart(2, "0")}
                            </span>
                            <span className="text-md sm:text-sm md:text-base mt-1 font-light text-gray-800">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Heart + Ring images */}
                <div className="relative w-full max-w-xs sm:max-w-sm mx-auto mb-6">
                    <Image
                        width={300}
                        height={400}
                        src="/images/heart.png"
                        className="w-full h-auto mix-blend-multiply opacity-20"
                        alt="Heart"
                      
                    />
                    <Image
                        width={200}
                        height={200}
                        src="/images/ring.png"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        alt="Ring"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                    />
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                        className="text-5xl md:text-7xl text-center absolute -translate-x-1/2 -translate-y-1/2 top-[74%]  left-1/2 w-full px-5 mx-auto">We can't wait to celebrate with you!</p>
                        
                </div>
   <Image
                    src={'/images/blue-flower.png'}
                    width={200}
                    height={100}
                    className="absolute right-0 bottom-0 z-90 rotate-180"
                    alt="flower"
            
                    />

            </div>
           
        </div>
    );
};

export default Countdown;
