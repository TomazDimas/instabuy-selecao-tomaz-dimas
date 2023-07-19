/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductBar from '../../components/ProductBar/ProductBar';
import Slider from '../../components/Slider/Slider';
import './HomeScreen.css';

function HomeScreen() {
  const [promoProducts, setPromoProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const baseUrl = 'https://api.instabuy.com.br/apiv3/';
    try {
      const response = await axios.get(`${baseUrl}layout`, {
        params: { subdomain: 'supermercado' },
      });
      const { data } = response.data;
      setPromoProducts(data.promo);
      setProducts(data.collection_items);
      console.log(data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home-container">
      <Slider />
      <ProductBar products={ promoProducts } />
    </div>
  );
}

export default HomeScreen;
