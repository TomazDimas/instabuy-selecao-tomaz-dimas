import React from 'react';
import propTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import './CartItem.css';

function CartItem({ productData }) {
  return (
    <div className="cart-item-container">
      <div className="cart-item-info-container">
        <img
          alt="produto"
          src={ `https://assets.instabuy.com.br/ib.item.image.small/s-${productData.images[0]}` }
        />
        <h2 className="cart-item__title">
          { productData.name }
        </h2>
        <input type="number" value={ 0 } />
        <h2>{formatCurrency(productData.prices[0].price, 'BRL')}</h2>
      </div>
      <button className="cart-item-remove-container">
        <BsTrash className="cart-item-remove__icon" />
        <h3 className="cart-item-remove__text">Remover</h3>
      </button>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  productData: propTypes.shape({}),
}.isRequired;
