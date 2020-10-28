import React, { useEffect, useState } from 'react'
import Tmdb from '../api/Tmdb';
import FeaturedMovie from './FeaturedMovie'


function Stream() {
    const location = window.location.pathname;
    const [featuredData, setFeaturedData] = useState(null);    
    const id = location.split('/')[2];
    const type = location.split('/')[3];

    useEffect(() => {

        const loadAll = async () => {
          // Call all list from Tmdb
    
          //Seting featured movie
          let chosenInfo = await Tmdb.getMovieInfo(id, type);
    
          setFeaturedData(chosenInfo) 

    
        }
     
        loadAll();
      }, [])
    
      
    return ( 
        <>
            { featuredData && <FeaturedMovie item={featuredData} type={type} />}
        </>
    )
}

export default Stream
