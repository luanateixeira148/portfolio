import SkillsSwiper from "../SkillsSwiper/SkillsSwiper";
import SkillsBlock from "../SkillsBlock/SkillsBlock";
import "./skills.scss";

function Skills () {

  return (
    <div className="skills">
      <header>
        <h3>&lt; skills &gt;</h3>
      </header>

      <main>
        <div className="swiper-container"> 
          <SkillsSwiper />
        </div>
        <div className="skills-block-container"> 
          <SkillsBlock />
        </div>
      </main>
      <footer>
        <h3>&lt;/ skills &gt;</h3>
      </footer>
    </div>
  );

}

export default Skills;