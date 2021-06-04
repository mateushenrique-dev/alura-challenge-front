import React, { useState, useRef, useEffect } from 'react';

const ConfProject = React.createContext();

export function ConfProjectContext(props) {

  const codeFieldRef = useRef(null);
  const MenuRef = useRef(null);

  const [codes, setCodes] = useState([]);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    localStorage['Dados'] ? setCodes(JSON.parse(localStorage['Dados'])) : setCodes([])
  }, [])

  function setDados(dados) {
    const newDados = [...codes, dados]
    setCodes(newDados)
    localStorage.setItem('Dados', JSON.stringify(newDados))
  }

  return (
    <ConfProject.Provider value={{ codeFieldRef, MenuRef, setDados, setCodes, codes, highlight, setHighlight }}>
      {props.children}
    </ConfProject.Provider>
  )
}

export default ConfProject;