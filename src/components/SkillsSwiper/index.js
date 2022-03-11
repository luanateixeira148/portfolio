import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import SkillsCard from '../SkillsCard';
import { skillsArray } from '../../data-files/skills-array';
import "swiper/css";
import "swiper/css/pagination";
import "./skills-swiper.scss";

SwiperCore.use([Pagination, Autoplay]);

function SkillsSwiper () {

  return (

    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        "clickable": true
      }}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false
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