import React from 'react'
import './FeaturedMovie.css'
import {BsFillPlayFill, BsPlus} from 'react-icons/bs'
function FeaturedMovie({item}) {


    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push( item.genres[i].name );
    }

    let description = item.overview;

    if(description.length > 350){
        description = description.substring(0 , 350) + '...'
    }

    return (
        <section 
            className="featured" 
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}
        >
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} classification</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} saison{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">
                        {description}
                    </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton"><BsFillPlayFill /> <span>Assister</span></a>
                        <a href={`/list/add/${item.id}`} className="featured--addlistbutton"><BsPlus /> <span>Ma Liste</span></a>
                    </div>
                    <div className="featured--genres">
                        <strong>Genres:</strong> {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie
