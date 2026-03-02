import SwipeableTemporaryDrawer from "./HamburgerMenu";
import bitlogo from '../assets/images/Navbar/bitlogo.png';
import iiit_logo_mobile from '../assets/images/Navbar/hncc.png';
import sc1_logo from '../assets/images/Navbar/Hackatron2.png';
import './Navbar.css';
export default function Navbar() {
    const scrollToSchedule = () => {
        const scheduleSection = document.getElementById('schedule');
        if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFooter = () => {
        const footerSection = document.getElementById('footer');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSponsors = () => {
        const footerSection = document.getElementById('sponsors');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFaq = () => {
        const footerSection = document.getElementById('faq');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToTracks = () => {
        const footerSection = document.getElementById('tracks');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToPrizes = () => {
        const footerSection = document.getElementById('prizes');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };






    const scrollToAbout = () => {
        const section = document.getElementById('aboutus');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToVenue = () => {
        const section = document.getElementById('venue');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        /* Fix: Added z-[1000] to the section wrapper and relative positioning */
        <section className="w-full relative z-[1000]" style={{ background: "none" }}>
            <nav className="fixed items-center 3xl:px-[250px] px-4 md:px-7 
                /* Fix Navbar sitting behind: Added z-[1000] */
                z-[1000] flex justify-between 
                w-full h-[96px] 3xl:h-[250px] max-[540px]:h-[60px] 
                mt-0 font-vt323 leading-[96px] 
                /* Theme Change: Removed #040842/50, added deep jungle black-green */
                bg-[#080c0a]/80 border-b border-[#39FF14]/20 backdrop-blur-md">

                {/* Pixelated Logo Effect */}
                <a href="/#hero" >
                    <img
                        className="justify-start w-10 h-10 max-md:w-8 max-md:h-8 max-[540px]:w-7 max-[540px]:h-7 3xl:w-[150px] 3xl:h-[150px] pixel-art"
                        src={sc1_logo}
                        alt="Hackatron Logo"
                    />
                </a>

                <ul className="justify-center flex 3xl:text-6xl 3xl:space-x-[7rem] 2xl:space-x-[4rem] lg:space-x-[2rem] sm:space-x-[1.2rem] sm:text-[22px] min-[540px]:space-x-[1.6rem] min-[540px]:text-[22px] md:text-[22px] md:space-x-5 lg:text-[1.6rem] xl:text-[2rem] text-white items-center max-[768px]:hidden ">

                    {/* Updated Link Styles */}
                    {[
                        { name: 'SCHEDULE', func: scrollToSchedule },
                        { name: 'ABOUT', func: scrollToAbout },
                        { name: 'VENUE', func: scrollToVenue },
                        { name: 'PRIZES', func: scrollToPrizes },
                        { name: 'TRACKS', func: scrollToTracks },
                        { name: 'SPONSORS', func: scrollToSponsors },
                        { name: 'FAQ', func: scrollToFaq },
                        { name: 'CONTACT US', func: scrollToFooter }
                    ].map((item) => (
                        <a key={item.name} onClick={item.func}>
                            <li className="nav-pixel-link hover:text-[#39FF14] cursor-pointer transition-colors duration-200 uppercase">
                                {item.name}
                            </li>
                        </a>
                    ))}
                </ul>

                <div className="flex gap-4 max-md:gap-2 items-center">
                    <a href="https://www.bitsindri.ac.in/" target="_blank">

                        <img className="w-12 h-12 max-md:w-8 max-md:h-8 rendering-pixelated" src={bitlogo} alt="BIT Sindri Logo" />
                    </a>
                    <a href="https://www.hnccbits.com/" target="_blank" rel="noopener noreferrer">
                        <img className="w-14 h-14 max-md:w-10 max-md:h-10 rendering-pixelated" src={iiit_logo_mobile} alt="HnCC Logo"
                        />
                    </a>
                    <SwipeableTemporaryDrawer />
                </div>
            </nav>
        </section>
    );
}