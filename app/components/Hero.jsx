import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1674235766088-80d8410f9523')",
      }}
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md mx-auto overflow-hidden  shadow-2xl">
        {/* Foreground Image */}
         <div className="relative w-full h-[120vh] overflow-hidden">
            <video
              src="/images/bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* 🔮 Vignette effect overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.6))]"></div>
          </div>
       

        {/* Content */}
        <div className="relative bg-bg-overlay backdrop-blur-md px-6 py-8 text-center">
          <p className="text-sm uppercase tracking-widest  font-semibold">
            Together with their families
          </p>

          <h1
            className="
              mt-3 text-3xl md:text-4xl font-bold heading  text-text-primary
              drop-shadow-md
            "
          >
            <span data-aos="fade-right">Manan</span>{" "}
            <span className="text-accent mx-1">&</span>{" "}
            <span data-aos="fade-left">Shivani</span>
          </h1>

          <p className="mt-3 text-lg md:text-base  font-light leading-relaxed">
            invite you to celebrate their wedding
          </p>

          {/* Date Section */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-full bg-accent/50"></span>
              <span className="text-sm tracking-[0.3em] font-serif">
                FEB
              </span>
              <span className="h-px w-full bg-accent/50"></span>
            </div>

            <div className="flex items-center justify-evenly px-4">
              <span className="text-xs tracking-widest font-light">
                THURSDAY
              </span>
              <span className="text-6xl font-serif text-accent">
                12
              </span>
              <span className="text-xs tracking-widest font-light">
                8:00 PM
              </span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-full bg-accent/50"></span>
              <span className="text-sm tracking-[0.3em] font-serif">
                2026
              </span>
              <span className="h-px w-full bg-accent/50"></span>
            </div>
          </div>

          {/* Button */}
          <button
            className="
              mt-6 px-8 py-3 rounded-full
              border border-accent text-accent
              tracking-wide uppercase text-sm
              hover:bg-accent hover:text-white
              transition-all duration-300
            "
          >
            Save the Date
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
