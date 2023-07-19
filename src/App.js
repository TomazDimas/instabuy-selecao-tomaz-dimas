/* eslint-disable import/no-unresolved */
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './pages/HomeScreem/HomeScreen';
import ProductScreen from './pages/ProductScreen/ProductScreen';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <HomeScreen /> } />
        <Route path="product/:slug" element={ <ProductScreen /> } />
      </Routes>
    </div>
  );
}

export default App;
