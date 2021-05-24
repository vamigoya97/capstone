import React from 'react'

const MovieImageCard = props => {
    return(
        <div className="movie-image-card" >
            <img className="movie-img-tag" src={props.screening.movie.img_url}></img>
        </div>
    )
}

export default MovieImageCard