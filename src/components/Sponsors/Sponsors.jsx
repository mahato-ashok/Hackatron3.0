import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import stars from '../../assets/images/footer/stars.svg';
/*import beeceptorLogo from '../../assets/images/sponsors/beeceptor.svg';
import wolframLogo from '../../assets/images/sponsors/wolfram.png';
import rosenfeldLogo from '../../assets/images/sponsors/rosenfeld.png';
import oxDayLogo from '../../assets/images/sponsors/0xday.png';
import polygonLogo from '../../assets/images/sponsors/polygon.png';
import axureLogo from '../../assets/images/sponsors/axure.png';
import interviewCakeLogo from '../../assets/images/sponsors/interviewcake.png';
import interviewBuddyLogo from '../../assets/images/sponsors/interviewbuddy.png';
import aopsLogo from '../../assets/images/sponsors/aops.png';
import certificateLogo from '../../assets/images/sponsors/givemycertificate.png';
import avalancheLogo from '../../assets/images/sponsors/avalanche.png';
import devfolioLogo from '../../assets/images/sponsors/devfolio.png';
import githubLogo from '../../assets/images/sponsors/github.png';
import echo3DLogo from '../../assets/images/sponsors/echo3D.png';
import gianLogo from '../../assets/images/sponsors/gian.svg';
import riseLogo from '../../assets/images/sponsors/rise.png';
import quillLogo from '../../assets/images/sponsors/quill.webp';
import ethIndiaLogo from '../../assets/images/sponsors/ethIndia.png';
import blockFlowLogo from '../../assets/images/sponsors/blockflow.png';
import edugraphLogo from '../../assets/images/sponsors/edugraph.png';
import texosLogo from '../../assets/images/sponsors/texos.png';
import routerLogo from '../../assets/images/sponsors/router.svg';*/
import devfolioLogo2026 from '../../assets/images/Sponsors2026/Devfolio-logo.webp';
import codeCrafterLogo2026 from '../../assets/images/Sponsors2026/CodeCrafters-logo.webp';
import sybgenLogo2026 from '../../assets/images/Sponsors2026/SYBGEN-logo.webp';
import interviewCakeLogo2026 from '../../assets/images/Sponsors2026/interview-cake-logo.webp';


import ProgressiveImage from "../ProgressiveImage";
import devfolioLogo2026Mini from '../../assets/images/Sponsors2026/SponsorsMini/Devfolio-logo.webp';
import codeCrafterLogo2026Mini from '../../assets/images/Sponsors2026/SponsorsMini/CodeCrafters-logo.webp';
import sybgenLogo2026Mini from '../../assets/images/Sponsors2026/SponsorsMini/SYBGEN-logo.webp';
import interviewCakeLogo2026Mini from '../../assets/images/Sponsors2026/SponsorsMini/interview-cake-logo.webp';

const Sponsors = () => {
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
        <section className="max-[768px]:pt-[40px] pt-[80px] relative" style={{
            // backgroundImage: `url(${stars})`,
            // backgroundPosition: `${50}% ${50 - bgPosition.y}%`,
            // backgroundSize: bgSize,
        }} id='sponsors'>
            <div className="max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">
                <h2 className='mx-5 xl:mx-0 py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ cat ~/.ssh/<span className='text-white'>SPONSORS</span>.db</h2>

                <div className='mb-4 flex flex-col gap-1 sm:gap-1'>
                    {/* <h1 className="font-vt323 font-medium text-[12vw] leading-[12vw] sm:leading-[4rem] md:leading-[5rem] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] xl:leading-[6rem] 3xl:leading-[8rem]" style={{ background: 'linear-gradient(to right, blue,blue,#dd50b3,#dd50b3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SPONSORS</h1> */}
                    <p className='font-vt323 text-gray-400 w-[90vw] leading-[5vw] text-[4.5vw] sm:leading-0 sm:px-0  sm:w-[70vw] sm:text-lg sm:leading-5 md:text-[2.8vw] md:leading-6 md:w-[75vw] lg:text-xl lg:w-[56vw] lg:leading-5 xl:text-3xl xl:w-[55rem] 3xl:text-5xl 3xl:w-[75rem] text-center mx-auto'>Thank you to our generous sponsors for contributing to the prize pool and making this awesome event a reality!</p>
                </div>

                {/* <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[75vw] mx-auto border-dashed border-cyan-500 border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-cyan-500 text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem] '>DIAMOND</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20'>
                        <img loading="lazy" src={mlhLogo} alt="mlh" className='w-[18vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img loading="lazy" src={postmanLogo} alt="postman" className='w-[7vw] h-[7vw] sm:w-[5vw] sm:h-[5vw]' />
                        <img loading="lazy" src={awsLogo} alt="aws" className='w-[12vw] sm:w-[8vw] sm:h-[5vw]' />
                    </div>
                </div> */}

                {/* TITLE SPONSOR */}
                {/*
                <div className='pt-3 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#e29b29] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#e29b29] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>TITLE SPONSOR</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center justify-center gap-5 sm:gap-20 max-sm:mb-0'>
                        <Link to='https://www.avax.network/'><img loading="lazy" src={avalancheLogo} alt="Avalanche" width={1000} height={1000} className='w-[50vw] sm:w-[30vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link>
                        <Link to='https://hackatron3.devfolio.co/'><img loading="lazy" src={devfolioLogo} alt="Devfolio" width={1000} height={1000} className='w-[40vw] sm:w-[20vw] 3xl:w-[20rem]' /></Link>
                    </div>
                </div>
                */}

                {/* PLATINUM */}
                {/*
                <div className='pt-3 3xl:pt-10 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#5FA6FF] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#5FA6FF] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>PLATINUM</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center justify-center gap-5 sm:gap-16 max-sm:mb-0'>
                        <Link to='https://0x.day/'><img loading="lazy" src={oxDayLogo} alt="0xDay" width={1000} height={1000} className='w-[40vw] sm:w-[19vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://github.com/'><img loading="lazy" src={githubLogo} alt="GitHub" width={1000} height={1000} className='w-[40vw] sm:w-[19vw] 3xl:w-[20rem]' /></Link>
                    </div>
                </div>
                */}

                {/* GOLD */}
                <div className='pt-3 3xl:pt-10 pb-12 border-dashed border-[#e29b29] border-b-[0.1rem] sm:border-b-[0.5rem] md:pt-4 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto flex flex-col items-center justify-center gap-5 lg:gap-8'>
                    <h3 className='font-vt323 font-medium text-[#e29b29] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>GOLD</h3>
                    <div className='flex flex-wrap flex-col sm:flex-row items-center justify-center gap-8 sm:gap-x-32 px-12'>
                        <div className='relative group'>
                            <Link to='https://devfolio.co/' target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center justify-center w-[60vw] h-[100px] sm:w-[15vw] sm:h-[120px] 3xl:w-[15rem] transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-2xl shadow-[0_0_25px_rgba(226,155,41,0.3)] hover:shadow-[0_0_25px_rgba(226,155,41,0.7)] transition-all duration-300 overflow-hidden">
                                <ProgressiveImage
                                 src={devfolioLogo2026} alt="DEVFOLIO LOGO" width={1000} height={1000} className='max-w-full max-h-full w-auto h-auto object-contain'
                                 placeholder = {devfolioLogo2026Mini}/>
                                </div>
                                <div className="absolute top-full left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pt-3 z-10">
                                    <p className="font-vt323 text-[#ec53b0] text-lg md:text-xl tracking-widest text-center px-1 whitespace-nowrap bg-black/40 rounded">DEVFOLIO</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* SILVER */}
                <div className='pt-3 3xl:pt-10 pb-12 border-dashed border-[#9e9e9e] border-b-[0.1rem] sm:border-b-[0.5rem] md:pt-4 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto flex flex-col items-center justify-center gap-5 lg:gap-8'>
                    <h3 className='font-vt323 font-medium text-[#9e9e9e] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>SILVER</h3>
                    <div className='flex flex-wrap flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 px-12 2xl:px-24'>
                        <div className='relative group'>
                            <Link to='https://codecrafters.io/' target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center justify-center w-[60vw] h-[100px] sm:w-[15vw] sm:h-[120px] 3xl:w-[15rem] transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-2xl shadow-[0_0_25px_rgba(158,158,158,0.3)] hover:shadow-[0_0_25px_rgba(158,158,158,0.7)] transition-all duration-300 overflow-hidden">
                                    <ProgressiveImage  src={codeCrafterLogo2026} alt="CODECRAFTERS LOGO" width={1000} height={1000} className='max-w-full max-h-full w-auto h-auto object-contain'
                                    placeholder = {codeCrafterLogo2026Mini}/>
                                </div>
                                <div className="absolute top-full left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pt-3 z-10">
                                    <p className="font-vt323 text-[#ec53b0] text-lg md:text-xl tracking-widest text-center px-1 whitespace-nowrap bg-black/40 rounded">CODECRAFTERS</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* PARTNER */}
                <div className='pt-3 3xl:pt-10 pb-12 md:pt-4 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto flex flex-col items-center justify-center gap-5 lg:gap-8'>
                    <h3 className='font-vt323 font-medium text-[#9d44c0] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>PARTNER</h3>
                    <div className='flex flex-wrap flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 px-12 max-sm:mb-4'>
                        <div className='relative group'>
                            <Link to='https://sybgen.com/' target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center justify-center w-[60vw] h-[100px] sm:w-[15vw] sm:h-[120px] 3xl:w-[15rem] transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-2xl shadow-[0_0_25px_rgba(157,68,192,0.3)] hover:shadow-[0_0_25px_rgba(157,68,192,0.7)] transition-all duration-300 overflow-hidden">
                                   <ProgressiveImage src={sybgenLogo2026} alt="SYBGEN LOGO" width={1000} height={1000} className='max-w-full max-h-full w-auto h-auto object-contain' placeholder = {sybgenLogo2026Mini}/>
                                </div>
                                <div className="absolute top-full left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pt-3 z-10">
                                    <p className="font-vt323 text-[#ec53b0] text-lg md:text-xl tracking-widest text-center px-1 whitespace-nowrap bg-black/40 rounded">SYBGEN</p>
                                </div>
                            </Link>

                            <Link to='https://www.interviewcake.com/' target="_blank" rel="noopener noreferrer" className="relative flex mt-20 flex-col items-center justify-center w-[60vw] h-[100px] sm:w-[15vw] sm:h-[120px] 3xl:w-[15rem] transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center w-full h-full p-4 bg-white rounded-2xl shadow-[0_0_25px_rgba(157,68,192,0.3)] hover:shadow-[0_0_25px_rgba(157,68,192,0.7)] transition-all duration-300 overflow-hidden">
                                    <ProgressiveImage src={interviewCakeLogo2026} alt="SYBGEN LOGO" width={1000} height={1000} className='max-w-full max-h-full w-auto h-auto object-contain'
                                    placeholder = {interviewCakeLogo2026Mini}/>
                                </div>
                                <div className="absolute top-full left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pt-3 z-10">
                                    <p className="font-vt323 text-[#ec53b0] text-lg md:text-xl tracking-widest text-center px-1 whitespace-nowrap bg-black/40 rounded">INTERVIEW-CAKE</p>
                                </div>
                            </Link>

                        </div>
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
        </section >
    )
}

export default Sponsors;
