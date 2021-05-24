import React from 'react'
import MovieImageCard from './MovieImageCard'
import MovieInfoCard from './MovieInfoCard'

const MovieCard = props => {
    
    return (
        <div className="movie-container">
            <MovieImageCard screening={props.screening} />
            <MovieInfoCard screening={props.screening} />
        </div>
    )
}

export default MovieCard