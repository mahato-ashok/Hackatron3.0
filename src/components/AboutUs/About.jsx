import React, { useState, useEffect } from 'react';
import { infoConfig } from "../../info/info.js";
import stars from "../../assets/images/discord/stars.svg";
import aboutPixel from "/images/AboutUs.png";
import aboutPixel2 from "/images/AboutUs1.png";
import './About.css';

const About = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setBgPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { about } = infoConfig;

  return (
    <section
      id="aboutus"
      className="pt-[30px] md:pt-[80px] relative px-5 bg-no-repeat bg-cover"
      // style={{
      //   backgroundImage: `url(${stars})`,
      //   backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
      //   backgroundSize: 'cover',
      // }}
    >
      <div className="text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">

        <h1 className="py-6 text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
          $ whoami --<span className="text-white">ABOUT_US</span>.
        </h1>

        <div className="flex justify-center">
          <div className="w-full px-4 sm:p-10">
            <div
              className="about-card
                relative
                border-[6px] max-lg:border-4
                border-dashed border-[#7f7cff]
                p-6 md:p-10
                text-center
                backdrop-blur-[2px]
                shadow-[0_0_25px_rgba(127,124,255,0.25)]
                animate-borderGlow
                overflow-visible
              "
            >
            
              <img
                src={aboutPixel2}
                alt="pixel decoration"
                className="about-pixel about-pixel--top-left"
              />

              <img
                src={aboutPixel}
                alt="pixel decoration"
                className="about-pixel about-pixel--bottom-right"
              />

              <h2 className="
  text-3xl
  md:text-4xl
  lg:text-5xl
  text-pink-400
  tracking-wide
  mb-6
  drop-shadow-[0_0_10px_rgba(255,92,168,0.9)]
">
                ABOUT US
              </h2>

              <div className="
  space-y-6
  text-gray-200
  text-lg
  md:text-xl
  lg:text-3xl
  leading-relaxed
">
                {about.map((d) => (
                  <p key={d.id}>{d.data}</p>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

