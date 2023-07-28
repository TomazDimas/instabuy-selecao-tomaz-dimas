import React from 'react';
import './ProductScreenFooter.css';

function ProductScreenFooter() {
  return (
    <div className="product-screen-footer-container">
      <p className="product-screen-footer__text">
        Informações sobre o produto ou embalagem apresentada pode não ser atual
        ou completo. Sempre consulte o produto físico para as informações mais
        precisas e avisos. Para obter informações adicionais, entre em contato
        com o revendedor ou fabricante.
      </p>
    </div>
  );
}

export default ProductScreenFooter;
