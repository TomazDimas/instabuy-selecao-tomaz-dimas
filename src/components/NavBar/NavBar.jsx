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
          <AiOutlineHome />
          Home
        </NavLink>
        <NavLink to="/categories" className="navbar-container__item">
          <AiOutlineAppstore />
          Todas Categorias
        </NavLink>
        <NavLink to="/offers" className="navbar-container__item">
          <AiOutlineTags />
          Ofertas
        </NavLink>
        <NavLink to="/barbecue" className="navbar-container__item">
          <GiBarbecue />
          Kit Churrasco
        </NavLink>
        <NavLink to="/meats" className="navbar-container__item">
          <TbMeat />
          Açougue/ Aves/ Peixaria
        </NavLink>
        <NavLink to="/dairy" className="navbar-container__item">
          <BiCheese />
          Laticínios
        </NavLink>
        <NavLink to="/drinks" className="navbar-container__item">
          <BiDrink />
          Bebidas Alcoólicas
        </NavLink>
      </div>
    </nav>
  );
}

export default Navegation;
