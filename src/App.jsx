import { Bgprimary } from "./assets";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <div
        className="relative min-h-screen"
        style={{
          background: `url(${Bgprimary}) no-repeat fixed center / cover`,
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Contact/>  
      </div>
    </div>
  );
}

export default App;
