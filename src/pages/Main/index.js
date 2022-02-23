import ProjectsComp from '../../components/ProjectsGrid';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer';
import "./main-page.scss";

function Main() {
  return (
    <div className="main" id='main'>
      <Hero />
      <ProjectsComp />
      <About />
      <Skills />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}

export default Main;