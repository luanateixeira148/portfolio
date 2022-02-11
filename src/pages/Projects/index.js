import './projects.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import { projectArray } from "../../data-files/projects-array";

function Projects() {
  return (
    <div className="projects-page">
      <Header showBackIcon={true} />
      <main>
        <header>
          <h1>Projects</h1>
        </header>
        {projectArray.map((project) => (
          <ProjectCard 
            project={project}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Projects;