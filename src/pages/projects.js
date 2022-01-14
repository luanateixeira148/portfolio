import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projectArray } from "../data-files/projects-array";

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <main>
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