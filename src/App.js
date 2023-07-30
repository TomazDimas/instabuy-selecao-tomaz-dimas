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
import Footer from './components/Footer/Footer';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import BuildingScreen from './pages/Building/Building';

function App() {
  return (
    <Provider>
      <div className="app">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <HomeScreen /> } />
          <Route path="p/:slug" element={ <ProductScreen /> } />
          <Route path="categories" element={ <BuildingScreen /> } />
          <Route path="offers" element={ <BuildingScreen /> } />
          <Route path="barbecue" element={ <BuildingScreen /> } />
          <Route path="meats" element={ <BuildingScreen /> } />
          <Route path="dairy" element={ <BuildingScreen /> } />
          <Route path="drinks" element={ <BuildingScreen /> } />
        </Routes>
        <Cart />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
