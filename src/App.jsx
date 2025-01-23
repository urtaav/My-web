import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
