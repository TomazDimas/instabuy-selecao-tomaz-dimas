/* eslint-disable import/no-unresolved */
import React from 'react';
import propTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsLightningCharge } from 'react-icons/bs';
import ProductCell from '../ProductCell/ProductCell';
import './ProductBar.css';

function ProductBar({ products }) {
  return (
    <div className="product-bar-container">
      <h1 className="product-bar__title">
        <BsLightningCharge className="product-bar__icon" />
        Ofertas
      </h1>
      <Swiper
        pagination={ { clickable: true } }
        navigation
        spaceBetween={ 50 }
        modules={ [Navigation] }
        slidesPerView={ 6 }
        className="product-container"
      >
        {products.map((product) => (
          <SwiperSlide key={ product.id }>
            <ProductCell data={ product } />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductBar;

ProductBar.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
