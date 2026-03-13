// What is Hackatron -> WIHTS
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { infoConfig } from "../../info/info.js";
import stars from "../../assets/images/discord/stars.svg";
import Wihts from "/images/Wihts.webp";
import Wihts1 from "/images/Wihts1.webp";
import './Wihts.css'

const Whits = () => {
  const { wihts } = infoConfig;
  const { Hackathon } = infoConfig;

  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
      const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
      setBgPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <section
      id="about"
      className="pt-[30px] md:pt-[80px] relative px-5 bg-no-repeat bg-cover"
    //  style={{
    //                 backgroundImage: `url(${stars})`,
    //                 backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
    //                 backgroundSize: 'cover',
    //             }}
    >
      <div className="text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">


        <h2 className="py-6 text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
          $ man --intro <span className="text-white">HACKATRON</span>
        </h2>


        <div className="flex justify-center">
          <div className="w-full px-4 sm:p-10">

            <div
              className="
    relative
    border-[6px] max-lg:border-4
    border-dashed border-[#7f7cff]
    p-6 md:p-10
    backdrop-blur-[2px]
    shadow-[0_0_25px_rgba(127,124,255,0.25)]
    text-center
    overflow-visible
  "
            >

              <img loading="lazy"
                src={Wihts}
                alt="What is Hackatron decoration"
                className="wihts-pixel wihts-pixel--top-left"
              />

              <img loading="lazy"
                src={Wihts1}
                alt="Hackatron arcade"
                className="wihts-arcade"
              />


              <h3 className="
  text-3xl
  md:text-4xl
  lg:text-5xl
  text-pink-400
  tracking-wide
  mb-6
  text-center
  drop-shadow-[0_0_10px_rgba(255,92,168,0.9)]
">
                WHAT IS HACKATRON ?
              </h3>

              <div className="
  space-y-6
  text-gray-200
  text-lg
  md:text-xl
  lg:text-3xl
  leading-relaxed
">
                {wihts.map((d) => (
                  <p key={d.id}>{d.data}</p>
                ))}

                <p>
                  {Hackathon.data}
                  <Link
                    target="_blank"
                    to={Hackathon.link}
                    className="text-cyan-400  ml-1"
                  >
                    here...
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Whits;