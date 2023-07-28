import React from 'react';
import propTypes from 'prop-types';
import parse from 'html-react-parser';
import './ProductScreenDescription.css';

function ProductScreenDescription({ productData }) {
  return (
    <div className="product-description-container">
      <h1 className="product-description__title">Descrição do Produto</h1>
      <h2 className="product-description__text">{ parse(productData.description) }</h2>
    </div>
  );
}

export default ProductScreenDescription;

ProductScreenDescription.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
