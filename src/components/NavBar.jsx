import { useEffect, useState } from "react";
import logoWhite from "../assets/NKSW.png";
import logoBlack from "../assets/NKS.png";
import { Moon, Sun } from "lucide-react";
export default function NavBar({ isScrolled }) {
  const [isDark, setIsDark] = useState(true);
  const [hamburgerClick, setHamburgerClick] = useState(false);

  function handleToggleDark() {
    setIsDark((prev) => {
      const themeSelected = !prev;
      localStorage.setItem("theme", themeSelected ? "dark" : "light");
      return themeSelected;
    });
    document.documentElement.classList.toggle("dark");
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (currentTheme == "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const navList = [
    {key: 'Home', name: 'Home' , link:'home'},
    {key: 'About', name: 'About' , link:'about'},
    {key: 'Skills', name: 'Skills' , link:'skills'},
    {key: 'Project', name: 'Project' , link:'project'},
    {key: 'Contact', name: 'Contact' , link:'contact'},
  ];

  return (
    <div>
      <div
        className={`fixed w-full z-40 transition-colors duration-500 ease [transition-delay:0.3s] ${
          isScrolled
            ? isDark
              ? "bg-black/40 backdrop-blur-md"
              : "backdrop-blur-md"
            : undefined
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
            {navList.map(({ name, link, key }) => (
              <a key={key} href={`#${link}`}>
                {name}
              </a>
            ))}
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
            <Sun size={24} className="text-orange-100" onClick={handleToggleDark} />
          ) : (
            <Moon size={24} className="text-blue-900" onClick={handleToggleDark} />
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
