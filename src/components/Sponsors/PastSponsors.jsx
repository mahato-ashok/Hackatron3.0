import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import stars from '../../assets/images/footer/stars.svg';
import bugseeLogo from '../../assets/images/past_sponsors/bugsee.webp';
import codingBlocksLogo from '../../assets/images/past_sponsors/coding-blocks.webp';
import creativeTimLogo from '../../assets/images/past_sponsors/creative-tim.webp';
import educativeLogo from '../../assets/images/past_sponsors/educative.webp';
import teqipLogo from '../../assets/images/past_sponsors/teqip.webp';
import microsoftLogo from '../../assets/images/past_sponsors/microsoft-azure-new.webp';
import reskilllLogo from '../../assets/images/past_sponsors/reskilll.webp';
import devfolioLogo from '../../assets/images/past_sponsors/devfolio.webp';
import ethIndiaLogo from '../../assets/images/past_sponsors/ETH-India.webp';
import devtownLogo from '../../assets/images/past_sponsors/devtown.webp';
import technixLogo from '../../assets/images/past_sponsors/Technix_.webp';
import amulLogo from '../../assets/images/past_sponsors/amul.webp';
import mayaLogo from '../../assets/images/past_sponsors/MAYALOGO.webp';
import geekRoomLogo from "../../assets/images/past_sponsors/geekRoom.webp"

import ProgressiveImage from "../ProgressiveImage";

import bugseeLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/bugsee.webp';
import codingBlocksLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/coding-blocks.webp';
import creativeTimLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/creative-tim.webp';
import educativeLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/educative.webp';
import teqipLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/teqip.webp';
import microsoftLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/microsoft-azure-new.webp';
import reskilllLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/reskilll.webp';
import devfolioLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/devfolio.webp';
import ethIndiaLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/ETH-India.webp';
import devtownLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/devtown.webp';
import technixLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/Technix_.webp';
import amulLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/amul.webp';
import mayaLogoMini from '../../assets/images/past_sponsors/past_sponsors_mini/MAYALOGO.webp';
import geekRoomLogoMini from "../../assets/images/past_sponsors/past_sponsors_mini/geekRoom.webp"

const PastSponsors = () => {
    const [bgSize, setBgSize] = useState("110%");
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setBgSize("300%");
            }
            else {
                setBgSize("110%");
            }
        };

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="max-[768px]:pt-[40px] pt-[80px] relative" style=
            {{
                // backgroundImage: `url(${stars})`,
                // backgroundPosition: `${50}% ${50 - bgPosition.y}%`,
                // backgroundSize: bgSize,
            }} id='past-sponsors'>
            <div className="max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">
                <h2 className='mx-5 xl:mx-0 py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ zcat <span className='text-white'>PAST_SPONSORS</span>.gz</h2>

                <div className='mb-4 flex flex-col gap-1 sm:gap-1'>
                    <p className='font-vt323 text-gray-400 w-[90vw] leading-[5vw] text-[4.5vw] sm:leading-0 sm:px-0  sm:w-[70vw] sm:text-lg sm:leading-5 md:text-[2.8vw] md:leading-6 md:w-[75vw] lg:text-xl lg:w-[56vw] lg:leading-5 xl:text-3xl xl:w-[55rem] 3xl:text-5xl 3xl:w-[75rem] text-center mx-auto'>Thank you to our generous sponsors from previous years!</p>
                </div>

                <div className="flex items-center gap-3 my-4 mx-5 xl:mx-0">
                    <div className="h-[2px] flex-1" style={{ background: 'repeating-linear-gradient(90deg, #ec53b0 0px, #ec53b0 6px, transparent 6px, transparent 12px)' }} />
                    <span className="font-vt323 text-[#ec53b0] text-sm tracking-[0.3em] opacity-80">ARCHIVED</span>
                    <div className="h-[2px] flex-1" style={{ background: 'repeating-linear-gradient(90deg, #9d44c0 0px, #9d44c0 6px, transparent 6px, transparent 12px)' }} />
                </div>

                <div className='pt-2 pb-10 w-[94vw] xl:w-[78vw] 2xl:w-full mx-auto text-center'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 justify-center mx-auto w-full px-4 sm:px-8'>

                        {[
                            { link: "https://mayadataprivacy.com/", img: mayaLogo, alt: "Maya Data Privacy", darkBg: true, mini:mayaLogoMini },
                            { link: "https://www.bugsee.com/", img: bugseeLogo, alt: "Bugsee",mini:bugseeLogoMini },
                            { link: "https://codingblocks.com/", img: codingBlocksLogo, alt: "Coding Blocks",mini: codingBlocksLogoMini },
                            { link: "https://www.creative-tim.com/", img: creativeTimLogo, alt: "Creative Tim",mini: creativeTimLogoMini },
                            { link: "https://www.educative.io/", img: educativeLogo, alt: "Educative",mini:educativeLogoMini },
                            { link: "https://www.teqip.in/", img: teqipLogo, alt: "TEQIP",mini:teqipLogoMini },
                            { link: "https://www.microsoft.com/", img: microsoftLogo, alt: "Microsoft Azure",mini:microsoftLogoMini },
                            { link: "https://reskilll.com/", img: reskilllLogo, alt: "Reskilll",mini:reskilllLogoMini },
                            { link: "https://devfolio.co/", img: devfolioLogo, alt: "Devfolio",mini: devfolioLogoMini},
                            { link: "https://www.geekroom.in/", img: geekRoomLogo, alt: "Geek Room",mini: geekRoomLogoMini},
                            { link: "https://ethindia.co/", img: ethIndiaLogo, alt: "ETHIndia", darkBg: true, mini:ethIndiaLogoMini },
                            { link: "https://devtown.in/", img: devtownLogo, alt: "DevTown", mini:devtownLogoMini },
                            { link: "https://technix.in/", img: technixLogo, alt: "TechNix", mini: technixLogoMini},
                            { link: "https://www.amul.com/", img: amulLogo, alt: "Amul" , mini:amulLogoMini},

                        ].map((sponsor, i) => (
                            <div key={i} className='relative group'>
                                <Link
                                    to={sponsor.link}
                                    target="_blank"
                                    className="relative flex flex-col items-center justify-center
                                        w-full h-[70px] sm:h-[85px] md:h-[95px] lg:h-[105px]
                                        transition-all duration-300 hover:scale-110"
                                >
                                    {/* Logo panel — restoring white background, no blue padding */}
                                    <div className="flex items-center justify-center w-full h-full p-3 bg-white rounded-xl shadow-sm overflow-hidden">
                                        <ProgressiveImage
                                        src={sponsor.img}
                                        placeholder={sponsor.mini}   // 
                                        alt={sponsor.alt}
                                        className={`max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300 ${
                                            sponsor.alt === "Microsoft Azure" ? "scale-[1.5]" : ""
                                        }`}
                                        style={{ imageRendering: "crisp-edges" }}
                                        />
                                    </div>

                                    {/* Sponsor name label just below logo on hover */}
                                    <div className="absolute top-full left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pt-3 translate-y-0 z-10">
                                        <p className="font-vt323 text-[#ec53b0] text-base md:text-lg lg:text-xl tracking-widest text-center px-1 whitespace-nowrap bg-black/40 rounded">
                                            {sponsor.alt.toUpperCase()}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>


            </div>
            <div
                className="absolute h-screen top-[99%] object-cover opacity-70 inset-0 pointer-events-none"
                style={{
                    //backgroundImage: `url(${stars})`,
                    backgroundPosition: `${50}% ${50 + bgPosition.y}%`,
                    backgroundSize: bgSize,
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
        </section>
    )
}

export default PastSponsors;


