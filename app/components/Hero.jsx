
import React from "react";

const Hero = () => {
  return (  
    
    <section
      className="relative w-full h-[120vh] bg-cover bg-center bg-bg-primary"
      style={{
        backgroundImage: "url('/images/img1.jpg')",
        backgroundPosition: "contain",
      }}
    >
      {/* Gradient overlay on background */}
      <div className="absolute inset-0 bg-bg-overlay"></div>



      {/* Foreground image container */}
      <div className="absolute h-full inset-0 flex items-center justify-center">
        <div className="relative w-md h-full">

          <div className="relative w-full h-[120vh] overflow-hidden">
              <video
    src="/images/bg.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="w-full h-full object-cover pointer-events-none select-none [transform:translateZ(0)]"
  />

            {/* 🔮 Vignette effect overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.6))]"></div>
          </div>

          <div className="absolute bottom-0 w-full py-4 text-center px-6 bg-bg-overlay z-20">
        {/* <div className="w-full flex flex-col justify-center items-center">
          <Image src={'/images/divider.png'} width={500} height={100} alt="divider"/>
        <p className="text-center text-4xl font-bold text my-auto">निमंत्रण</p>
          <Image src={'/images/divider.png'} width={500} height={100} alt="divider" className="rotate-180"/>

        </div> */}

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
              >Brij</span>{" "}
              <span className="text-accent drop-shadow-[0_0_12px_var(--color-accent)]">
                &
                  </span>{" "}
             <span
              data-aos='fade-left'> Rishika</span>
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
                <span className="px-4 text-xl md:text-2xl text-white font-serif tracking-widest uppercase drop-shadow-sm">
                  Nov
                </span>
                <div className="flex-grow h-px bg-white opacity-50"></div>
              </div>
              <div className="flex w-full justify-between items-center">
                <p
                //  data-aos="fade-right" data-aos-delay="800" 
                 className="heading">SATURDAY</p>
                {/* Main Day Number */}
                <span 
                // data-aos="zoom-in"
                //   data-aos-delay="900" 
                  className="text-6xl md:text-8xl  heading text-accent drop-shadow-lg">
                  29
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
                  className="px-4 text-xl md:text-2xl text-white font-serif tracking-widest uppercase drop-shadow-sm">
                  2025
                </span>
                <div className="flex-grow h-px bg-white opacity-50"></div>
              </div>


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
