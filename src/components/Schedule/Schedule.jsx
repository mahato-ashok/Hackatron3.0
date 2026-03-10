import React, { useEffect, useRef, useState } from 'react';
import right_key from '../../assets/images/right_key.svg';
import left_key from '../../assets/images/left_key.svg';
import bounty from '../../assets/images/bounty.svg';

function Schedule() {
    const timelineWrapperRef = useRef(null);
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (timelineWrapperRef.current) {
            let leftPosition = 0;
            if (window.innerWidth < 768) {
                leftPosition = 40;
                document.querySelector('.timeline-wrapper').scrollTo({ left: leftPosition, behavior: 'smooth' });
            }
            const timelineElementWidth = 340;
            const timelineWrapperWidth =
                document.querySelector('.timeline-wrapper').clientWidth;
            // const defaultShiftWidth =
            //     timelineWrapperWidth < timelineElementWidth
            //         ? timelineElementWidth / 4
            //         : 0;
            document.querySelector('.timeline-wrapper')
                .scrollBy({ left: leftPosition, behavior: 'smooth' });

            document.querySelector('.prev').addEventListener('click', () => {
                const timelineWrapperWidth =
                    document.querySelector('.timeline-wrapper').clientWidth;
                if (leftPosition - timelineElementWidth >= 0)
                    leftPosition = leftPosition - timelineElementWidth;
                document
                    .querySelector('.timeline-wrapper')
                    .scrollTo({ left: leftPosition, behavior: 'smooth' });
            });

            let maxScrollLeft = timelineElementWidth * 4;
            if (timelineWrapperWidth >= timelineElementWidth * 2) maxScrollLeft = timelineElementWidth * 2;
            if (timelineWrapperWidth >= timelineElementWidth * 3) maxScrollLeft = timelineElementWidth;

            document.querySelector('.next').addEventListener('click', () => {
                const timelineWrapperWidth =
                    document.querySelector('.timeline-wrapper').clientWidth;
                leftPosition = leftPosition + timelineElementWidth;
                if (leftPosition >= maxScrollLeft) leftPosition = (window.innerWidth < 768) ? 40 : 0;
                console.log(leftPosition);
                document
                    .querySelector('.timeline-wrapper')
                    .scrollTo({ left: leftPosition, behavior: 'smooth' });
            });
        }

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
        <>
            <div
                id="schedule"
                name="schedule"
                className="w-full py-10 bg-transparent font-vt323 bg-no-repeat "
                style={{
                    // backgroundImage: `url('/src/assets/images/discord/stars.svg')`,
                    // backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
                    // backgroundSize: 'cover',
                }}
            >
                <div className='max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto'>
                    <h2 className='mx-5 xl:mx-0 py-6 text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ tail -f <span className='text-white'>SCHEDULE</span>.log</h2>
                    <div className="mx-5 xl:mx-0 timeline mx-30 flex justify-center">
                        <button aria-label="Previous" className="prev mr-10 opacity-50 hover:opacity-100 min-w-[30px] 3xl:min-w-[60px]">
                            <img loading="lazy" src={left_key} alt="" />
                        </button>

                        <div className="contents mx-30 px-10 flex mx-auto">
                            <div
                                className="timeline-wrapper max-w-[990px] 3xl:max-w-[1880px] flex overflow-x-auto no-scrollbar" ref={timelineWrapperRef}
                            >
                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] 3xl:min-w-[660px] m-1"
                                >
                                    <h3 className="text-[#FF6D75] text-3xl md:text-4xl xl:text-4xl 3xl:text-6xl">
                                        March 3
                                    </h3>
                                    <h4 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl 3xl:text-4xl">
                                        12:00 AM
                                    </h4>
                                    <img loading="lazy" src={bounty} alt="" className='3xl:w-full' />
                                    <h4 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Registration
                                    </h4>
                                    <h4 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Begins
                                    </h4>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] 3xl:min-w-[660px] m-1"
                                >
                                    <h1 className="text-[#FFC977] text-3xl md:text-4xl xl:text-4xl 3xl:text-6xl">
                                        March 25
                                    </h1>
                                    <h2 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl 3xl:text-4xl">
                                        11:59 PM
                                    </h2>
                                    <img loading="lazy" src={bounty} alt="" className='3xl:w-full' />
                                    <h2 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Registration
                                    </h2>
                                    <h2 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Closes
                                    </h2>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] 3xl:min-w-[660px] m-1"
                                >
                                    <h1 className="text-[#DA77D6] text-3xl md:text-4xl xl:text-4xl 3xl:text-6xl">
                                        April 4
                                    </h1>
                                    <h2 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl 3xl:text-4xl">
                                        07:00 PM
                                    </h2>
                                    <img loading="lazy" src={bounty} alt="" className='3xl:w-full' />
                                    <h2 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Hackathon
                                    </h2>
                                    <h2 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Starts
                                    </h2>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] 3xl:min-w-[660px] m-1"
                                >
                                    <h1 className="text-[#FFC977] text-3xl md:text-4xl xl:text-4xl 3xl:text-6xl">
                                        April 6
                                    </h1>
                                    <h2 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl 3xl:text-4xl">
                                        07:00 AM
                                    </h2>
                                    <img loading="lazy" src={bounty} alt="" className='3xl:w-full' />
                                    <h2 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Hackathon
                                    </h2>
                                    <h2 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl 3xl:text-5xl">
                                        Ends
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <button aria-label="Next" className="next ml-10 opacity-50 hover:opacity-100 min-w-[30px] 3xl:min-w-[60px]">
                            <img loading="lazy" src={right_key} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule;
