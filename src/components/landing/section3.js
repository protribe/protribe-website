import Image from "next/image"
import Section2Image from "../../../public/Section2.png"

const Section3 = () => {
    return (
        <div className="flex flex-col items-center h-auto w-full relative bg-[#010D23] sm:h-auto sm:pb-[55px]">
            <div className="relative w-full h-[75%] sm:h-auto sm:w-full">
                <Image src={Section2Image} alt="successful women in their career" className='object-cover w-full h-full'/>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-[#010D23] to-transparent"></div>
            </div>
            <div className='flex justify-center items-center text-center w-[70%] mt-[60px] text-[24px] leading-[150%] tracking-[0em] text-[#F9FAFB] sm:w-[90%] sm:text-[20px]'>
            At ProTribe, you get to turbo charge your career with meticulously crafted tools and battle-tested strategies. You learn from the raw, real experiences of elite performers at the highest levels. You plug into a high-fidelity community that understands what it takes to reach the top - and helps you get there.
            </div>
        </div>
    )
}

export default Section3