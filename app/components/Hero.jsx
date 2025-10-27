
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (

    <section
      className="relative w-full h-[120vh] bg-cover bg-center bg-bg-primary"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674235766088-80d8410f9523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000')",
        backgroundPosition: "contain",
      }}
    >
      {/* Gradient overlay on background */}
      <div className="absolute inset-0 bg-black/40"></div>



      {/* Foreground image container */}
      <div className="absolute h-full inset-0 flex items-center justify-center">
        <div className="relative w-md h-full">

          <div className="relative w-full h-[120vh] overflow-hidden">
            <Image
    src="/images/bg-main.jpg" // 🔄 replace with your actual image path
    alt="Wedding Background"
    fill
    priority
    className="object-cover pointer-events-none select-none [transform:translateZ(0)]"
  />

            {/* 🔮 Vignette effect overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.6))]"></div>
          </div>

          <div className="absolute bottom-0 w-full py-4 text-center px-6 bg-bg-overlay z-20">
         

            <p
              // data-aos="fade-up"
              // data-aos-delay="100"
              className="mt-3 text-text-secondary text-xl mb-1 font-light heading  drop-shadow-sm">
              Together with their families
            </p>
            <h1
              // data-aos="zoom-in"
              // data-aos-delay="300"
              className={`
                text-5xl md:text-6xl font-normal text-text-primary 
                drop-shadow-[0_0_8px_var(--color-glow)]
              `}
            >
              <span
                data-aos='fade-right'
              >Yash</span>{" "}
              <span className="text-accent drop-shadow-[0_0_12px_var(--color-accent)]">
                &
              </span>{" "}
              <span
                data-aos='fade-left'> Mahak</span>
            </h1>
            <p
              // data-aos="fade-up"
              // data-aos-delay="500"
              className="mt-3 text-text-secondary text-xl mb-1 font-light heading  drop-shadow-sm">
              invite you <br />

              to their wedding celebration
            </p>
            <div
              // data-aos="fade-up"
              // data-aos-delay="700"
              className="relative w-full max-w-sm mx-auto flex flex-col items-center justify-center py-8 px-4">
              {/* Month with lines */}
              <div className="flex items-end w-full justify-center">
                <div className="flex-grow h-px bg-white opacity-50"></div>
                <span className="px-4 text-xl md:text-2xl text-black font-serif tracking-widest uppercase drop-shadow-sm">
                  Nov
                </span>
                <div className="flex-grow h-px bg-white opacity-50"></div>
              </div>
              <div className="flex w-full justify-between items-center">
                <p
                  //  data-aos="fade-right" data-aos-delay="800" 
                  className="heading">SUNDAY</p>
                {/* Main Day Number */}
                <span
                  // data-aos="zoom-in"
                  //   data-aos-delay="900" 
                  className="text-6xl md:text-8xl  heading text-accent drop-shadow-lg">
                  23
                </span>
                <p
                  // data-aos="fade-left" data-aos-delay="800"
                  className="heading">AT 8:00 PM</p>
              </div>

              {/* Year */}
              <div className="flex items-top w-full justify-center">
                <div className="flex-grow h-px bg-white opacity-50"></div>
                <span
                  // data-aos="fade-up"
                  // data-aos-delay="1000"
                  className="px-4 text-xl md:text-2xl text-black font-serif tracking-widest uppercase drop-shadow-sm">
                  2025
                </span>
                <div className="flex-grow h-px bg-white opacity-50"></div>
              </div>
              <p
                // data-aos="fade-up"
                // data-aos-delay="500"
                className="mt-3 text-text-secondary text-xl mb-1 font-light heading  drop-shadow-sm">
                Awaiting Your Presence Jain (Goyal) Family
              </p>

            </div>

            <button
              // data-aos="fade-up"
              // data-aos-delay="1100"
              className="font-bold px-8 py-3 bg-accent text-white text-lg rounded-full shadow-md hover:opacity-90 transition">
              Save the Date
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
