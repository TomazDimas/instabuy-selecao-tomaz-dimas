import React from 'react';
import {
  AiOutlineUnorderedList,
  AiOutlineUser,
  AiOutlineCaretDown,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <a href="/" className="header-container__home">
          <img
            src="https://ibassets.com.br/ib.store.image.medium/m-0cd410fa3a4844acb4294a0edfea3822.png"
            alt="Supermercado Modelo"
          />
          <p>Supermercado Modelo</p>
        </a>
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
        <button type="button" className="header-container__cart">
          <AiOutlineShoppingCart className="header-container__cart__icon" />
          <p>Carrinho</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
