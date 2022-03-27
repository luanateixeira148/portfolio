import "./project-card.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function ProjectCard(props) {
  const project = props.project;
  const links = props.project.links;
  
  const includeIcon = function(iconStr) {
    let icon;
    if (iconStr === 'github') {
      icon = <FontAwesomeIcon icon={faGithub} className="social-icon" />;
    }
    if (iconStr === 'website') {
      icon = <FontAwesomeIcon icon={faArrowRight} className="social-icon" style={{transform: 'rotate(-45deg)'}} />;
    }
    if (iconStr === 'youtube') {
      icon = <FontAwesomeIcon icon={faYoutube} className="social-icon" />;
    }
    return icon;
  } 


  return (
    <div 
      className="project-card" id={project.id} 
      // style={{backgroundColor: project.backgroundColor}}
    >
      <aside>
        <a href={project.project_url}>
          <img src={process.env.PUBLIC_URL + project.img_url} alt="Lotify" className="project-card-img" />
        </a>
      </aside>
      <main>
        <a href={project.project_url}>
          <h2>{project.title}</h2>
        </a>
        <p>{project.description}</p>
        <p><span>Tech Stack: </span>{project.tech_stack}</p>
        <div className="social-icons-container">
          {links && links.map((link) => (
            <a href={link.url} target="_blank" >
              {includeIcon(link.icon)}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProjectCard;