/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductScreen.css';

function ProductScreen() {
  const [productData, setProductData] = useState([]);
  const { slug } = useParams();

  const getProductData = async () => {
    const baseUrl = 'https://api.instabuy.com.br/apiv3/';
    try {
      const response = await axios.get(`${baseUrl}item`, {
        params: { subdomain: 'supermercado', slug },
      });
      const { data } = response.data;
      setProductData(data[0]);
      console.log(data[0]);
      // setPromoProducts(data.promo);
      // setProducts(data.collection_items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="product-screen-container">
      { productData.name }
    </div>
  );
}

export default ProductScreen;
