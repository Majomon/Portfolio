import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-white dark:bg-[#0b1120]">
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <Home />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
