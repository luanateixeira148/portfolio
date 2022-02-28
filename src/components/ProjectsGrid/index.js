import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PrimaryButton from "../PrimaryButton";
import SectionTags from "../SectionTags";
import { projectArray } from "../../data-files/projects-array";
import "./projects.scss";

function ProjectsGrid () {

  return (
    <div className="projects-comp-container">
      <SectionTags 
        text={"< projects >"}
      />
      <main>
        <div className="projects-comp-grid">
          {projectArray.map((project) => (
            <HashLink to={"/portfolio/projects#" + project.id}>
              <img 
                src={process.env.PUBLIC_URL + project.img_url}
                alt="Lotify" 
                className="projects-comp-img"
              />
            </HashLink>
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
      <SectionTags 
        text={"</ projects >"}
      />
    </div>
  );

}

export default ProjectsGrid;