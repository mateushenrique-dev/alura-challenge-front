import React, { useContext } from 'react';

import { FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ConfProject from '../../contexts/ConfProject';

function Tabs() {

  const { codeTabRef, comunityTabRef } = useContext(ConfProject)

  return (
    <>
      <Link to="/" className="menu__tab codeTab" ref={codeTabRef}>
        <div className="menu__tab__image"><FaCode /></div>
        <p className="menu__tab__name">Editor de código</p>
      </Link>
      <Link to="/comunidade" className="menu__tab comunityTab" ref={comunityTabRef}>
        <div className="menu__tab__image"><FaUsers /></div>
        <p className="menu__tab__name">Comunidade</p>
      </Link>
    </>
  )
}

export default Tabs