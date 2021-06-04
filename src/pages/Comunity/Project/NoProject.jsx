import React from 'react';
import { Link } from 'react-router-dom'
import { BiAddToQueue } from "react-icons/bi";

import './noproject.scss';

function NoProject() {

  return (
    <section className="noproject">
      <h1 className="noproject__title">Nenhum projeto encontrado!</h1>
      <p className="noproject__text">Clique no botão abaixo para criar um!</p>
      <div>
        <Link className="noproject__link" to="/"><BiAddToQueue className="noproject__icon" /></Link>
      </div>
    </section>
  )
}

export default NoProject