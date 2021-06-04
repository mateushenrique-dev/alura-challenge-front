import React from 'react';
import useConfProject from '../../hooks';
import Project from './Project';
import NoProject from './Project/NoProject';

import './style.scss';

function Comunity() {
  const { codes } = useConfProject();

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