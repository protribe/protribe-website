import Image from "next/image"

import Section4Image1 from "../../../public/Section4(1).png"
import Section4Image2 from "../../../public/Section4(2).png"
import Section4Image3 from "../../../public/Section4(3).png"

const Section4 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full relative bg-[#010D23] px-[108px] sm:h-auto sm:px-0 sm:items-center sm:pb-[55px]">
            <div className='text-[36px] font-bold leading-[120%] tracking-[0em] text-white sm:text-center'>Build a career you are proud of</div>
            <div className='font-normal text-[20px] leading-[150%] tracking-[0em] text-[#9ca3af] mt-[12px] mb-[40px] text-center sm:px-[15px]'>Everything you need is on our platform</div>

            <div className="w-full bg-transparent flex flex-row items-start justify-between gap-x-[24px] sm:flex-col sm:gap-y-[24px] sm:justify-center sm:items-center">
                <Image src={Section4Image1} alt="" className="w-[30%] sm:w-[85%]"/>
                <Image src={Section4Image2} alt="" className="w-[30%] sm:w-[85%] "/>
                <Image src={Section4Image3} alt="" className="w-[30%] sm:w-[85%]"/>
            </div>
        </div>
    )
}

export default Section4
