import { Routes, Route } from "react-router-dom";
import './App.scss';
import Main from './pages/Main';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  useScrollToTop();
  return (
    <div className="app" id="app">
      <NavBar /> 
        <div className='app-body'>
          <Routes>
            <Route path="/portfolio" element={<Main />} />
            <Route path="/portfolio/projects" element={<Projects />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;