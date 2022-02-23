import "./skills-card.scss";

function SkillsCard (props) {

  const skill = props.skill;

  return (
    <div className="skill-card">
      <header>
        <h2>{skill.title}</h2>
      </header>
      <main className="skills-list">
        <hr />
        <ul>
          {skill.skills.map((item) => (
            <li>{item}</li>
            ))}
        </ul>
      </main>
    </div>
  );

}

export default SkillsCard;