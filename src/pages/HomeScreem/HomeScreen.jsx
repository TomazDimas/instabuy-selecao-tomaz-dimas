import React from 'react';
import ProductBar from '../../components/ProductBar/ProductBar';
import Slider from '../../components/Slider/Slider';
import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className="home-container">
      <Slider />
      <ProductBar />
    </div>
  );
}

export default HomeScreen;
