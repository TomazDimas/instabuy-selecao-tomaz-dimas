import React from 'react';
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineTags,
} from 'react-icons/ai';
import { GiBarbecue } from 'react-icons/gi';
import { TbMeat } from 'react-icons/tb';
import { BiCheese, BiDrink } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function Navegation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-container__item">
          <AiOutlineHome className="navbar-container__icon" />
          Início
        </NavLink>
        <NavLink to="/categories" className="navbar-container__item">
          <AiOutlineAppstore className="navbar-container__icon" />
          Todas Categorias
        </NavLink>
        <NavLink to="/offers" className="navbar-container__item">
          <AiOutlineTags className="navbar-container__icon" />
          Ofertas
        </NavLink>
        <NavLink to="/barbecue" className="navbar-container__item">
          <GiBarbecue className="navbar-container__icon" />
          Kit Churrasco
        </NavLink>
        <NavLink to="/meats" className="navbar-container__item">
          <TbMeat className="navbar-container__icon" />
          Açougue/ Aves/ Peixaria
        </NavLink>
        <NavLink to="/dairy" className="navbar-container__item">
          <BiCheese className="navbar-container__icon" />
          Frios e Laticínios
        </NavLink>
        <NavLink to="/drinks" className="navbar-container__item">
          <BiDrink className="navbar-container__icon" />
          Bebidas Alcoólicas
        </NavLink>
      </div>
    </nav>
  );
}

export default Navegation;
