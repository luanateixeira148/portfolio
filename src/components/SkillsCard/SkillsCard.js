import "./skills-card.scss";

function SkillsCard (props) {

  const skill = props.skill;

  return (
    <div className="skill-card">
      <h2 className="coral">{skill.title}</h2>
      <p className="off-black">{skill.description}</p>
      <ul>
        {skill.skills.map((item) => (
          <li className="off-black">{item}</li>
        ))}
      </ul>
    </div>
  );

}

export default SkillsCard;