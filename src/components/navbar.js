"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons

import ProTribeLogo from "../../public/protribe logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get current route

    return (
        <nav className="fixed top-0 left-0 w-full h-[88px] sm:h-[70px] flex items-center px-[108px] sm:px-[30px] bg-[rgba(1,13,35,0.4)] z-10">
            <Link href="/">
                <Image src={ProTribeLogo} alt="logo" height={40} className="cursor-pointer" />
            </Link>

            {/* Hamburger Menu (Visible only on mobile) */}
            <div className="hidden sm:flex ml-auto">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="flex flex-row text-[16px] ml-auto cursor-pointer text-white sm:hidden">
                <div
                    className={`flex justify-center items-center px-[24px] h-[46px] font-bold leading-[150%] 
                    ${pathname === "/" ? "border-b-2 border-[#E3A008] text-[#E3A008]" : "text-[#d1d5db]"}`}
                >
                    <Link href="/">Home</Link>
                    {/* Home */}
                </div>
                {/* <Link href="https://community.protribe.so/" className=" py-3 hover:bg-[#E3A008] rounded-full hover:text-black flex justify-center items-center px-[24px] h-[46px] text-[#d1d5db] leading-[150%]"> */}
                <Link href="/" className=" py-3 hover:bg-[#E3A008] rounded-full hover:text-black flex justify-center items-center px-[24px] h-[46px] text-[#d1d5db] leading-[150%]">
                    Community
                </Link>
            </div>

            <div className="flex flex-row gap-x-[12px] ml-[20px] sm:hidden">
                {/* <Link href="https://community.protribe.so/">
                    <div className="flex justify-center items-center px-[24px] h-[46px] font-medium text-[14px] text-[#E3A008] leading-[100%] tracking-[0.02em]">
                        Sign In
                    </div>
                </Link> */}
                <Link href="/join-waitlist">
                    <button className="bg-[#E3A008] text-[#1F2A37] h-[46px] px-[24px] rounded-full cursor-pointer font-medium text-[14px] leading-[100%] tracking-[0.02em]">
                        Apply Now
                    </button>
                </Link>
            </div>

            {/* Mobile Dropdown Menu with Active Highlight */}
            <div
                className={`absolute top-[70px] right-0 w-[200px] bg-[#010D23] text-white shadow-lg rounded-lg flex flex-col transform transition-all duration-300 ease-in-out sm:flex 
                    ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
            >
                <Link
                    href="/"
                    className={`px-4 py-3 hover:bg-gray-700 transition ${
                        pathname === "/" ? "border-l-4 border-[#E3A008] text-[#E3A008] font-bold" : ""
                    }`}
                >
                    Home
                </Link>
                <Link href="https://community.protribe.so/" className="px-4 py-3 hover:bg-gray-700">
                    Community
                </Link>
                {/* <Link href="https://community.protribe.so/" className="px-4 py-3 hover:bg-gray-700">
                    Sign In
                </Link> */}
                <Link
                    href="/join-waitlist"
                    className="bg-[#E3A008] text-[#1F2A37] mt-[5px] m-[10px] py-2 rounded-full cursor-pointer font-medium text-[14px] tracking-[0.02em] text-center"
                >
                    Apply Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
