/*import React, { useState, useEffect } from 'react';
import './Cp.css';

const topImages = [
  { src: "/images/cj.svg", alt: "cj" },
  { src: "/images/cnhooghly.svg", alt: "cnhooghly" },
  { src: "/images/dev.svg", alt: "dev" },
  { src: "/images/ieee.svg", alt: "ieee" },
  { src: "/images/gdsc.svg", alt: "gdsc" },

  // double for infinite loop
  { src: "/images/cj.svg", alt: "cj" },
  { src: "/images/cnhooghly.svg", alt: "cnhooghly" },
  { src: "/images/dev.svg", alt: "dev" },
  { src: "/images/ieee.svg", alt: "ieee" },
  { src: "/images/gdsc.svg", alt: "gdsc" },
];

const bottomImages = [
  { src: "/images/iei.svg", alt: "iei" },
  { src: "/images/iiitians.svg", alt: "iiitians" },
  // { src: "/images/rc.svg", alt: "rc" },
  { src: "/images/thc.svg", alt: "thc" },
  { src: "/images/gdscm.svg", alt: "gdscm" },
  // { src: "/images/vuchvilla.svg", alt: "vv" },

    // double for infinite loop
  { src: "/images/iei.svg", alt: "iei" },
  { src: "/images/iiitians.svg", alt: "iiitians" },
  // { src: "/images/rc.svg", alt: "rc" },
  { src: "/images/thc.svg", alt: "thc" },
  { src: "/images/gdscm.svg", alt: "gdscm" },
  // { src: "/images/vuchvilla.svg", alt: "vv" },
];

const SimpleSlider = ({ images, direction }) => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;
      const posX = (clientX / innerWidth - 0.5) * 30; // Adjust the multiplier for sensitivity
      const posY = (clientY / innerHeight - 0.5) * 30; // Adjust the multiplier for sensitivity
      setBgPosition({ x: posX, y: posY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="slider-container w-full relative p-0">
      <div
        className={`slider w-fit ${direction === 'left' ? 'slide-left' : 'slide-right'}`}
        style={{
          transform: `translateX(${direction === 'left' ? bgPosition.x * 2 : -bgPosition.x * 2}px)`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide my-3 sm:my-6 mx-4 sm:mx-10 w-[200px] sm:w-[30vw] md:w-[25vw] xl:w-[20vw] 3xl:w-[20vw]">
            <img loading="lazy"
            // adding the extra text to get it to display on github pages (only for dev) (remove before deploy)
              src={(window.location.href == "https://iiitkalyanifosc.github.io/Hackathon-website-2024/" ? "/Hackathon-website-2024" : "") + image.src}
              alt={image.alt}
              className="slide-image 3xl:w-[15vw]"
              style={{
                transform: `translateY(${bgPosition.y}px)`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Cp = () => {
  return (
    <div className="sliders-wrapper mt-4">
      <div className="w-full max-md:px-5 max-xl:px-10 xl:w-[1280px] 3xl:w-[2000px] self-center mb-0 sm:mb-8">
        <h1 className='text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>
          $ sudo apt-get i&nbsp;<span className='text-white'>commun<span className='text-red'>1</span>ty partners</span>
        </h1>
      </div>
      <SimpleSlider images={topImages} direction="left" />
      <SimpleSlider images={bottomImages} direction="right" />
      
    </div>
    
  );
}

export default Cp;
*/