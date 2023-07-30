/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
import React from 'react';
import propTypes from 'prop-types';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';

function Slider({ banners }) {
  return (
    <div className="swiper-container">
      <Swiper
        modules={ [Autoplay] }
        autoplay={ { delay: 5000 } }
        slidesPerView={ 1 }
        loop
      >
        { banners.map((banner) => (
          <SwiperSlide key={ banner.id }>
            <img
              src={ `https://assets.instabuy.com.br/ib.store.banner/bnr-${banner.image}` }
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

Slider.propTypes = {
  productData: propTypes.shape({}),
}.isRequired;
