import React, { useState, useRef, useEffect } from 'react';

const ConfProject = React.createContext();

export function ConfProjectContext(props) {

  const codeFieldRef = useRef(null);
  const MenuRef = useRef(null);
  const comunityTabRef = useRef(null);
  const codeTabRef = useRef(null);

  const [codes, setCodes] = useState([]);

  useEffect(() => {
    localStorage['Dados'] ? setCodes(JSON.parse(localStorage['Dados'])) : setCodes([])
  }, [setCodes])

  function setDados(dados) {
    const newDados = [...codes, dados]
    setCodes(newDados)
    localStorage.setItem('Dados', JSON.stringify(newDados))
  }

  return (
    <ConfProject.Provider value={{ codeFieldRef, MenuRef, setDados, setCodes, codes, comunityTabRef, codeTabRef }}>
      {props.children}
    </ConfProject.Provider>
  )
}

export default ConfProject;