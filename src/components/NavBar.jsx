import logo from "../assets/NKSW.png"
import { useState, useEffect } from "react"
export default function NavBar(){

    const [isScrolled, setIsScrolled] = useState(false)
    
    useEffect(()=>{
        function handleScroll(){

            const offset = window.scrollY;
            setIsScrolled(offset > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    },[])
    return(     
        <div className={`fixed w-full ${isScrolled ? "bg-black" : undefined}`}>
            <div className={`max-w-screen-2xl "h-16" m-auto flex flex-row md:h-40 md:justify-start gap-20 items-center p-4 justify-between ${isScrolled ?  "md:h-20" : "md:h-40"}`}>
                <div><img className="w-12" src={logo} alt="" /></div>
                <div className="hidden md:flex flex-row gap-10 text-white">
                    <span>Home</span>
                    <span>About</span>
                    <span>Project</span>
                    <span>Contact</span>
                </div>
                <div className="text-white md:hidden">&#9776;</div>
            </div>
        </div>
    )
}