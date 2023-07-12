import React from 'react';
import {
  AiOutlineSearch,
  AiOutlineUnorderedList,
  AiOutlineUser,
  AiOutlineCaretDown,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={ styles.container }>
        <a href="/" className={ styles.container__logo }>
          <img
            src="https://ibassets.com.br/ib.store.image.medium/m-0cd410fa3a4844acb4294a0edfea3822.png"
            alt="Supermercado Modelo"
          />
          <p>
            Supermercado
            Modelo
          </p>
        </a>
        <form>
          <input type="text" />
          <AiOutlineSearch />
        </form>
        <a href="/">
          <AiOutlineUnorderedList />
          Listas
        </a>
        <button type="button">
          <AiOutlineUser />
          <p>Minha conta</p>
          <AiOutlineCaretDown />
        </button>
        <button type="button">
          <AiOutlineShoppingCart />
          <p>Minha conta</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
