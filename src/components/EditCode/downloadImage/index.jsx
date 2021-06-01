import React from 'react';

function downloadImage() {
  return (
    <section>
      <h1>Escola o formato desejado</h1>
      <select name="" id="">
        <option value="toPng">.Png</option>
        <option value="toJpeg">Jpeg</option>
        <option value="toSvg">Svg</option>
      </select>
      <button>Baixar</button>
      <button>Cancelar</button>
    </section>
  )
}

export default downloadImage