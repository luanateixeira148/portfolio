import './projects.scss';
import ProjectCard from "../../components/ProjectCard";
import { projectArray } from "../../data-files/projects-array";

function Projects() {
  return (
    <div className="projects-page">
      <main>
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