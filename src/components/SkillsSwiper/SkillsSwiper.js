import { Swiper, SwiperSlide } from 'swiper/react';
import SkillsCard from '../SkillsCard/SkillsCard';
import "swiper/css";
import "swiper/css/pagination";
import "./skills-swiper.scss";
import SwiperCore, { Pagination } from 'swiper';
import { skillsArray } from '../../data-files/skills-array';

SwiperCore.use([Pagination]);

function SkillsSwiper () {

  return (

    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        "clickable": true
      }}
    >
      {skillsArray.map((skill) => (
        <SwiperSlide>
          <SkillsCard 
            skill={skill}
          />
        </SwiperSlide>
      ))}
    </Swiper>  
  );

}

export default SkillsSwiper;