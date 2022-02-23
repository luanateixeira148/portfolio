import lotify from "../../assets/Lotify.png";
import "./project-card.scss";

function ProjectCard(props) {
  const project = props.project;

  return (
    <div className="project-card">
      <a href={project.project_url} target="_blank" >
        <img src={lotify} alt="Lotify" className="project-card-img" />
      </a>
      <a href={project.project_url} target="_blank" >
        <h2>{project.title}</h2>
      </a>
      <p>{project.description}</p>
      <p><span>Tech Stack: </span>{project.tech_stack}</p>
    </div>
  );
}

export default ProjectCard;