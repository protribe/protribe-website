import Image from "next/image"
import Link from "next/link"

import ProTribeLogo from "../../public/protribe logo.png"
import YoutubeLogo from "../../public/youtube_logo.png"
import LinkedInLogo from "../../public/linkedin_logo.png"
import TwitterLogo from "../../public/twitter_logo.png"

const Footer = () => {
    return (
        <div className='flex flex-row items-center px-[158px] w-full h-[170px] relative bg-[#010D23] sm:flex-col sm:px-[35px] sm:items-start sm:py-[40px] sm:h-auto'>
            <Link href="/">
                <Image
                    src={ProTribeLogo}
                    alt="ProTribe Logo"
                    className="cursor-pointer"
                    height={40}
                />
            </Link>

            <div className='flex flex-row items-center py-0 my-auto ml-auto text-white sm:flex-col sm:mt-[40px] sm:ml-0 sm:items-start sm:gap-y-[10px]'>
                <Link href="/join">Join Now</Link>
                <div className='w-[0.75px] bg-[#93acaf] m-[30px] h-[15px] sm:hidden'></div>
                <Link href="/privacy-policy">
                <div className='cursor-pointer'>Privacy Policy</div>
                </Link>
                <div className='w-[0.75px] bg-[#93acaf] m-[30px] h-[15px] sm:hidden'></div>
                <Link href="/terms-condition">
                <div className='cursor-pointer'>Terms and Conditions</div>
                </Link>
            </div>

            <div className='flex flex-row gap-x-[40px] my-auto ml-[60px] sm:mt-[40px] sm:ml-0 sm:my-0 sm:items-center'>
                {/* <Image
                    src={YoutubeLogo}
                    className='w-[33px] h-auto cursor-pointer object-contain'
                    alt="YouTube Logo"
                /> */}

                <Link href="https://www.linkedin.com/company/teamprotribe/" target="_blank">
                    <Image
                        src={LinkedInLogo}
                        className='w-[33px] h-auto cursor-pointer object-contain'
                        alt="LinkedIn Logo"
                    />
                </Link>
                {/* <Image
                    src={TwitterLogo}
                    className='w-[33px] h-auto cursor-pointer object-contain'
                    alt="Twitter Logo"
                /> */}
            </div>
        </div>
    )
}

export default Footer