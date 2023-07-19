/* eslint-disable import/no-unresolved */
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banners from '../../assets/banners/banners';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/autoplay';

function Slider() {
  return (
    <div className="swiper-container">
      <Swiper
        modules={ [Autoplay] }
        autoplay={ { delay: 5000 } }
        slidesPerView={ 1 }
      >
        { banners.map((item) => (
          <SwiperSlide key={ item.id }>
            <img
              src={ item.img }
              alt="banner"
              className="swiper-slide__image"
            />
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  );
}

export default Slider;
