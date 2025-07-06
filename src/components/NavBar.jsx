import { useEffect, useState } from "react";
import logoWhite from "../assets/NKSW.png";
import logoBlack from "../assets/NKS.png";
import { Moon, Sun } from "lucide-react";

export default function NavBar({ isScrolled }) {
  const [isDark, setIsDark] = useState(true);
  const [hamburgerClick, setHamburgerClick] = useState(false);

  const navList = [
    { key: "Home", name: "Home", link: "home" },
    { key: "About", name: "About", link: "about" },
    { key: "Skills", name: "Skills", link: "skills" },
    { key: "Project", name: "Project", link: "project" },
    { key: "Contact", name: "Contact", link: "contact" },
  ];

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
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-colors duration-500 ease [transition-delay:0.3s] ${
      isScrolled
        ? isDark
          ? "bg-black/40 backdrop-blur-md"
          : "backdrop-blur-md"
        : ""
    }`}>
      <div className={`max-w-screen-2xl h-16 m-auto flex items-center justify-between px-4 transition-[height] duration-500 ease-in-out ${
        isScrolled ? "md:h-14" : "md:h-40"
      }`}>
        {/* Logo */}
        <img className="w-12" src={isDark ? logoWhite : logoBlack} alt="Logo" />

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row gap-10 text-primary">
          {navList.map(({ name, link, key }) => (
            <a key={key} href={`#${link}`} className="hover:underline">
              {name}
            </a>
          ))}
        </div>

        {/* Theme Toggle + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle Theme"
            onClick={handleToggleDark}
            className="text-primary"
          >
            {isDark ? (
              <Sun size={24} className="text-orange-100" />
            ) : (
              <Moon size={24} className="text-blue-900" />
            )}
          </button>

          <button
            aria-label="Toggle Navigation"
            className="text-white md:hidden text-2xl"
            onClick={() => setHamburgerClick((prev) => !prev)}
          >
            {hamburgerClick ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`w-full h-screen bg-[#202020] z-50 flex-col items-center justify-center gap-6 font-bold text-white md:hidden transition-all duration-300 ${
          hamburgerClick ? "flex" : "hidden"
        }`}
      >
        {navList.map(({ name, link, key }) => (
          <a
            key={key}
            href={`#${link}`}
            onClick={() => setHamburgerClick(false)}
            className="text-xl"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
