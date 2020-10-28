import React, { useState } from 'react'
import './MovieRow.css'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { Link } from 'react-router-dom';


function MovieRow({title, items, type}) {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        

        if((window.innerWidth - listW) > x) {
            x = window.innerWidth - listW - 90;
        }

        setScrollX(x);
    }

    const checkType = (type) => {
        
        return (type === 'originals') ? 'tv' : 'movie'
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <MdChevronLeft style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <MdChevronRight style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (

                        <div className="movieRow--item" key={key}>
                            <Link to={`/stream/${item.id}/${checkType(type)}`} type="" >
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow
