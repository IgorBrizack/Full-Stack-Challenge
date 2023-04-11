import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/helpers/fetchProducts';

export default function App () {
  const [data, setData] = useState()
  const [inputWeb, setInputWeb] = useState()
  const [inputCategory, setInputCategory] = useState()
  const [inputWrite, setInputWrite] = useState()

  const callApi = async() => {
    const result = await fetchProducts('geladeira')
    console.log(result.results) 
  }

  useEffect(() => {
    callApi()
  },[data])

  return(
    <div>
      <h1> Iniciando </h1>
      <label>
        web:
            <select name="select" onClick={ (e) => setInputWeb(e.target.value)}>
              <option value="todas">Todas</option>
              <option value="mercadoLivre">Mercado Livre</option>
              <option value="buscaPe">Busca Pé</option>
            </select>
      </label>
      <label>
        Categorias:
            <select name="select" onClick={(e) => setInputCategory(e.target.value)}>
              <option value="televisao">TV</option>
              <option value="geladeira">Geladeira</option>
              <option value="celular">Celular</option>
            </select>
      </label>
      <input placeholder='pesquisar' onChange={(e) => setInputWrite(e.target.value)}></input>
      <button
      type='button'>
        buscar
      </button>
    </div>
  )
}