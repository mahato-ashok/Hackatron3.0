import CountdownTimer from "../components/CountdownTimer"
export default function TimerSection() {
    return (
        <>
            <section className="width-[100vh] flex flex-col justify-center font-[vt323]">
                <p className="text-[#F21212] text-[375%] min-[3840px]:text-[200px] max-[900px]:text-[55px] max-[768px]:text-[52px] max-[540px]:text-[50px] max-[450px]:text-[48px] max-[360px]:text-[40px] md:text-[76px]   mb-0">Hurry Up</p>
                <p className="text-[225%] text-[#D8C39A] min-[3840px]:text-[130px] max-[900px]:text-[30px] max-[768px]:text-[28px] max-[360px]:text-[28px] md:text-[40px] ">Hacking starts in</p>
                <CountdownTimer targetDate={"April 4, 2026 09:00:00"} />
            </section>
        </>
    )
}
