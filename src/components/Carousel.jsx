import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import carousel_1 from '../../public/images/carousel_1.jpg'
import carousel_2 from '../../public/images/carousel_2.jpg'
// import carousel_3 from '../images/carousel_3.jpg'
import carousel_4 from '../../public/images/carousel_4.jpg'
import carousel_5 from '../../public/images/carousel_5.jpg'
import carousel_vid from '../../public/images/carousel_vid.mp4'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";  // Make sure to include the autoplay CSS

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,  // Optional, keeps autoplay running on user interaction
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={carousel_1} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_2} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={carousel_vid} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_4} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_5} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
