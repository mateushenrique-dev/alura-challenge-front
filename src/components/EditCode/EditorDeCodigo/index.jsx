import React, { useContext } from 'react';
import ConfProject from '../../../contexts/ConfProject';
import CodeField from './CodeField';
import hljs from 'highlight.js'

import './style.scss'
import './highlight.css'

function EditorDeCodigo() {

  const { codeFieldRef } = useContext(ConfProject)

  function setHighlight() {
    const codeArea = codeFieldRef.current.lastChild.lastChild
    hljs.highlightBlock(codeArea)
  }

  return (
    <section className="codeEditorContainer">
      <div className="codeEditor" ref={codeFieldRef}>
        <CodeField editable={true} />
      </div>
      <div className="viewHighLight" onClick={setHighlight}><p className="viewHighLight__text">Visualizar com o highlight</p></div>
    </section>
  );
}

export default EditorDeCodigo;