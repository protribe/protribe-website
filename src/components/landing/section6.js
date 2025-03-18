import Link from "next/link";

const Section6 = () => {
    return (
        <div className='flex flex-col items-center justify-center py-[100px] w-full relative bg-white sm:h-auto sm:py-[40px] sm:px-[15px]'>
            <div className='text-[#1f2a37] text-[30px] font-bold leading-[120%] tracking-[0em] mb-[40px] text-center'>
                Make Your Mark, Start Now.
            </div>

            <Link href="/join-waitlist">
                <button className="bg-[#E3A008] text-[#1F2A37] py-[20px] px-[30px] rounded-full cursor-pointer font-medium text-[16px] leading-[100%] tracking-[0.02em]">
                {/* Join Now */}
                Apply Now
                </button>
            </Link>
        </div>
    )
}

export default Section6;