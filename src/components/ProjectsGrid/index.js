import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import lotify from "../../assets/Lotify.png"
import "./projects.scss";

function ProjectsGrid () {

  return (
    <div className="projects-comp-container">
      <header>
        <h3>&lt; projects &gt;</h3>
      </header>
      <main>
        <div className="projects-comp-grid">
          <img src={lotify} alt="Lotify" className="projects-comp-img"/>
          <img src={lotify} alt="Lotify" className="projects-comp-img"/>
          <img src={lotify} alt="Lotify" className="projects-comp-img"/>
          <img src={lotify} alt="Lotify" className="projects-comp-img"/>
        </div>
        <div className="projects-comp-button">
          <Link to="/portfolio/projects">
            <PrimaryButton text={"SEE MORE"} />
          </Link>
        </div>
      </main>
      <footer>
        <h3>&lt;/ projects &gt;</h3>
      </footer>
    </div>
  );

}

export default ProjectsGrid;