import React, { useEffect, useState } from 'react'
import FeaturedMovie from './FeaturedMovie';
import MovieRow from './MovieRow';
import Tmdb from '../api/Tmdb' 

function Home() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    
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
    

    return ( 
        <>
             { featuredData && <FeaturedMovie item={featuredData} />}
      
      
            <section className="lists">
                {movieList.map((item, key)=>(
                <MovieRow key={key} title={item.title} items={item.items} type={item.slug} />
                ))}
            </section>
            {movieList.length <= 0 &&
                <div className="laoding">
                <img src="/loader.gif" alt="Netflix loader" />
                </div>
            }
        </>
    )
}

export default Home
