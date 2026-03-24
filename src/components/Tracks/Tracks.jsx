import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import left_key from '../../assets/images/left_key.svg';
import right_key from '../../assets/images/right_key.svg';
import medical from '../../assets/images/tracks/medical.webp';
import medical_card from '../../assets/images/tracks/medical_card.webp';
import wildlife from '../../assets/images/tracks/wildlife.webp';
import wildlife_card from '../../assets/images/tracks/wildlife_card.webp';
import hardware_card from '../../assets/images/tracks/hardware_card.webp';
import hardware from '../../assets/images/tracks/hardware.webp';
import open_innovation_card from '../../assets/images/tracks/open_innovation_card.webp';
import open_innovation from '../../assets/images/tracks/open_innovation.webp';
import education_card from '../../assets/images/tracks/education_card.webp';
import education from '../../assets/images/tracks/education.webp';
import web3_card from '../../assets/images/tracks/web3_card.webp';
import web3 from '../../assets/images/tracks/web3.webp';




const Tracks = () => {
    // We only have track ID 5 left, so default to it
    const [selectedTrack, setSelectedTrack] = useState(5);
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    const trackData = [
        /*
        { id: 1, title: 'MEDICAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: medical, card: medical_card },
        { id: 2, title: 'HARDWARE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', image: hardware, card: hardware_card },
        { id: 3, title: 'WILDLIFE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', image: wildlife, card: wildlife_card },
        { id: 4, title: 'EDUCATION', description: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur. ', image: education, card: education_card },
        */
        { id: 5, title: 'iNSIGHTS AI Productivity Track', description: 'This track challenges participants to build an integrated AI-powered system that transforms fragmented workflows into a seamless execution pipeline. Using the iNSIGHTS ecosystem, teams will move from idea generation to deep research, project creation, content generation, and learning within a unified platform. The goal is to enable faster, smarter execution by combining multiple AI capabilities into a single efficient workflow that enhances productivity for students, developers, and creators.', image: education, card: education_card, pdf: '/tracks/iNSIGHTS_Hackatron3.0_Track.pdf' },
        { id: 6, title: 'Real Time Disaster Resource Coordination Platform', description: 'Design and develop a real-time platform that connects affected individuals, volunteers, and NGOs during disasters. The system should enable users to request help, share live locations, and coordinate resources efficiently. It should include features like request tracking, volunteer allocation, and real-time communication, while working in low-connectivity environments. By reducing coordination gaps and duplication of efforts, the platform can improve response speed, optimize resource distribution, and ensure timely and effective disaster relief across affected regions.', image: hardware, card: hardware_card, pdf: '/tracks/DisasterManagement_Hackatron3.0_Track.pdf' },
        { id: 7, title: 'Algorand Blockchain Track 1', description: 'Users often struggle to maintain consistent saving habits due to the lack of simple, transparent, and accountable tools. Current digital platforms enable spending but do not effectively support structured savings with clear progress tracking. Design a wallet-linked savings vault on the Algorand blockchain that allows users to deposit ALGO and track their savings in a secure, transparent, and verifiable manner.', image: web3, card: web3_card, pdf: '/tracks/Algorand_track_1_Hackatron_3.0.pdf' },
        { id: 8, title: 'Algorand Blockchain Track 2', description: 'Project payouts are often delayed due to unclear or manual milestone validation, leading to disputes and inefficiencies. Build a decentralized milestone validation assistant on Algorand that verifies deliverables and triggers payouts only when predefined conditions are met.', image: web3, card: web3_card, pdf: '/tracks/Algorand_track_2_Hackatron_3.0.pdf' },
        { id: 9, title: 'Algorand Blockchain Track 3', description: 'Users often struggle to save consistently for specific goals like rent, travel, or gadgets due to lack of structure and accountability. Existing tools do not provide goal-wise tracking with enforced saving discipline. Build a multi-goal savings vault on Algorand where users can create goals, deposit funds, track progress, and withdraw only when predefined conditions are met.', image: web3, card: web3_card, pdf: '/tracks/Algorand_track_3_Hackatron_3.0.pdf' },
        { id: 10, title: 'Algorand Blockchain Track 4', description: 'Open bounty platforms often face trust issues around work completion and payout reliability, leading to disputes between creators and contributors. Build a decentralized bounty escrow system on Algorand that locks funds, verifies submissions, and ensures fair payouts through on-chain rules.', image: web3, card: web3_card, pdf: '/tracks/Algorand_track_4_Hackatron_3.0.pdf' },
        { id: 11, title: 'COMING SOON', description: 'More problem statements will be revealed soon! Stay tuned for exciting challenges across other domains.', image: web3, card: web3_card }, // Reusing web3 assets as a placeholder since others weren't explicitly provided for "coming soon"
        /*
        { id: 6, title: 'OPEN INNOVATION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ', image: open_innovation, card: open_innovation_card },
        // Add more tracks here...
        { id: 7, title: 'MEDICAL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: medical, card: medical_card },
        { id: 8, title: 'HARDWARE', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. Participants are encouraged to explore diverse challenges and develop hardware-based solutions that address these issues effectively. ', image: hardware, card: hardware_card },
        { id: 9, title: 'WILDLIFE', description: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur. ', image: wildlife, card: wildlife_card },
        { id: 10, title: 'EDUCATION', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. ', image: education, card: education_card },
        { id: 11, title: 'WEB3', description: 'Design and develop a secure and scalable platform that enables P2P, B2B, and merchant payment acceptance using stablecoins. The solution should support features such as QR code–based payments, wallet integration, real-time transaction monitoring, and automated settlement confirmation to ensure fast, transparent, and reliable transactions. In the Indian market, small and medium enterprises often face high transaction fees and delays in cross-border payments; a stablecoin-powered system can help reduce costs, enable faster settlements, and simplify global remittances, making digital payments more efficient and accessible for businesses and individuals.', image: web3, card: web3_card },
        { id: 12, title: 'OPEN INNOVATION', description: 'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere consectetur est at lobortis. ', image: open_innovation, card: open_innovation_card },
        */
    ];

    const currentTrack = trackData.find(t => t.id === selectedTrack) || trackData[0];

    const handleCardClick = (trackId) => {
        setSelectedTrack(trackId);
    };

    // todo
    let cardWidth = (window.innerWidth < 2560) ? 164 : 220;

    var slider = document.getElementById('slider');
    const moveRight = () => {
        // console.log(selectedTrack);

        // Use generic sliding logic that doesn't hardcode array length
        slider.scrollLeft = 164 * (trackData.findIndex(t => t.id === selectedTrack) + 1);
        if (selectedTrack === trackData[trackData.length - 1].id) {
            setTimeout(() => {
                handleCardClick(trackData[0].id);
                slider.scrollTo({ left: 0, behavior: 'instant' });
            }, 500);
        }
    }

    const moveLeft = () => {
        let index = trackData.findIndex(t => t.id === selectedTrack);
        slider.scrollLeft = 164 * (index - 1);
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
        <section id='tracks' className="max-[768px]:pt-[30px] pt-[80px] relative px-5" style={{}}>
            {currentTrack?.image && <img loading="lazy" src={currentTrack.image} alt="" className='z-1 absolute pointer-events-none left-0 right-0 mx-auto max-w-full xl:-translate-y-48 opacity-50' />}
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto z-2'>
                <h2 className='py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ ls -a <span className='text-white'>TRACKS</span></h2>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]'>
                    <div className="track-section flex-1 px-2 sm:px-4 md:px-8" >
                        {currentTrack ? (
                            <div className='track'>
                                <h2 className='w-full text-2xl md:text-4xl xl:text-5xl 3xl:text-6xl my-4 md:my-12'>{currentTrack.title}</h2>
                                <p className='text-lg md:text-xl xl:text-2xl 3xl:text-4xl'>{currentTrack.description}</p>
                                {currentTrack.title !== 'COMING SOON' && (
                                    <div className="mt-8 md:mt-12">
                                        {currentTrack.pdf ? (
                                            <a href={currentTrack.pdf} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-dashed border-orange-500 text-orange-500 bg-transparent hover:bg-orange-500/20 font-bold text-lg md:text-xl rounded transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(249,115,22,0.15)] hover:shadow-[0_0_45px_rgba(249,115,22,0.45),inset_0_0_15px_rgba(249,115,22,0.4)]">
                                                Download Track PDF
                                            </a>
                                        ) : (
                                            <button disabled className="inline-block px-6 py-3 border border-gray-600 text-gray-500 font-bold text-lg md:text-xl rounded cursor-not-allowed">
                                                PDF Coming Soon
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p>Select a track to see more information.</p>
                        )}
                    </div>
                    <div className="carousel flex items-center gap-2 sm:gap-5 h-fit self-end">
                        <img loading="lazy" src={left_key} alt="prev" className='flex-shrink-0 opacity-50 hover:opacity-100 active:opacity-100 cursor-pointer w-8 sm:w-auto' onClick={() => {
                            moveLeft();
                            let idx = trackData.findIndex(t => t.id === selectedTrack);
                            if (idx > 0) handleCardClick(trackData[idx - 1].id);
                        }} />
                        <div className='tracks-wrapper flex items-center gap-3 sm:gap-5 max-w-[305px] sm:max-w-[460px] overflow-x-auto scroll-smooth no-scrollbar py-4 px-1 sm:px-2' id='slider'>
                            {trackData.filter(t => t.id !== undefined).map((track) => (
                                <div key={track.id} className={`card min-w-24 sm:min-w-36 3xl:min-w-40 grid place-items-center relative cursor-pointer transition-all duration-300 ${selectedTrack === track.id ? 'scale-110 z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'scale-90 opacity-60 hover:scale-100 hover:opacity-90'}`} onClick={() => handleCardClick(track.id)}>
                                    <img loading="lazy" src={track.card} alt="" className={`transition-opacity duration-300 3xl:min-w-40 ${selectedTrack === track.id ? 'opacity-100' : 'opacity-80'}`} />
                                    <h4 className='absolute text-sm sm:text-base md:text-lg lg:text-xl left-0 top-0 right-0 bottom-0 m-auto w-full h-fit text-center px-2 sm:px-4 break-words leading-tight flex items-center justify-center font-bold'>{track.title}</h4>
                                </div>
                            ))}
                        </div>
                        <img loading="lazy" src={right_key} alt="next" className='flex-shrink-0 opacity-50 hover:opacity-100 active:opacity-100 cursor-pointer w-8 sm:w-auto' onClick={() => {
                            moveRight();
                            let idx = trackData.findIndex(t => t.id === selectedTrack);
                            handleCardClick(trackData[(idx + 1) % trackData.length].id);
                        }} />
                    </div>
                </div>
                {/*<div className='px-12 text-white mt-8 text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Every track winner will get prizes worth <span className=''>$</span>150 including ₹2000 cash prize, swags, and additional sponsor benefits</div>*/}
            </div>
        </section>
    );
};

export default Tracks;
