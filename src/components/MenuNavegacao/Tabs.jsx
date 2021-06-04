import React from 'react';

import { FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import { NavLink } from 'react-router-dom';

function Tabs() {
  return (
    <>
      <NavLink exact to="/" className="menu__tab codeTab" activeClassName="menu__tab-active">
        <div className="menu__tab__image"><FaCode /></div>
        <p className="menu__tab__name">Editor de código</p>
      </NavLink>
      <NavLink to="/comunidade" className="menu__tab comunityTab" activeClassName="menu__tab-active" >
        <div className="menu__tab__image"><FaUsers /></div>
        <p className="menu__tab__name">Comunidade</p>
      </NavLink>
    </>
  )
}

export default Tabs