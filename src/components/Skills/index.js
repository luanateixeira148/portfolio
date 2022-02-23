import SkillsSwiper from "../SkillsSwiper";
import SkillsBlock from "../SkillsBlock";
import SectionTags from "../SectionTags";
import "./skills.scss";

function Skills () {

  return (
    <div className="skills">
      <SectionTags 
        text={"< skills >"}
      />
      <main>
        <div className="swiper-container"> 
          <SkillsSwiper />
        </div>
        <div className="skills-block-container"> 
          <SkillsBlock />
        </div>
      </main>
      <SectionTags 
        text={"</ skills >"}
      />
    </div>
  )
}

export default Skills;