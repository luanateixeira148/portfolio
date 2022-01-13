import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import "swiper/css";
import "swiper/css/pagination";
import "./skills-swiper.scss";
import SwiperCore, { Pagination } from 'swiper';


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
          
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        
        </Swiper>  
  );

}

export default SkillsSwiper;