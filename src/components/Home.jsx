import { useEffect } from "react";

export default function Home({isScrolled}) {
    useEffect(()=>{
        setInterval(()=>{

        }, 1000)
    } ,[])
    return (
        <div className="w-full h-screen relative" id="home">
            <div className=" absolute top-1/2 -translate-y-1/2 left-[15%]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-primary">Hi,</h2>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-semibold text-primary 
                                transition-all duration-500 ease-in-out"
                >
                    I'm Niko
                </h1>
               <p className="text-base sm:text-md md:text-lg lg:text-xl tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.5em] font-normal mt-0 text-secondary">
                    IT Specialist / Web Developer
                </p>
            </div>

            <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-secondary ${isScrolled ? "opacity-0" : "opacity-100 fading-animation"} transition-opacity duration-500 ease-in-out`}>
                scroll
            </div>
        </div>
    );
}
