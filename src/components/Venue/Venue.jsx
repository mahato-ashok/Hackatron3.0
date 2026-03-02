import stars from "../../assets/images/discord/stars.svg";
import React, { useState, useEffect } from "react";

const Venue = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      setBgPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="venue"
      className="relative pt-[40px] md:pt-[90px] px-5 overflow-hidden"
    // style={{
    //   backgroundImage: `url(${stars})`,
    //   backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
    //   backgroundSize: "cover",
    // }}
    >
      <div className="relative text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">


        <h1 className="py-6 text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
          $ find <span className="text-white">DESTINATION</span>.txt
        </h1>

        <div className="grid xl:grid-cols-2 gap-12 px-4 sm:p-10">

          <div className="space-y-8">

            <div className="group flex gap-6 items-start border-[6px] max-lg:border-4 border-dashed border-[#7f7cff] bg-[#050826]/30 backdrop-blur-[1px] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_45px_rgba(127,124,255,0.45)] hover:-translate-y-1">
              <img
                src="/images/Venue.png"
                alt="Venue"
                className="w-16 h-16 md:w-20 md:h-20 pixelated"
              />
              <div>
                <h2 className="text-pink-400 text-2xl md:text-3xl xl:text-4xl tracking-wide mb-2">
                  Venue
                </h2>
                <p className="text-gray-200 text-lg md:text-xl xl:text-2xl leading-relaxed">
                  BIT Sindri Campus
                  <br />
                  Dhanbad, Jharkhand
                </p>
              </div>
            </div>

            <div className="group flex gap-6 items-start border-[6px] max-lg:border-4 border-dashed border-[#0384fc] bg-[#050826]/30 backdrop-blur-[1px] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_45px_rgba(3,132,252,0.45)] hover:-translate-y-1">
              <img
                src="/images/Date.png"
                alt="Date & Time"
                className="w-16 h-16 md:w-20 md:h-20 pixelated"
              />
              <div>
                <h2 className="text-pink-400 text-2xl md:text-3xl xl:text-4xl tracking-wide mb-2">
                  Date & Time
                </h2>
                <p className="text-gray-200 text-lg md:text-xl xl:text-2xl leading-relaxed">
                  4th – 5th April 2026
                  <br />
                  8:00 AM onwards
                </p>
              </div>
            </div>

            <div className="group flex gap-6 items-start border-[6px] max-lg:border-4 border-dashed border-purple bg-[#050826]/30 backdrop-blur-[1px] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_45px_rgba(168,85,247,0.45)] hover:-translate-y-1">
              <img
                src="/images/Join.png"
                alt="Why Join"
                className="w-16 h-16 md:w-20 md:h-20 pixelated"
              />
              <div>
                <h2 className="text-pink-400 text-2xl md:text-3xl xl:text-4xl tracking-wide mb-2">
                  Why Join?
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200 text-lg md:text-xl xl:text-2xl">
                  <li>•Epic rewards</li>
                  <li>• Free meals & stay</li>
                  <li>•Create & collaborate</li>
                  <li>• Build & connect</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative group border-[6px] max-lg:border-4 border-dashed border-[#7f7cff] bg-[#050826]/60 backdrop-blur-sm overflow-hidden hover:shadow-[0_0_55px_rgba(127,124,255,0.4)] transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4411.211609121802!2d86.47110607595549!3d23.654634192444913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f696e95958a6d5%3A0x7c14e668e6f2feea!2sBIT%20Sindri!5e1!3m2!1sen!2sin!4v1739475546501!5m2!1sen!2sin"
              className="w-full h-[320px] md:h-[420px] xl:h-full transition duration-500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Venue;