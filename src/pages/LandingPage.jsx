import React, { useState, useEffect } from "react";
import BgLandingPage from "/images/bg.png";
import head from "/images/head.png";
import HomeMascot1 from "/images/HomeMascot.gif";
import DevfolioBtn from "/images/DevfolioBtn.svg";
import DevfolioLogo from "../assets/images/LandingPage/DevfolioLogo.svg";
import TimerSection from "./TimerSection";
//import Schedule from "../components/Schedule/Schedule";
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
          backgroundPosition: `${50 + bgPosition.x}% ${20 + bgPosition.y}%`,
          backgroundSize: "cover",
          zIndex: "2"
        }}
      >
        {/* Hero section */}
        <section
          id="hero"
          className="w-full max-[540px]:mt-[80px] mt-[110px] 3xl:mt-[250px] flex flex-col items-center"
        >
          {/* Logo */}
          <div className='head-container'>
            <img src={head} alt="Hackatron 3.0" className='imgHead-background' />
          </div>

          {/* Subtitle */}
          <h3 className="font-vt323 font-bold w-full px-2 text-center min-[320px]:text-[16px] min-[400px]:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[42px] 2xl:text-[4.5vh] text-[#F0C36D] tracking-[0.1em] sm:tracking-[0.2em] hover:scale-105 transition-transform duration-300 drop-shadow-lg mt-1 leading-tight">
            DESIGN. DEBUG. DEPLOY.
          </h3>

          {/* Mascot + Button + Description */}
          <div className="w-full flex flex-col items-center mt-4 md:mt-6 px-4">
            {/* Mascot image */}
            <div className="home-mascot-wrapper">
              <img src={HomeMascot1} alt="Hackatron Mascot" className="home-mascot-img" />
            </div>

            {/* Apply button */}
            <button
              className="devfolio-btn -mt-7"
              onClick={() => window.open("https://hackatron3.devfolio.co/")}
            >
              <img src={DevfolioLogo} alt="Devfolio Logo" />
              <span>Apply with Devfolio</span>
            </button>

            {/*<div
              className="apply-button  mt-4 mb-4"
              data-hackathon-slug="hackatron3"
              data-button-theme="dark-inverted"
              style={{ height: "44px", width: "312px" }}
            ></div>*/}

            {/* Description */}
            <p className="font-vt323 text-[#D8C39A] text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] 2xl:text-[2.8vh] w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] leading-snug text-center mt-0 mx-3 mb-3">
              Boot up your brilliance at Hackatron 3.0, a 36-hour code sprint built for creators and boundary-pushers. Explore diverse tech tracks, design bold solutions, and build real prototypes with fellow geeks. Break limits, spark innovation, and turn caffeine into commits.
            </p>

            {/* Scroll button */}
            <button className="animate-bounce mt-2 3xl:w-[5%]">
              <a onClick={scrollToTimer}>
                <img src={ScrollButton} alt="Scroll Down" className="w-14 md:w-16 xl:w-20 mx-auto" />
              </a>
            </button>
          </div>
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
