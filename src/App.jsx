import './App.css'
import { useState, useEffect } from "react"
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {

      const [isScrolled, setIsScrolled] = useState(false)
    useEffect(()=>{
        function handleScroll(){

            const offset = window.scrollY;
            setIsScrolled(offset > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    },[])

  return (
    <>
      <div className="background-color min-h-screen w-full transition-all duration-1000 ease-in-out">
      <NavBar isScrolled = {isScrolled}></NavBar>
      <Home isScrolled = {isScrolled}>  </Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>

     </div>
    </>
  )
}

export default App



