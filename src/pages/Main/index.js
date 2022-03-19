import ProjectsComp from '../../components/ProjectsGrid';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import "./main-page.scss";

function Main() {
  return (
    <div className="main" id='main'>
      <Hero />
      <About />
      <ProjectsComp />
      <Skills />
      <Contact />
    </div>
  );
}

export default Main;