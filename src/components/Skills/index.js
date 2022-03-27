import SkillsSwiper from "../SkillsSwiper";
import "./skills.scss";

function Skills () {

  return (
    <div className="skills">
      <main>
        <h1 className="title">&lt; skills &gt;</h1>
        <p>
          During my years studying and working as a web developer, I have had the opportunity to design and develop applications for both mobile and web. I have also been exposed to UI/UX Design, documentation best practices as well as collaboration and productivity practices such as Agile Development. I am a proactive problem-solver, with a hands-on approach, who values communication and team effort.
        </p>
      </main>
      <aside>
          <SkillsSwiper />
      </aside>
    </div>
  )
}

export default Skills;