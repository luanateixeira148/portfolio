import './projects.scss';
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import { projectArray } from "../../data-files/projects-array";

function Projects() {
  return (
    <div className="projects-page">
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
    </div>
  );
}

export default Projects;