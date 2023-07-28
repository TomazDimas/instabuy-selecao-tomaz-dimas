/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import ProductBar from '../../components/ProductBar/ProductBar';
import PromoProductBar from '../../components/ProductBar/PromoProductBar';
import Slider from '../../components/Slider/Slider';
import './HomeScreen.css';

function HomeScreen() {
  const [promoProducts, setPromoProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getProducts = async () => {
    const baseUrl = 'https://api.instabuy.com.br/apiv3/';
    try {
      const response = await axios.get(`${baseUrl}layout`, {
        params: { subdomain: 'supermercado', github_id: 'TomazDimas' },
      });
      const { data } = response.data;
      setPromoProducts(data.promo);
      setProducts(data.collection_items);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    (!isLoaded && <Loading />) || (
      <div className="home-container">
        <Slider />
        <PromoProductBar products={ promoProducts } />
        {products.map((collection) => (
          <ProductBar key={ collection.id } data={ collection } />
        ))}
      </div>
    )
  );
}

export default HomeScreen;
