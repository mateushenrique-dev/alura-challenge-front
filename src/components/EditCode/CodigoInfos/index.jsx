import React, { useContext, useRef } from 'react';
import ConfProject from '../../../contexts/ConfProject';
import Swal from 'sweetalert2';

import './style.scss'
import ButtonConverTo from '../ButtonConvertTo';

function CodigoInfos() {

  const { codeFieldRef, setDados } = useContext(ConfProject)
  const ConfProjectRef = useRef(null)

  function handleHighLightColor(e) {
    codeFieldRef.current.style.background = e.target.value
  }

  function saveProject(e) {
    e.preventDefault()
    const nomeProjeto = ConfProjectRef.current[0].value
    const descricaoProjeto = ConfProjectRef.current[1].value
    const colorProjeto = ConfProjectRef.current[3].value
    const codeField = codeFieldRef.current.lastChild.lastChild.textContent

    if (nomeProjeto && descricaoProjeto && colorProjeto) {
      Swal.fire(
        'Concluído!',
        'Projeto adicionado com sucesso!',
        'success'
      )

      setDados({
        nome: nomeProjeto,
        descricao: descricaoProjeto,
        color: colorProjeto,
        code: codeField
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado!',
        footer: 'Verifique todos os campos estão preenchidos.'
      })
    }
  }

  return (
    <form className="infos" ref={ConfProjectRef} onSubmit={saveProject}
    >
      <div className="seuProjeto">
        <h2 className="seuProjeto__title">Seu projeto</h2>
        <input className="seuProjeto__name" type="text" placeholder="Nome do seu projeto" />
        <textarea className="seuProjeto__description" type="text" placeholder="Descrição do seu projeto" />
      </div>
      <div className="personalizacao">
        <h2 className="personalizacao__title">Personalização</h2>
        <select className="personalizacao__language" name="" id="personalizacao">
          <option value="">JavaScript</option>
          <option value="">TypeScript</option>
        </select>
        <input className="personalizacao__color" onChange={handleHighLightColor} type="color" name="" id="" />
        <button type="submit" className="personalizacao__button">Salvar Projeto</button>
        <ButtonConverTo />
      </div>
    </form>
  );
}

export default CodigoInfos