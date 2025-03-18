import GradientNumber from '@/components/gradientNumber';

const Section5 = () => {
    return (
        <div className='flex flex-col items-center h-[400px] w-full relative bg-[#010D23] sm:h-auto sm:pb-[55px]'>
            <div className='font-bold leading-[120%] text-[36px] text-white mb-[80px] sm:mb-[40px]'>Become a Member</div>
            <div className='flex flex-col'>
            <div className='flex flex-row justify-center items-center sm:flex-col'>
                <GradientNumber number={1} />
                <div className='text-[30px] leading-[120%] tracking-[0em] text-white mt-[-20px] hidden sm:block'>Sign Up</div>
                <div className='bg-[#896105] h-[2px] w-[265px] ml-[30px] mr-[30px] sm:h-[80px] sm:w-[2px] sm:mt-[20px]'></div>

                <GradientNumber number={2} />
                <div className='text-[30px] leading-[120%] tracking-[0em] text-white mt-[-20px] hidden sm:block'>Get Matched</div>
                <div className='bg-[#896105] h-[2px] w-[265px] ml-[30px] mr-[30px] sm:h-[80px] sm:w-[2px] sm:mt-[20px]'></div>

                <GradientNumber number={3} />
                <div className='text-[30px] leading-[120%] tracking-[0em] text-white mt-[-20px] hidden sm:block'>Commit & Grow</div>
            </div>

            <div className='flex flex-row justify-between text-[30px] leading-[120%] tracking-[0em] text-white mt-[-20px] sm:hidden'>
                <div className='ml-[-25px]'>Sign Up</div>
                <div className='ml-[40px]'>Get Matched</div>
                <div className='mr-[-80px]'>Commit & Grow</div>
            </div>
            </div>
        </div>
    )
}

export default Section5;