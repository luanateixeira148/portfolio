import "./card.scss";

function Card (props) {

  const skill = props.skill;

  return (
    <div className="skill-card">
      <h2>{skill.title}</h2>
      <p>{skill.description}</p>
      <ul>
        {skill.skills.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );

}

export default Card;