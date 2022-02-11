import ProjectsComp from '../../components/ProjectsGrid';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import "./main-page.scss";

function Main() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <ProjectsComp />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;