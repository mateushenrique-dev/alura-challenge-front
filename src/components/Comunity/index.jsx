import React, { useContext, useEffect } from 'react';
import ConfProject from '../../contexts/ConfProject';
import Project from './Project';
import NoProject from './Project/NoProject';

import './style.scss';

function Comunity() {
  const { codes, comunityTabRef, codeTabRef } = useContext(ConfProject);

  useEffect(() => {
    comunityTabRef.current.classList.add('menu__tab-active')
    codeTabRef.current.classList.remove('menu__tab-active')
  })

  return (
    <main className="comunity">
      {
        codes.length ? codes.map((code, index) => (
          <Project key={index} nome={code.nome} descricao={code.descricao} color={code.color} code={code.code} />
        )) :
          <NoProject />
      }
    </main>
  );
}

export default Comunity