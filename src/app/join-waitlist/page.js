"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const JoinWaitlistPage = () => {
    useEffect(() => {
        // Load Tally embed script dynamically
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
            if (typeof Tally !== "undefined") {
            Tally.loadEmbeds();
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div className="bg-[#f8ecdd]">
            <nav className="top-0 left-0 w-full h-[88px] sm:h-[70px] flex items-center px-[108px] sm:px-[30px] bg-[#F8ecdd] z-10 mb-[30px]">
                <Navbar />
            </nav>
            <div className='min-h-screen h-auto w-full bg-[#F8ecdd] flex justify-center items-center text-[30px] font-bold leading-[120%] tracking-[0em] text-white'>
            <iframe
                data-tally-src="https://tally.so/embed/mOdg6k?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="996"
                className="w-[60%]"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Sign Up!"
            ></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default JoinWaitlistPage;