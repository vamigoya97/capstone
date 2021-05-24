import React from 'react'
import MovieCard from '../components/MovieCard'

const addMovieCard = (props) => {
    return props.screenings.map(screening => <MovieCard key={screening._id} screening={screening} locations={props.locations} />)
}

const Movie = props => {
    return (
        <div id="movie-showcase">
            {addMovieCard(props)}
        </div>
    )
}

export default Movie;