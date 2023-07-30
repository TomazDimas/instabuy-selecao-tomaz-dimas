import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import './ProductCell.css';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import addProductToCart from '../../utils/addPoductToCart';
import CartContext from '../../context/CartContext';

function PromoProductCell({ data }) {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const getProductAmmount = () => {
    if (cartProducts.find((product) => product.id === data.id)) {
      return cartProducts.find((product) => product.id === data.id).ammount;
    } return 0;
  };

  return (
    <div className="product-cell-container">
      <Link to={ `/p/${data.slug}` }>
        <img
          src={ `https://assets.instabuy.com.br/ib.item.image.medium/m-${data.images[0]}` }
          alt="produto"
          className="product-cell__image"
        />
        <div className="product-cell__info">
          <div className="product-cell__prices">
            <h3 className=" product-cell__promo-price">
              {formatCurrency(data.prices[0].promo_price, 'BRL')}
            </h3>
            <h3 className=" product-cell__normal-price">
              {formatCurrency(data.prices[0].price, 'BRL')}
            </h3>
          </div>
          <h2 className=" product-cell__title">{data.name}</h2>
        </div>
      </Link>
      { getProductAmmount() > 0 ? (
        <button
          onClick={ () => addProductToCart(
            data,
            getProductAmmount() + 1,
            cartProducts,
            setCartProducts,
          ) }
          type="button"
          className="product-cell__ammount"
        >
          { getProductAmmount() }
        </button>
      ) : (

        <button
          onClick={ () => addProductToCart(
            data,
            getProductAmmount() + 1,
            cartProducts,
            setCartProducts,
          ) }
          type="button"
          className="product-cell__button"
        >
          <AiOutlinePlus />
        </button>
      ) }
    </div>
  );
}

export default PromoProductCell;

PromoProductCell.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
