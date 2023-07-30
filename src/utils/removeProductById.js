const removeProductById = (id, cartProducts, setCartProducts) => {
  const currentCart = [...cartProducts];
  const productIndex = currentCart
    .findIndex((product) => product.id === id);
  currentCart.splice(productIndex, 1);
  setCartProducts(currentCart);
};

export default removeProductById;
