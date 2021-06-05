import React, { useState, useEffect } from 'react';

const ConfProject = React.createContext();

export function ConfProjectContext(props) {

  const [codes, setCodes] = useState([]);
  const [highlightLanguage, setHighlightLanguage] = useState('javascript');

  useEffect(() => {
    localStorage['Dados'] ? setCodes(JSON.parse(localStorage['Dados'])) : setCodes([])
  }, [])

  function setDados(dados) {
    const newDados = [...codes, dados]
    setCodes(newDados)
    localStorage.setItem('Dados', JSON.stringify(newDados))
  }

  return (
    <ConfProject.Provider value={{ setDados, setCodes, codes, highlightLanguage, setHighlightLanguage }}>
      {props.children}
    </ConfProject.Provider>
  )
}

export default ConfProject;