import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import banners from '../../assets/banners/banners';

function Slider() {
  console.log(banners);

  return (
    <div>
      <Swiper
        className="swiper"
        slidesPerView={ 1 }
        modules={ [Autoplay] }
        autoplay={ { delay: 1000 } }
      >
        {banners.map((banner) => (
          <SwiperSlide key={ banner.id }>
            <img src={ banner.img } alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
