import React from 'react'

const TimesCard = (times) => {
    let count= 0
    return times.map(time => <div key={count++} className="actual-time">{time}</div>)
}

const DatesLocationCard = props => {
    let count = 0
    return props.screening.dates.map(date => 
        <div key={count++} className="location-dates-container">
            <div className="location-dates-card">
                <div className="con-tooltip left">
                    <p>{props.screening.movie.title}</p>
                    <div className="tooltip">
                        <div className="location-movie-container">
                            <div className="location-movie-image">
                                <img src={props.screening.movie.img_url} alt={props.screening.movie.title}></img>
                            </div>
                            <div className="location-movie-card">
                                <h1>{props.screening.movie.title}</h1>
                                <h2>A Film by {props.screening.movie.director}</h2>
                                <p>{props.screening.movie.synopsis}</p>
                                {/* <div className="location-movie-title">
                                    
                                </div>
                                <div className="location-movie-director">
                
                                </div>
                                <div className="location-movie-synposis">
                                    
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <p key={count++}><span>{date.month}</span> <span>{date.day}</span>, <span>{date.year}</span></p>
                <div className="location-times-card">
                    {TimesCard(date.times)}
                </div>
            </div>
        </div>
    )
}

export default DatesLocationCard