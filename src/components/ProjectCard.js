import lotify from "../assets/Lotify.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./project-card.scss";

function ProjectCard(props) {
  const project = props.project;

  return (
    <div className="project-card">
      <img src={lotify} alt="Lotify" className="project-card-img"/>
      <span className="title">
        <h2 className="off-white">{project.title}</h2>
        <FontAwesomeIcon icon={faGithub} className="off-white icon"/>
      </span>
      <p className="off-white">{project.description}</p>
    </div>
  );
}

export default ProjectCard;