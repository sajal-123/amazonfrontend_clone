import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import product_0_small from '../../public/images/product_0_small.jpg';
import product_1_small from '../../public/images/product_1_small.jpg';
import product_2_small from '../../public/images/product_2_small.jpg';
import product_3_small from '../../public/images/product_3_small.jpg';
import product_4_small from '../../public/images/product_4_small.jpg';
import product_5_small from '../../public/images/product_5_small.jpg';
import product_6_small from '../../public/images/product_6_small.jpg';
import product_7_small from '../../public/images/product_7_small.jpg';
import product_8_small from '../../public/images/product_8_small.jpg';
import product_9_small from '../../public/images/product_9_small.jpg';
import product_10_small from '../../public/images/product_10_small.jpg';
import product_11_small from '../../public/images/product_11_small.jpg';
import product_12_small from '../../public/images/product_12_small.jpg';
import product_13_small from '../../public/images/product_13_small.jpg';

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  const productImages = new Map([
    [0, product_0_small],
    [1, product_1_small],
    [2, product_2_small],
    [3, product_3_small],
    [4, product_4_small],
    [5, product_5_small],
    [6, product_6_small],
    [7, product_7_small],
    [8, product_8_small],
    [9, product_9_small],
    [10, product_10_small],
    [11, product_11_small],
    [12, product_12_small],
    [13, product_13_small],
  ]);

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from(productImages.entries()).map(([key, src]) => (
          <SwiperSlide key={key}>
            <Link to={`/product/${key}`}>
              <img
                src={src}
                alt={`Carousel product ${key}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
