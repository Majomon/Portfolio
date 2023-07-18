import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Proyects from "./components/Proyects/Proyects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
