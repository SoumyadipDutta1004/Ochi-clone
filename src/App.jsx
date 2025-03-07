import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from 'locomotive-scroll';



export default function App() {
  
  const scroll = new LocomotiveScroll();
  
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
    </div>
  )
}
