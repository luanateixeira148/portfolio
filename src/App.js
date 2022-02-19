import './App.scss';
import Main from './pages/Main/main';
import { Routes, Route, Link } from "react-router-dom";
import Projects from './pages/Projects';
import NavBar from './components/NavBar';

function App() {
  return (
    // <div className='coming-soon'>
    //   <h1 className='coral'>Coming soon!</h1>
    // </div>
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/portfolio" element={<Main />} />
        <Route path="/portfolio/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;