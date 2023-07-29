import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import './CartItem.css';
import CartContext from '../../context/CartContext';

function CartItem({ productData }) {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleRemoveProduct = () => {
    const currentCart = [...cartProducts];
    const productIndex = currentCart
      .findIndex((product) => product.id === productData.id);
    currentCart.splice(productIndex, 1);
    setCartProducts(currentCart);
  };

  const getProductAmmount = () => {
    return cartProducts.find((product) => product.id === productData.id).ammount;
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-info-container">
        <img
          alt="produto"
          src={ `https://assets.instabuy.com.br/ib.item.image.small/s-${productData.images[0]}` }
        />
        <h2 className="cart-item__title">{productData.name}</h2>
        <input
          type="number"
          value={ getProductAmmount() }
        />
        <h2>
          {formatCurrency(productData.prices[0].price * getProductAmmount(), 'BRL')}
        </h2>
      </div>
      <button onClick={ handleRemoveProduct } className="cart-item-remove-container">
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
