import './App.css'
import { useState, useEffect } from "react"
import Home from './components/Home'
import NavBar from './components/NavBar'
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
      <div className="bg-ellipse-center w-full h-[300vh]">
      <NavBar isScrolled = {isScrolled}></NavBar>
      <Home isScrolled = {isScrolled}></Home>
      
     </div>
    </>
  )
}

export default App



