import React, { useRef } from 'react';

import './style.scss'
import AlertDownload from '../AlertDownload'

function ButtonConverTo() {

  const popUpDownload = useRef(null)

  function handlePopUp() {
    const popUp = popUpDownload.current
    popUp.classList.add('popup__active')
  }

  return (
    <>
      <AlertDownload popupRef={popUpDownload} />
      <button type="button" className="convert" onClick={handlePopUp}>Converter para imagem!</button>
    </>
  )
}

export default ButtonConverTo