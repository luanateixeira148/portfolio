import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { projectArray } from "../../data-files/projects-array";
import "./projects.scss";

function ProjectsGrid () {

  return (
    <div className="projects-comp-container">
      <main>
        <div className="projects-comp-grid">
          {projectArray.map((project) => (
            <img 
              src={process.env.PUBLIC_URL + project.img_url}
              alt="Lotify" 
              className="projects-comp-img"
            />
          ))}
        </div>
        <div className="projects-button">
          <Link to="/portfolio/projects" className="nav-link">
            <PrimaryButton 
              text={"SEE MORE"} 
            />
          </Link>
        </div>
      </main>
    </div>
  );

}

export default ProjectsGrid;