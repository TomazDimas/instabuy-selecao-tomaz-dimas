import React from 'react';
import ProductCell from '../ProductCell/ProductCell';
import './ProductBar.css';

function ProductBar() {
  return (
    <div className="product-bar-container">
      <h1>Título</h1>
      <div className="product-container">
        <ProductCell />
        <ProductCell />
        <ProductCell />
      </div>
    </div>
  );
}

export default ProductBar;
