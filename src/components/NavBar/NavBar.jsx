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
    <nav className="navbar-container">
      <NavLink to="/">
        <AiOutlineHome />
        Home
      </NavLink>
      <NavLink to="/categories">
        <AiOutlineAppstore />
        Todas Categorias
      </NavLink>
      <NavLink to="/offers">
        <AiOutlineTags />
        Ofertas
      </NavLink>
      <NavLink to="/barbecue">
        <GiBarbecue />
        Kit Churrasco
      </NavLink>
      <NavLink to="/meats">
        <TbMeat />
        Açougue/ Aves/ Peixaria
      </NavLink>
      <NavLink to="/dairy">
        <BiCheese />
        Laticínios
      </NavLink>
      <NavLink to="/drinks">
        <BiDrink />
        Bebidas Alcoólicas
      </NavLink>
    </nav>
  );
}

export default Navegation;
