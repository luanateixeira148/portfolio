import SkillsSwiper from "../Skills/SkillsSwiper";
import "./skills.scss";

function Skills () {

  return (
    <div className="skills">
      <header>
        <h3 className="yellow">&lt; skills &gt;</h3>
      </header>

      <main>
        <SkillsSwiper />
      </main>

      <footer>
        <h3 className="yellow">&lt;/ skills &gt;</h3>
      </footer>
    </div>
  );

}

export default Skills;