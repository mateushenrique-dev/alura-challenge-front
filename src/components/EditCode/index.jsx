import React, { useContext, useEffect } from 'react';
import EditorDeCodigo from './EditorDeCodigo';
import CodigoInfos from './CodigoInfos';
import ConfProject from '../../contexts/ConfProject';

function EditCode() {

  const { comunityTabRef, codeTabRef } = useContext(ConfProject)

  useEffect(() => {
    comunityTabRef.current.classList.remove('menu__tab-active')
    codeTabRef.current.classList.add('menu__tab-active')
  })

  return (
    <>
      <EditorDeCodigo />
      <CodigoInfos />
    </>
  );
}

export default EditCode