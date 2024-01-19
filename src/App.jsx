import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Silder from "./components/Silder";
import Version2 from "./components/Version2";


function App() {
  const [isOpen,setisOpen] = useState(true);
  const click = () => {
    setisOpen(!isOpen);

  }

  return (
    <>
    <Navbar  />
    <Silder click={click} open={isOpen}/>
    {isOpen ? <Hero /> : <Version2 />}
    
    
    
     

    
    

      
    </>
  )
}

export default App
