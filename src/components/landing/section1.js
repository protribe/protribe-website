// const Section1 = () => {
//     const videoAttributes = {
//         autoPlay: true,
//         muted: true,
//         loop: true,
//     };

//     return (
//         <div className="h-screen w-full relative bg-[#010D23]">
//             <video 
//             {...videoAttributes} 
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             >
//             <source src="/woman_running.webm" type="video/webm" />
//             Your browser does not support the video tag.
//             </video>
//             <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#010D23] to-transparent"></div>
//         </div>
//     )
// }

// export default Section1

const Section1 = () => {
    const videoAttributes = {
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true, // Helps with mobile playback
    };

    return (
        <div className="h-screen w-full relative bg-[rgb(1,13,35)] sm:h-auto sm:min-h-[30vh] sm:object-center">
            {/* Background Video */}
            <video 
                {...videoAttributes} 
                className="absolute top-0 left-0 w-full h-full object-cover sm:h-auto sm:min-h-full sm:object-[45%]"
            >
                {/* <source src="/woman_running.webm" type="video/webm" /> */}
                <source src="/protribe (3).mp4" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay for readability */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 sm:h-1/2 bg-gradient-to-t from-[#010D23] to-transparent"></div>
        </div>
    )
}

export default Section1;
