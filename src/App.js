import './App.scss';
import Main from './pages/main';
import { Routes, Route, Link } from "react-router-dom";
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
