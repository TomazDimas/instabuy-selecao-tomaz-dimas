/* eslint-disable import/no-unresolved */
import React from 'react';
import propTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsLightningCharge } from 'react-icons/bs';
import './ProductBar.css';
import PromoProductCell from '../ProductCell/PromoProductCell';

function PromoProductBar({ products }) {
  const { innerWidth } = window;
  const desktopWidth = 960;

  const setSlidesProductBar = () => {
    const desktopNumber = 5;
    const mobileNumber = 3;
    if (innerWidth > desktopWidth) return desktopNumber;
    return (innerWidth > desktopWidth ? desktopNumber : mobileNumber);
  };

  const setSpaceProductBar = () => {
    const desktopNumber = 150;
    const mobileNumber = 120;
    return (innerWidth > desktopWidth ? desktopNumber : mobileNumber);
  };

  return (
    <div className="product-bar-container">
      <h1 className="product-bar__title">
        <BsLightningCharge className="product-bar__icon" />
        Ofertas
      </h1>
      <Swiper
        pagination={ { clickable: true } }
        navigation
        spaceBetween={ setSpaceProductBar() }
        modules={ [Navigation] }
        slidesPerView={ setSlidesProductBar() }
        className="product-container"
      >
        {products.map((product) => (
          <SwiperSlide key={ product.id }>
            <PromoProductCell data={ product } />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PromoProductBar;

PromoProductBar.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
