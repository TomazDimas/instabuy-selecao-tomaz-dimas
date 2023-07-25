import React from 'react';
import propTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import './ProductCell.css';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

function ProductCell({ data }) {
  return (
    <div className="product-cell-container">
      <Link to={ `/p/${data.slug}` }>
        <img
          src={ `https://assets.instabuy.com.br/ib.item.image.medium/m-${data.images[0]}` }
          alt="produto"
          className="product-cell__image"
        />
        <div className="product-cell__info">
          <h3 className="product-cell__price">
            {formatCurrency(data.prices[0].price, 'BRL')}
          </h3>
          <h2 className=" product-cell__title">{data.name}</h2>
        </div>
      </Link>
      <button type="button" className="product-cell__button">
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default ProductCell;

ProductCell.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
