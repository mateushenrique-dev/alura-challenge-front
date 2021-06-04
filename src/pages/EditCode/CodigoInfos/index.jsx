import React from 'react';
import ButtonConverTo from '../ButtonConvertTo';
import useConfProject from '../../../hooks';
import Swal from 'sweetalert2';

import './style.scss'

function CodigoInfos() {

  const { setDados } = useConfProject()

  function handleHighLightColor(e) {
    const editorCode = e.target.parentNode.parentNode.previousSibling.children[0]
    editorCode.style.background = e.target.value
  }

  function saveProject(e) {
    e.preventDefault()
    const nomeProjeto = e.target[0].value
    const descricaoProjeto = e.target[1].value
    const colorProjeto = e.target[3].value
    const codeField = e.target.previousSibling.children[0].children[0].children[1].textContent

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
    <form className="infos" onSubmit={saveProject}
    >
      <div className="seuProjeto">
        <h2 className="seuProjeto__title">Seu projeto</h2>
        <input className="seuProjeto__name" type="text" placeholder="Nome do seu projeto" />
        <textarea className="seuProjeto__description" type="text" placeholder="Descrição do seu projeto" />
      </div>
      <div className="personalizacao">
        <h2 className="personalizacao__title">Personalização</h2>
        <select className="personalizacao__language" name="" id="language">
          <option value="">JavaScript</option>
          <option value="">TypeScript</option>
        </select>
        <input className="personalizacao__color" onChange={handleHighLightColor} type="color" name="" id="color" />
        <button type="submit" className="personalizacao__button">Salvar Projeto</button>
        <ButtonConverTo />
      </div>
    </form>
  );
}

export default CodigoInfos