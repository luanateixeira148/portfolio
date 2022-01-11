import './App.scss';
import ProjectsComp from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <ProjectsComp />
      <About />
      <Contact />
    </div>
  );
}

export default App;
