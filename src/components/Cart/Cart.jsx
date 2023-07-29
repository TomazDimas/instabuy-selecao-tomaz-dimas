/* eslint-disable no-magic-numbers */
import React, { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import CartContext from '../../context/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart() {
  const { cartProducts, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const getCartTotal = () => {
    if (cartProducts.length > 0) {
      const totalValue = cartProducts.reduce((acc, curr) => {
        return acc + (curr.data.prices[0].price * curr.ammount);
      }, 0);
      return totalValue;
    } return 0;
  };

  return (
    <div className={ isCartOpen ? 'cart-container' : 'cart-container--active' }>
      <div className="cart-title-container">
        <BiArrowBack onClick={ handleCloseCart } className="cart-title__icon" />
        <h2 className="cart-title__title">Meu carrinho</h2>
        <h3 className="cart-title__clean">Limpar</h3>
      </div>
      <div className="cart-items-container">
        {cartProducts.map((product) => (
          <CartItem key={ product.id } productData={ product.data } />
        ))}
      </div>
      <div className="cart-button-container">
        <div className="cart-inner-button-container">
          <h2 className="cart-inner-button__text">Finalizar Compra</h2>
          <h2 className="cart-inner-button__price">
            { formatCurrency(getCartTotal(), 'BRL') }
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
