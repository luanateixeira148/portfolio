import './App.scss';
import ProjectsComp from './components/Projects';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Home />
      <ProjectsComp />
      <About />
    </div>
  );
}

export default App;
