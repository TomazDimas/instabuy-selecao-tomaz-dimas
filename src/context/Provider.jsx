import React, { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import CartContext from './CartContext';

function Provider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = useMemo(
    () => ({ cartProducts, setCartProducts, isCartOpen, setIsCartOpen }),
    [cartProducts, isCartOpen],
  );

  return <CartContext.Provider value={ value }>{children}</CartContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
