import SkillsSwiper from "../SkillsSwiper";
import SkillsBlock from "../SkillsBlock";
import "./skills.scss";

function Skills () {

  return (
    <div className="skills">
      <main>
        <div className="swiper-container"> 
          <SkillsSwiper />
        </div>
        <div className="skills-block-container"> 
          <SkillsBlock />
        </div>
      </main>
    </div>
  )
}

export default Skills;