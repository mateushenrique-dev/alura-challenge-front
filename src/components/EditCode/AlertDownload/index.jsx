import React, { useContext } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver'
import ConfProject from '../../../contexts/ConfProject';

import './style.scss';

function AlertDownload({ popupRef }) {

  const { codeFieldRef } = useContext(ConfProject)

  function convertToImage() {
    const extensao = popupRef.current.lastChild.children[1].value

    if (extensao === 'Png') {
      domtoimage.toPng(codeFieldRef.current)
        .then((response) => {
          window.saveAs(response, `meuprojeto.png`);
        })
    }
    else if (extensao === 'Jpeg') {
      domtoimage.toJpeg(codeFieldRef.current, { quality: 0.85 })
        .then((response) => {
          window.saveAs(response, `meuprojeto.jpeg`);
        })
    }
    else if (extensao === 'Svg') {
      domtoimage.toSvg(codeFieldRef.current)
        .then((response) => {
          window.saveAs(response, `meuprojeto.svg`);
        })
    }
  }

  function handleClosePopUp() {
    const popUp = popupRef.current
    popUp.classList.remove('popup__active')
  }

  return (
    <section className="alert__container" ref={popupRef}>
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