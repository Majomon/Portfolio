import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProyectsWebs from "./components/Proyects/ProyectsWebs";
import ProyectsMobile from "./components/Proyects/ProyectsMobile";
import Skills from "./components/Skills/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills />
      <ProyectsWebs />
      <ProyectsMobile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
