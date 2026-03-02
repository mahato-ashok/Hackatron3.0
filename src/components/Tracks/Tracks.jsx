import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import left_key from '../../assets/images/left_key.svg';
import right_key from '../../assets/images/right_key.svg';
import medical from '../../assets/images/tracks/medical.png';
import medical_card from '../../assets/images/tracks/medical_card.png';
import wildlife from '../../assets/images/tracks/wildlife.png';
import wildlife_card from '../../assets/images/tracks/wildlife_card.png';
import hardware_card from '../../assets/images/tracks/hardware_card.png';
import hardware from '../../assets/images/tracks/hardware.png';
import open_innovation_card from '../../assets/images/tracks/open_innovation_card.png';
import open_innovation from '../../assets/images/tracks/open_innovation.png';
import education_card from '../../assets/images/tracks/education_card.png';
import education from '../../assets/images/tracks/education.png';
import web3_card from '../../assets/images/tracks/web3_card.png';
import web3 from '../../assets/images/tracks/web3.png';

import comingSoon from "/images/coming_soon.gif"
import man from "/images/track3.png"
import chest from "/images/track2.png"
/*import comingSoon from "/images/coming_soon.gif"
import comingSoon from "/images/coming_soon.gif"*/

const Tracks = () => {
    const [selectedTrack, setSelectedTrack] = useState(1);
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    const trackData = [
        { id: 1, title: 'MEDICAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: medical, card: medical_card },
        { id: 2, title: 'HARDWARE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', image: hardware, card: hardware_card},
        { id: 3, title: 'WILDLIFE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', image: wildlife, card: wildlife_card},
        { id: 4, title: 'EDUCATION', description: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur. ', image: education, card: education_card},
        { id: 5, title: 'WEB3', description: 'Nam commodo suscipit quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet.Nam commodo suscipit quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet. ', image: web3, card: web3_card},
        { id: 6, title: 'OPEN INNOVATION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ', image: open_innovation, card: open_innovation_card},
        // Add more tracks here...
        { id: 7, title: 'MEDICAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: medical, card: medical_card },
        { id: 8, title: 'HARDWARE', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. Participants are encouraged to explore diverse challenges and develop hardware-based solutions that address these issues effectively. ', image: hardware, card: hardware_card},
        { id: 9, title: 'WILDLIFE', description: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur. ', image: wildlife, card: wildlife_card},
        { id: 10, title: 'EDUCATION', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. ', image: education, card: education_card},
        { id: 11, title: 'WEB3', description: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur. ', image: web3, card: web3_card},
        { id: 12, title: 'OPEN INNOVATION', description: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. ', image: open_innovation, card: open_innovation_card},
    ];

    const handleCardClick = (trackId) => {
        setSelectedTrack(trackId);
    };

    // todo
    let cardWidth = (window.innerWidth < 2560) ? 164 : 220;
    
    var slider = document.getElementById('slider');
    const moveRight = () => {
        // console.log(selectedTrack);

        slider.scrollLeft = 164 * (selectedTrack);
        if(selectedTrack == 6) {
            setTimeout(() => {
                handleCardClick(1);
                slider.scrollTo({left: 0, behavior: 'instant'});
            }, 500);
        }
    }

    const moveLeft = () => {
        slider.scrollLeft = 164 * (selectedTrack - 2);
    }


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
        <section id='tracks' className="max-[768px]:pt-[30px] pt-[80px] relative px-5 bg-no-repeat" style={{
            // backgroundImage: `url(${stars})`,
            // backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
            // backgroundSize: 'cover',
        }}>
            {/* <img src={stars} className=" z-0 absolute pointer-events-none w-screen opacity-50"></img> */}
            {/*<img src={trackData[selectedTrack - 1].image} alt="" className='z-1 absolute pointer-events-none left-0 right-0 mx-auto max-w-full xl:-translate-y-48 opacity-50'/>*/}
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto z-2'>
                <h1 className='py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ ls -a <span className='text-white'>TRACKS</span></h1>
                {/*<div className='lg:flex'>   
                    <div className="track-section pl-12 xl:w-1/2 mr-5 mb-5 xl:mb-0" >
                        {selectedTrack ? (
                            <div className='track'>
                                <h2 className='text-5xl md:text-7xl xl:text-8xl 3xl:text-9xl my-4 md:my-12'>{trackData[selectedTrack - 1].title}</h2>
                                <p className='text-lg md:text-xl xl:text-2xl 3xl:text-4xl'>{trackData[selectedTrack - 1].description}</p>
                            </div>
                        ) : (
                            <p>Select a track to see more information.</p>
                        )}
                    </div>
                    <div className="carousel flex items-center gap-5 h-fit self-end">
                        <img src={left_key} alt="" className='opacity-50 hover:opacity-100'onClick={() => {moveLeft(); if(selectedTrack > 1) handleCardClick(selectedTrack - 1)}}/>
                        <div className='tracks-wrapper flex gap-5 lg:max-w-[480px] 3xl:max-w-[1000px] overflow-x-auto scroll-smooth no-scrollbar' id='slider'>
                            {trackData.map((track) => (
                                <div key={track.id} className="card min-w-24 sm:min-w-36 3xl:min-w-40 grid place-items-center relative" onClick={() => handleCardClick(track.id)}>
                                    <img src={track.card} alt="" className='opacity-70 3xl:min-w-40'/>
                                    <h4 className='absolute text-lg md:text-2xl left-0 top-0 right-0 bottom-0 m-auto w h-fit text-center px-4'>{track.title}</h4>
                                </div>
                            ))}
                        </div>
                        <img src={right_key} alt="" className='opacity-50 hover:opacity-100' onClick={() => {moveRight(); handleCardClick((selectedTrack % 6) + 1)}}/>
                    </div>
                </div>*/}
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <img src={comingSoon} alt="Coming Soon" style={{width:"80%"}}></img>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <img src={chest} alt="Mascot" style={{width:"40%", objectFit: "contain"}}></img>
                        <img src={man} alt="Mascot" style={{width:"20%", objectFit: "contain"}}></img>
                    </div>
                </div>
                {/*<div className='px-12 text-white mt-8 text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Every track winner will get prizes worth <span className=''>$</span>150 including ₹2000 cash prize, swags, and additional sponsor benefits</div>*/}
            </div>
        </section>
    );
};

export default Tracks;
