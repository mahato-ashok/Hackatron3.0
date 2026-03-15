import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import win1 from '../../assets/images/prizes/win1.webp';
import win2 from '../../assets/images/prizes/win2.png';
import win6 from '../../assets/images/prizes/win6.png';
import win5 from '../../assets/images/prizes/win5.png';
import small_trophy from '../../assets/images/prizes/small_trpohy.png'

const Prizes = () => {
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
            id='prizes'
            className="pt-[30px] md:pt-[80px] relative px-5 bg-no-repeat"
            style={{
                // backgroundImage: `url(${stars})`,
                // backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
                // backgroundSize: 'cover',
            }}
        >
            {/* <img loading="lazy"
                src={prizesbg}
                alt=""
                className="absolute w-full h-full object-cover top-0 left-0"
                style={{ clipPath: 'inset(0 0 -10px 0)' }} // Adjust this as needed to leave space at the bottom
            /> */}
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto z-2'>

                <h2 className="py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
                    $ sudo decrypt <span className="text-white">PRIZES</span>.enc
                </h2>
                <div className="flex justify-center items-center h-full">
                    <div className="px-4 sm:p-10 text-left w-full">
                        {/* Main Rectangle */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-6 ">

    {/* FIRST BLOCK */}
    <div className="flex flex-col items-center border-[6px] max-lg:border-4 border-dashed border-[#0384fc] p-6 text-center md:h-[500px] transition-all duration-300 hover:shadow-[0_0_45px_rgba(3,132,252,0.45)] hover:-translate-y-1">

        <img 
            src={win5} 
            alt="Prize"
            className="w-32 md:w-100 lg:w-48 md:h-90 mb-4 object-contain"
        />
        <h2 className="text-2xl md:text-6xl font-semibold">CASH PRIZES</h2>
        <h2 className="text-3xl md:text-5xl text-blue-500 mt-2 font-semibold">₹50000</h2>

    </div>


    {/* SECOND BLOCK */}
    <div className="flex flex-col items-center border-[6px] max-lg:border-4 border-dashed border-purple p-6 text-center transition-all duration-300 hover:shadow-[0_0_45px_rgba(168,85,247,0.45)] hover:-translate-y-1">

        <img 
            src={win6} 
            alt="Prize"
            className="w-full md:w-100 lg:w-100 md:h-90 mb-6 object-contain"
        />

        <h2 className="text-2xl md:text-6xl font-semibold">TOTAL PRIZE POOL</h2>
        <h2 className="text-3xl md:text-5xl text-purple mt-2 font-semibold">₹1.5 LAKH</h2>

    </div>

</div>
                        {/* Two Thin Rectangles Below */}
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex-1 mb-4 flex flex-col transition-all duration-300">
                                <div className='text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>:/Check out our <a className='text-gray-400 hover:text-white' href='https://hackatron3.devfolio.co/'>devfolio page</a> for the detailed track prize details.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Prizes;
