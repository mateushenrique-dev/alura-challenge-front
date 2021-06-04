import React, { useEffect } from 'react';
import CodeField from './CodeField';
import useConfProject from '../../../hooks';
import hljs from 'highlight.js'

import './style.scss'
import './highlight.css'

function EditorDeCodigo() {

  const { setHighlight, highlight } = useConfProject()

  useEffect(() => {
    highlight &&
      hljs.highlightAll()
  }, [highlight])

  return (
    <section className="codeEditorContainer">
      <div className="codeEditor">
        <CodeField editable={true} />
      </div>
      <div className="viewHighLight" onClick={() => setHighlight(true)}><p className="viewHighLight__text">Visualizar com o highlight</p></div>
    </section>
  );
}

export default EditorDeCodigo;