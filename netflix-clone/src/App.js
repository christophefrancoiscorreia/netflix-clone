import React, { useEffect, useState } from 'react'
import Tmdb from './api/Tmdb'

import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Call all list from Tmdb
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Seting featured movie
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo) 

    }
 
    loadAll();
  }, [])

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 70){
        setBlackHeader(true)            
      }else{
        setBlackHeader(false) 
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return (
    <div className="page">

      <Header black={blackHeader} />
      
      
      { featuredData && <FeaturedMovie item={featuredData} />}
      
      
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    
      <footer>
        Droits à l'image à Netflix<br/>
        Fait avec <span role="img" aria-label="coeur">❤</span> par Christophe François Correia<br/>
        Données récupérées sur le site <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">Themoviedb.org</a>
      </footer>
      {movieList.length <= 0 &&
        <div className="laoding">
          <img src="/loader.gif" alt="Netflix loader" />
        </div>
      }
    </div>
  );
}

export default App;
