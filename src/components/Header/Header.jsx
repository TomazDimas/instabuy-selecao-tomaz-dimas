import React, { useContext } from 'react';
import {
  AiOutlineUnorderedList,
  AiOutlineUser,
  AiOutlineCaretDown,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header() {
  const { setIsCartOpen } = useContext(CartContext);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <NavLink to="/" className="header-container__home">
          <img
            src="https://ibassets.com.br/ib.store.image.medium/m-0cd410fa3a4844acb4294a0edfea3822.png"
            alt="Supermercado Modelo"
          />
          <p>Supermercado Modelo</p>
        </NavLink>
        {/* SEARCH */}
        <SearchBar />
        {/* LISTA */}
        <button type="button" className="header-container__list">
          <AiOutlineUnorderedList className="header-container__list__icon" />
          Listas
        </button>
        {/* CONTA */}
        <button type="button" className="header-container__account">
          <AiOutlineUser className="header-container__account__icon" />
          <p>Minha conta</p>
          <AiOutlineCaretDown />
        </button>
        {/* CARRINHO */}
        <button
          type="button"
          className="header-container__cart"
          onClick={ handleOpenCart }
        >
          <AiOutlineShoppingCart className="header-container__cart__icon" />
          <p>Carrinho</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
