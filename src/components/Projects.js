import "./projects.scss";
import Button from "./Button";
import lotify from "../assets/Lotify.png"

function ProjectsComp () {

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
          <Button text={"SEE MORE"} />
        </div>
      </main>
      <footer>
        <h3>&lt;/ projects &gt;</h3>
      </footer>
    </div>
  );

}

export default ProjectsComp;