
import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import KlapesFeature from "./components/KlapesFeature";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-800">
      <Nav />
      <Hero />
      <About />
      <Experience />
      {/* <KlapesFeature /> */}
      <Projects />
      {/* FIXME */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
