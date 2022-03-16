import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PrimaryButton from "../PrimaryButton";
import SectionTags from "../SectionTags";
import { projectArray } from "../../data-files/projects-array";
import "./projects.scss";

function ProjectsGrid () {

  return (
    <div className="projects-component">
        <h1 className="title">&lt; projects &gt;</h1>
        <div className="projects-comp-grid">
          {projectArray.map((project) => (
            <HashLink to={"/portfolio/projects#" + project.id} className="projects-comp-link" >
              <img 
                src={process.env.PUBLIC_URL + project.img_url}
                className="projects-comp-img"
                />
            </HashLink>
          ))}
        </div>
        <HashLink to="/portfolio/projects" className="button">
          <PrimaryButton 
            text={"SEE MORE"} 
          />
        </HashLink>
    </div>
  );

}

export default ProjectsGrid;