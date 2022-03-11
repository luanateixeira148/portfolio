import "./skills-card.scss";

function SkillsCard (props) {

  const skill = props.skill;

  return (
    <div className="skill-card">
      <h2 className="h2">{skill.title}</h2>
      <hr />
        <ul className="skill-list">
          {skill.skills.map((item) => (
            <li>{item}</li>
            ))}
        </ul>
    </div>
  );

}

export default SkillsCard;