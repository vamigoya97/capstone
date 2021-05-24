import React from 'react'
import DatesMovieCard from './DatesMovieCard'

const CastCard = props => {
    let count = 0
    return props.screening.movie.cast.map(member => <li key={count++}> {member} </li>)
}

const MovieInfoCard = props => {
    return(
        <div className="movie-info-card">
            <h1>{props.screening.movie.title}</h1>
            <h2>A Film by {props.screening.movie.director}</h2>
            <span>Starring</span>
            {CastCard(props)}
            <p>{props.screening.movie.synopsis}</p>
            <DatesMovieCard screening={props.screening}/>
            {/* <div className="movie-info-title">
                
            </div>
            <div className="movie-info-director">
                
            </div>
             
            <div className="movie-info-cast">
                
            </div>
            <div className="movie-info-synposis">
                
            </div> */}
            
            {/* {DatesCard(props)} */}
        </div>
    )
}

export default MovieInfoCard