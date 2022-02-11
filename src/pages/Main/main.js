import ProjectsComp from '../../components/ProjectsGrid';
import Home from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer';
import "./main-page.scss";

function Main() {
  return (
    <div className="main">
      <Home />
      <ProjectsComp />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;