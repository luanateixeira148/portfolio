import SkillsSwiper from "../SkillsSwiper";
import "./skills.scss";

function Skills () {

  return (
    <div className="skills">
      <main>
        <h1 className="title">&lt; skills &gt;</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue suscipit urna, sed interdum ex. Donec ex mauris, molestie nec velit et, mollis interdum nisl. Fusce a faucibus est. Sed faucibus eget est nec placerat. Aenean arcu eros, scelerisque vitae aliquam sit amet, scelerisque sit amet lorem. Donec vel hendrerit eros.
        </p>
      </main>
      <aside>
          <SkillsSwiper />
      </aside>
    </div>
  )
}

export default Skills;