import { useState } from "react";
import logo from "../assets/NKSW.png";
export default function NavBar({ isScrolled }) {

    const [hamburgerClick, setHamburgerClick] = useState(false);

  return (
    <div>
      <div
        className={`fixed w-full z-40 transition-colors duration-500 ease [transition-delay:0.3s] ${
          isScrolled ? "bg-black/40 backdrop-blur-md " : undefined
        }`}
      >
        <div
          className={`max-w-screen-2xl h-16 m-auto flex flex-row md:justify-start gap-20 items-center p-4 justify-between transition-[height] duration-500 ease-in-out  ${
            isScrolled ? "md:h-14" : "md:h-40"
          }`}
        >
          {/* <div className={`max-w-screen-2xl h-16 m-auto flex flex-row gap-20 items-center p-4 justify-between  ${isScrolled ? "md:h-20" : "md:h-40"} md:justify-start`}> */}
          <div>
            <img className="w-12" src={logo} alt="" />
          </div>
          <div className="hidden md:flex flex-row gap-10 text-white">
            <span>Home</span>
            <span>About</span>
            <span>Project</span>
            <span>Contact</span>
          </div>
          <div className="text-white md:hidden" onClick={()=>setHamburgerClick(prev=>!prev)}>{hamburgerClick ? "\u00D7" : "\u2630"}</div>
        </div>
      </div>
      <div className={`w-full h-screen bg-[#202020] z-50  flex-col items-center justify-center gap-4 font-bold text-white md:hidden ${hamburgerClick ? "flex" : "hidden"}`}>
        <span>Home</span>
        <span>About</span>
        <span>Project</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
