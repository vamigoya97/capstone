import React from 'react'
import lagniappe_screen from '../media/lagniappe_screen.png'
import wynwood_walls from '../media/wynwood_walls_screen.png'
import sugar_rooftop from '../media/sugar_rooftop_screen.png'
import sls from '../media/sls_screen.png'
import crandon_park from '../media/crandon_park_screen.png'
import veza_brewing from '../media/veza_brewing_screen.png'

const TimesCard = (times) => {
    let count= 0
    return times.map(time => <div key={count++} className="actual-time">{time}</div>)
}

const AddressCard = address => {
    return (
        <address>
            {address.street}<br></br>
            {address.city}, {address.state}<br></br>
            {address.zipcode}
        </address>
    )
}

const addImageWithScreen = (location) => {
    switch (location.name) {
        case 'Lagniappe':
            return lagniappe_screen
        case 'Wynwood Walls':
            return wynwood_walls
        case "Sugar Rooftop Bar":
            return sugar_rooftop
        case "SLS South Beach Miami":
            return sls
        case "Crandon Park Marina":
            return crandon_park
        case "Veza Sur Brewing":
            return veza_brewing
        default:
            return location.img_url

    }    
}

const DatesMovieCard = props => {
    let count = 0
    return props.screening.dates.map(date => 
        <div key={count++} className="movie-dates-container">
            <div className="movie-dates-card">
                <p key={count++}><span>{date.month}</span> <span>{date.day}</span>, <span>{date.year}</span></p>
                <div className="con-tooltip top">
                    <p>@ {props.screening.location.name}</p>
                    <div className="tooltip">
                        <div className='movie-location-container'>
                            <div className="movie-location-image">
                                <img src={addImageWithScreen(props.screening.location)}></img>
                            </div>
                            <div className='movie-location-address'>
                                {AddressCard(props.screening.location.address)}
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="movie-times-card">
                    {TimesCard(date.times)}
                </div>
            </div>
        </div>
    )
}

export default DatesMovieCard