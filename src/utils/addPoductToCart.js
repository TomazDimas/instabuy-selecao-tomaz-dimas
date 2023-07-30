const addProductToCart = (productData, cartAmmount, cartProducts, setCartProducts) => {
  setCartProducts([...cartProducts, productData]);
  const currentCart = [...cartProducts];
  const formatProduct = {
    id: productData.id,
    ammount: cartAmmount,
    data: productData,
  };
  const productIndex = currentCart.findIndex(
    (product) => product.id === productData.id,
  );
  if (productIndex >= 0) {
    currentCart[productIndex].ammount = cartAmmount;
    setCartProducts(currentCart);
  } else {
    setCartProducts([...cartProducts, formatProduct]);
  }
};

export default addProductToCart;
