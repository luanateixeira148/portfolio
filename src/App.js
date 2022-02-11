import './App.scss';
import Main from './pages/Main/main';
import { Routes, Route, Link } from "react-router-dom";
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<Main />} />
        <Route path="/portfolio/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
