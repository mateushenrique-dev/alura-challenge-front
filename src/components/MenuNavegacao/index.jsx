import React, { useContext } from 'react';
import ConfProject from '../../contexts/ConfProject';
import Profile from '../Header/Profile';
import './style.scss';

import Tabs from './Tabs'

function MenuNavegacao() {

  const { MenuRef } = useContext(ConfProject)

  return (
    <nav className="menu" ref={MenuRef}>
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