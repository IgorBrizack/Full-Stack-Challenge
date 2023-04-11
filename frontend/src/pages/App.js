import React, { useEffect, useState } from 'react';

export default function App () {
  const [data, setData] = useState()

  useEffect(() => {
    
  },[data])

  return(
    <div>
      <h1> Iniciando </h1>
      <label>
        web:
            <select name="select">
              <option value="todas">Todas</option>
              <option value="mercadoLivre">Mercado Livre</option>
              <option value="buscaPe">Busca Pé</option>
            </select>
      </label>
      <label>
        Categorias:
            <select name="select">
              <option value="tv">Mercado Livre</option>
              <option value="geladeira">Busca Pé</option>
              <option value="celular">Busca Pé</option>
            </select>
      </label>
      <input placeholder='pesquisar'></input>
      <button
      type='button'>
        buscar
      </button>
    </div>
  )
}