import './projects.scss';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ProjectCard from "../../components/ProjectCard";
import { projectArray } from "../../data-files/projects-array";

function Projects() {
  return (
    <div className="projects-page">
      <NavBar color='transparent' />      
      <main>
        {projectArray.map((project) => (
          <ProjectCard 
            project={project}
          />
        ))}
      </main>
      <Footer color ='transparent' />
    </div>
  );
}

export default Projects;