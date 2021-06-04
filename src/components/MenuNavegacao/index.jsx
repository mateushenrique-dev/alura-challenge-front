import React from 'react';
import Profile from '../Header/Profile';

import './style.scss';

import Tabs from './Tabs'

function MenuNavegacao() {
  return (
    <nav className="menu">
      <h2 className="menu__title">Menu</h2>
      <Tabs />
      <section className="mobile">
        <span className="mobile__divisor" />
        <Profile />
      </section>
    </nav>
  )
}

export default MenuNavegacao;