import React from 'react';
import CodeField from './CodeField';
import hljs from 'highlight.js';
import useConfProject from '../../../hooks';

import './style.scss'
import './highlight.css'

function EditorDeCodigo() {

  const { highlightLanguage } = useConfProject()

  function Highlight(e) {
    const codeElement = e.currentTarget.previousElementSibling.children[0].children[1].children[0]
    codeElement.classList = []
    codeElement.classList.add(`${highlightLanguage}`)
    hljs.highlightElement(codeElement)
    console.log(codeElement.classList)
  }

  return (
    <section className="codeEditorContainer">
      <div className="codeEditor">
        <CodeField editable={true} />
      </div>
      <div className="viewHighLight" onClick={Highlight}><p className="viewHighLight__text">Visualizar com o highlight</p></div>
    </section>
  );
}

export default EditorDeCodigo;