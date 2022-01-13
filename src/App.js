import './App.scss';
import ProjectsComp from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <ProjectsComp />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
