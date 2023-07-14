import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './pages/HomeScreem/HomeScreen';
import ProductScreen from './pages/ProductScreen/ProductScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ <HomeScreen /> } />
        <Route path="product/:slug" element={ <ProductScreen /> } />
      </Routes>
    </div>
  );
}

export default App;
