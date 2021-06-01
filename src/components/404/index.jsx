import React from 'react';

import './style.scss'

function Error404() {
  return (
    <main className="erro404">
      <h1 className="erro404__title">Ops...! Erro 404!</h1>
      <p className="eror404__texto">Essa página acessada não existe!</p>
    </main>
  )
}

export default Error404