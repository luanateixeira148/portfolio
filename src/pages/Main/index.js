import ProjectsComp from '../../components/ProjectsGrid';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import "./main-page.scss";

function Main() {
  return (
    <div className="main" id='main'>
      <NavBar color='yellow' />
      <Hero />
      <ProjectsComp />
      <About />
      <Skills />
      <Contact />
      <Footer color='yellow' />
    </div>
  );
}

export default Main;