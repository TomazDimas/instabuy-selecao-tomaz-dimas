/* eslint-disable import/no-unresolved */
import React from 'react';
import propTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './ProductScreenSlider.css';

function ProductScreenSlider({ images }) {
  return (
    <div className="product-slider-container">
      <Swiper
        pagination={ { clickable: true } }
        spaceBetween={ 0 }
        slidesPerView={ 1 }
        modules={ [Pagination] }
        className="product-image-slider"
      >
        {images.map((image) => (
          <SwiperSlide key={ image }>
            <img alt="product-thumb" src={ `https://assets.instabuy.com.br/ib.item.image.big/b-${image}` } />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductScreenSlider;

ProductScreenSlider.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
