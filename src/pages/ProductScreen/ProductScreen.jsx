/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductScreen.css';
import ProductMainInfo from '../../components/ProductMainInfo/ProductMainInfo';
import ProductScreenFooter from
  '../../components/ProductScreenFooter/ProductScreenFooter';
import ProductScreenDescription from
  '../../components/ProductScreenDescription/ProductScreenDescription';
import Loading from '../../components/Loading/Loading';

function ProductScreen() {
  const [productData, setProductData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { slug } = useParams();

  const getProductData = async () => {
    const baseUrl = 'https://api.instabuy.com.br/apiv3/';
    try {
      const response = await axios.get(`${baseUrl}item`, {
        params: { subdomain: 'supermercado', slug, github_id: 'TomazDimas' },
      });
      const { data } = response.data;
      setProductData(data[0]);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    (!isLoaded && <Loading />) || (
      <div className="product-screen-container">
        <ProductMainInfo productData={ productData } />
        <ProductScreenDescription productData={ productData } />
        <ProductScreenFooter />
      </div>
    )
  );
}

export default ProductScreen;
