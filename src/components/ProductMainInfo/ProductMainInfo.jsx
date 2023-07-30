/* eslint-disable react/jsx-max-depth */
import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { BsTrash, BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import './ProductMainInfo.css';
import formatCurrency from '../../utils/formatCurrency';
import ProductScreenSlider from '../ProductScreenSlider/ProductScreenSlider';
import CartContext from '../../context/CartContext';
import removeProductById from '../../utils/removeProductById';
import addProductToCart from '../../utils/addPoductToCart';

function ProductMainInfo({ productData }) {
  const [cartAmmount, setCartAmmount] = useState(1);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleClickAdd = () => {
    const currentAmmount = cartAmmount;
    setCartAmmount(currentAmmount + 1);
  };

  const handleClickDecrease = () => {
    const currentAmmount = cartAmmount;
    setCartAmmount(currentAmmount - 1);
  };

  return (
    <div className="main-container">
      <ProductScreenSlider images={ productData.images } />
      <div className="main-info-container">
        <h2 className="main-info-container__title">{productData.name}</h2>
        <h3 className="main-info-container__brand">{productData.brand}</h3>

        {productData.prices[0].promo_price ? (
          <div className="main-price-container">
            <h2 className="main-price-container__promo-price">
              {`${formatCurrency(
                productData.prices[0].promo_price,
                'BRL',
              )}/uni`}
            </h2>
            <h3 className="main-price-container__regular-price">
              {formatCurrency(productData.prices[0].price, 'BRL')}
            </h3>
          </div>
        ) : (
          <div className="main-price-container">
            <h2 className="main-price-container__price">
              {formatCurrency(productData.prices[0].price, 'BRL')}
            </h2>
          </div>
        )}

        <div className="main-button-container">
          <div className="main-add-buttons-container">
            { cartAmmount < 1 ? (

              <button
                className="main-add-buttons__button main-add-button__remove"
                type="button"
              >
                <BsTrash />
              </button>
            ) : (
              <button
                onClick={ handleClickDecrease }
                className="main-add-buttons__button"
                type="button"
              >
                <AiOutlineMinus />
              </button>
            ) }
            <span className="main-add-buttons__text">{cartAmmount}</span>
            <button
              onClick={ handleClickAdd }
              className="main-add-buttons__button"
              type="button"
            >
              <BsPlusLg />
            </button>
          </div>
          { cartAmmount === 0 ? (
            <button
              onClick={ () => removeProductById(
                productData.id,
                cartProducts,
                setCartProducts,
              ) }
              className="main-button-container__add"
              type="button"
            >
              Remover
            </button>
          ) : (

            <button
              onClick={ () => addProductToCart(
                productData,
                cartAmmount,
                cartProducts,
                setCartProducts,
              ) }
              className="main-button-container__add"
              type="button"
            >
              Adicionar
            </button>
          ) }
        </div>
      </div>
    </div>
  );
}

export default ProductMainInfo;

ProductMainInfo.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
