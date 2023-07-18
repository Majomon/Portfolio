import About from "./components/About/About";
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
    </div>
  );
}

export default App;
