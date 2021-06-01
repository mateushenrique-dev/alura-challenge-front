import React, { useContext, useRef } from 'react';
import Profile from './Profile'
import { FaSearch } from "react-icons/fa";
import ConfProject from '../../contexts/ConfProject';

import './style.scss';

function Header() {

  const searchMobileRef = useRef(null);
  const logoRef = useRef(null);

  const { MenuRef } = useContext(ConfProject);

  function showMobileMenu(e) {
    const menuMobile = MenuRef.current;
    const menuIcone = e.target;
    menuMobile.classList.toggle('menu__mobile');
    menuMobile.classList.contains('menu__mobile') ?
      menuIcone.setAttribute('src', '/assets/hamburguer-active.svg') :
      menuIcone.setAttribute('src', '/assets/hamburguer.svg');
  }

  function showMobileSearch() {
    const searchMobile = searchMobileRef.current;
    const logo = logoRef.current
    searchMobile.classList.toggle('search__active');
    logo.classList.toggle('hidden')
  }

  return (
    <header className="header">
      <div className="header__image__container">
        <img className="header__image" src="/assets/Logo.svg" alt="Logo" ref={logoRef} />
      </div>
      <input className="header__search" placeholder="Busque algo" type="text" ref={searchMobileRef} />
      <div className="header__profile-container">
        <Profile />
      </div>
      <section className="header__responsive">
        <div className="header__responsive__search" onClick={showMobileSearch}>
          <div><FaSearch /></div>
        </div>
        <div className="header__responsive__menu" onClick={showMobileMenu}>
          <img src="/assets/hamburguer.svg" alt="Menu" />
        </div>
      </section>
    </header>
  );
}

export default Header;