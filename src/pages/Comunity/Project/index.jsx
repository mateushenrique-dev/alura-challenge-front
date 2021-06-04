import React, { useEffect, useRef } from 'react';
import CodeField from '../../EditCode/EditorDeCodigo/CodeField';
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import hljs from 'highlight.js';

import './style.scss';
import '../../EditCode/EditorDeCodigo/highlight.css';

function Project({ nome, descricao, color, code }) {

  const codeArea = useRef(null)

  useEffect(() => {
    const codeField = codeArea.current.lastChild.children[1]
    hljs.highlightElement(codeField)
  })

  return (
    <section className="project__container">
      <section className="project">
        <section className="project__code" style={{ backgroundColor: color }} ref={codeArea}>
          <CodeField code={code} editable={false} />
        </section>
        <section className="project__infos">
          <h2 className="project__infos__title">{nome}</h2>
          <p className="project__infos__description">{descricao}</p>
        </section>
        <section className="project__social">
          <section className="project__social__interations">
            <div className="project__social__interations__comments">
              <AiFillMessage className="project__social__interations__comments__icon" />
              <span>99</span>
            </div>
            <div className="project__social__interations__reactions">
              <div>
                <AiFillHeart className="project__social__interations__reactions__icon" />
              </div>
              <span>99</span>
            </div>
          </section>
          <div className="project__social__profile">
            <img className="project__social__photo" src="/assets/Photo.png" alt="Foto de Perfil" />
            <span className="project__social__user">@Mateus</span>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Project