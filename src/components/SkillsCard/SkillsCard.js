import "./skills-card.scss";

function SkillsCard (props) {

  const skill = props.skill;

  return (
    <div className="skill-card">
      <header>
        <h2 className="coral">{skill.title}</h2>
      </header>
      <main className="skills-list">
        <ul>
          {skill.skills.map((item) => (
            <li className="off-black">{item}</li>
            ))}
        </ul>
      </main>
    </div>
  );

}

export default SkillsCard;