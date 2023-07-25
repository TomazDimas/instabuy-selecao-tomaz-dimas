/* eslint-disable import/no-unresolved */
import React from 'react';
import propTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCell from '../ProductCell/ProductCell';
import './ProductBar.css';
import PromoProductCell from '../ProductCell/PromoProductCell';

function ProductBar({ data }) {
  return (
    <div className="product-bar-container">
      <h1 className="product-bar__title">{data.title}</h1>
      <Swiper
        pagination={ { clickable: true } }
        navigation
        spaceBetween={ 50 }
        modules={ [Navigation] }
        slidesPerView={ 6 }
        className="product-container"
      >
        {data.items.map((product) => (
          <SwiperSlide key={ product.id }>
            {product.prices[0].promo_price ? (
              <PromoProductCell data={ product } />
            ) : (
              <ProductCell data={ product } />
            )}
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
