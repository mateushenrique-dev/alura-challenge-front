import React from 'react';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';

import './style.scss';

function AlertDownload() {

  function convertToImage(e) {
    const extensao = e.currentTarget.parentNode.parentNode.children[1].value
    const codeField = e.target.offsetParent.parentElement.previousSibling.parentElement.previousElementSibling.children[0]

    if (extensao === 'Png') {
      domtoimage.toPng(codeField)
        .then((response) => {
          saveAs(response, `meuprojeto.png`);
        })
    }
    else if (extensao === 'Jpeg') {
      domtoimage.toJpeg(codeField, { quality: 0.85 })
        .then((response) => {
          saveAs(response, `meuprojeto.jpeg`);
        })
    }
    else if (extensao === 'Svg') {
      domtoimage.toSvg(codeField)
        .then((response) => {
          saveAs(response, `meuprojeto.svg`);
        })
    }
  }

  function handleClosePopUp(e) {
    const popUp = e.currentTarget.offsetParent
    popUp.classList.remove('popup__active')
  }

  return (
    <section className="alert__container">
      <section className="alert">
        <h1 className="alert__title">Escolha uma extensão</h1>
        <select className="alert__select" name="" id="">
          <option value="Png">png</option>
          <option value="Jpeg">jpeg</option>
          <option value="Svg">svg</option>
        </select>
        <div className="alert__buttons">
          <button className="alert__buttons__button-ok alert__buttons__button" type="button" onClick={convertToImage}>Ok</button>
          <button className="alert__buttons__button-cancel alert__buttons__button" type="button" onClick={handleClosePopUp}>Cancel</button>
        </div>
      </section>
    </section>
  )
}

export default AlertDownload