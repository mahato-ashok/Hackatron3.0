import React, { useState, useEffect } from "react";
import head from "/images/head.webp";
import HomeMascot1 from "/images/HomeMascot.gif";
import HomeMascotStatic from "/images/HomeMascot_static.webp";
import DevfolioLogo from "../assets/images/LandingPage/DevfolioLogo.svg";
import TimerSection from "./TimerSection";
import ScrollButton from "../assets/images/LandingPage/ScrollButton.svg";
import './LandingPage.css';


function LandingPage() {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setBgPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToTimer = () => {
    const scheduleSection = document.getElementById("timer");
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className=" h-full 3xl:h-[4000px] w-full flex flex-col text-center bg-transparent m-0"
        style={{
          backgroundPosition: `${50 + bgPosition.x}% ${20 + bgPosition.y}% `,
          backgroundSize: "cover",
          zIndex: "2"
        }}
      >
        {/* Hero section */}
        <section
          id="hero"
          className="relative w-full max-[540px]:mt-[70px] mt-[96px] 3xl:mt-[200px] min-h-[calc(100vh-96px)] flex flex-col items-center"
        >
          <h1 className="sr-only">Hackatron 3.0</h1>

          {/* Logo / Title */}
          <div className='head-container mt-2 md:mt-4'>
            <img loading="lazy"
              src={head}
              alt="Hackatron 3.0"
              className='imgHead-background'
              width="3057"
              height="460"
              fetchpriority="high"
              decoding="async"
            />
          </div>

          {/* Subtitle */}
          <h2 className="font-vt323 font-bold w-full px-2 text-center min-[320px]:text-[16px] min-[400px]:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl:text-[4.5vh] text-[#F0C36D] tracking-[0.1em] sm:tracking-[0.2em] hover:scale-105 transition-transform duration-300 drop-shadow-lg mt-0 leading-tight">
            DESIGN. DEBUG. DEPLOY.
          </h2>

          {/* Mascot — centered prominently */}
          <div className="home-mascot cursor-pointer hover:scale-105 transition-transform duration-500 mt-2 md:mt-0">
            <img loading="lazy"
              src={/bot|googlebot|crawler|spider|robot|crawling|lighthouse|chrome-lighthouse/i.test(navigator.userAgent) ? HomeMascotStatic : HomeMascot1}
              alt="Hackatron Mascot"
              className="home-mascot-img"
              width="713"
              height="1054"
              fetchpriority="high"
            />
          </div>

          {/* Apply with Devfolio button — centered below mascot */}
          <button
            className="devfolio-btn -mt-8 md:-mt-12 z-10 relative"
            onClick={() => window.open("https://hackatron3.devfolio.co/")}
          >
            <img loading="lazy" src={DevfolioLogo} alt="Devfolio Logo" />
            <span>Apply with Devfolio</span>
          </button>

          {/* Description */}
          <p className="font-vt323 text-[#D8C39A] text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[2.5vh] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] leading-snug text-center mt-4 mb-6 px-2">
            Boot up your brilliance at Hackatron 3.0, a 36-hour code sprint built for creators and boundary-pushers. Explore diverse tech tracks, design bold solutions, and build real prototypes with fellow geeks. Break limits, spark innovation, and turn caffeine into commits.
          </p>

          {/* Scroll button */}
          <button className="animate-bounce mb-4 3xl:w-[5%]">
            <a href="#timer" onClick={(e) => { e.preventDefault(); scrollToTimer(); }} aria-label="Scroll down to timer">
              <img loading="lazy"
                src={ScrollButton}
                alt="Scroll Down"
                className="w-12 md:w-14 xl:w-16 mx-auto"
                width="30"
                height="50"
              />
            </a>
          </button>
        </section>


        {/* Timer section  */}
        <section id="timer" className="max-[768px]:pt-[40px] pt-[60px] mt-2">
          <TimerSection />
        </section>




        {/* Schedule section */}
        {/* <section id="schedule" className="max-[768px]:pt-[10px] pt-[60px] "></section>
        <Schedule /> */}
      </div>
    </>
  );
}

export default LandingPage;
