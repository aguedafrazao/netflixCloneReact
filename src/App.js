import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default () => {
  // mostar a lista na tela
  const [movieList, setMovieList] = useState([]);
  // qnd a tela for carregada ele vai usar a funcao q eu digitar aqui 
  useEffect(()=>{
    const loadAll = async () => {
      // pegando a lista completa
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  )
}