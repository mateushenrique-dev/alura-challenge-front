import React from 'react';
import { FaSearch } from "react-icons/fa";
import Profile from './Profile'

import './style.scss';

function Header() {

  function showMobileMenu(e) {
    const menu = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0]
    const menuIcon = e.target
    menu.classList.toggle('menu__mobile')
    menu.classList.contains('menu__mobile') ?
      menuIcon.setAttribute('src', '/assets/hamburguer-active.svg') :
      menuIcon.setAttribute('src', '/assets/hamburguer.svg')
  }

  function showMobileSearch(e) {
    const searchMobile = e.currentTarget.parentNode.parentNode.parentNode.parentNode.children[1];
    const logo = e.currentTarget.parentNode.parentNode.parentNode.parentNode.children[0]
    searchMobile.classList.toggle('search__active');
    logo.classList.toggle('hidden')
  }

  return (
    <header className="header">
      <div className="header__image__container">
        <img className="header__image" src="/assets/Logo.svg" alt="Logo" />
      </div>
      <input className="header__search" placeholder="Busque algo" type="text" />
      <div className="header__profile-container">
        <Profile />
      </div>
      <section className="header__responsive">
        <div className="header__responsive__search">
          <div><FaSearch onClick={showMobileSearch} /></div>
        </div>
        <div className="header__responsive__menu" onClick={showMobileMenu}>
          <img src="/assets/hamburguer.svg" alt="Menu" />
        </div>
      </section>
    </header>
  );
}

export default Header;