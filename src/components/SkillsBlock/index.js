import SkillsCard from '../SkillsCard';
import './skills-block.scss';
import { skillsArray } from '../../data-files/skills-array';

function SkillsBlock () {

  return (
    <div className='skills-block'>
      {skillsArray.map((skill) => (
        <div className='skills-card-container'>
          <SkillsCard 
            skill={skill}
          />
        </div>
      ))}
    </div> 
  );

}

export default SkillsBlock;