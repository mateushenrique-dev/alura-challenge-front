import React from 'react';

import './style.scss'
import AlertDownload from '../AlertDownload'

function ButtonConverTo() {

  function handlePopUp(e) {
    const popUp = e.currentTarget.previousElementSibling
    popUp.classList.add('popup__active')
  }

  return (
    <>
      <AlertDownload />
      <button type="button" className="convert" onClick={handlePopUp}>Converter para imagem!</button>
    </>
  )
}

export default ButtonConverTo