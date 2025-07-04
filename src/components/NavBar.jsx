import { useState } from "react";
import logoWhite from "../assets/NKSW.png";
import logoBlack from "../assets/NKS.png";
import { Moon, SunMedium } from "lucide-react";
export default function NavBar({ isScrolled }) {
  const [isDark, setIsDark] = useState(true);
  const [hamburgerClick, setHamburgerClick] = useState(false);

  function handleToggleDark (){
    setIsDark((prev)=>!prev);
          document.documentElement.classList.toggle("dark");
  }

  return (
    <div>
      <div
        className={`fixed w-full z-40 transition-colors duration-500 ease [transition-delay:0.3s] ${
          isScrolled ? isDark ? "bg-black/40 backdrop-blur-md" : "backdrop-blur-md" : undefined
        }`}
      >
        <div
          className={`max-w-screen-2xl h-16 m-auto flex flex-row md:justify-start gap-20 items-center p-4 justify-between transition-[height] duration-500 ease-in-out  ${
            isScrolled ? "md:h-14" : "md:h-40"
          }`}
        >
          <div>
            <img className="w-12" src={isDark ? logoWhite : logoBlack} alt="" />
          </div>
          <div className="hidden md:flex flex-row gap-10 text-primary">
            <span>Home</span>
            <span>About</span>
            <span>Project</span>
            <span>Contact</span>
          </div>
          <div
            className="text-white md:hidden"
            onClick={() => setHamburgerClick((prev) => !prev)}
          >
            {hamburgerClick ? "\u00D7" : "\u2630"}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-10">
          {isDark ? (
            <SunMedium size={24} color="white" onClick={handleToggleDark} />
          ) : (
            <Moon size={24} color="black" onClick={handleToggleDark}/>
          )}
        </div>
      </div>
      <div
        className={`w-full h-screen bg-[#202020] z-50  flex-col items-center justify-center gap-4 font-bold text-white md:hidden ${
          hamburgerClick ? "flex" : "hidden"
        }`}
      >
        <span>Home</span>
        <span>About</span>
        <span>Project</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
