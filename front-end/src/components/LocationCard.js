import React from 'react'
import DatesLocationCard from './DatesLocationCard'
import lagniappe_screen from '../media/lagniappe_screen.png'
import wynwood_walls from '../media/wynwood_walls_screen.png'
import sugar_rooftop from '../media/sugar_rooftop_screen.png'
import sls from '../media/sls_screen.png'
import crandon_park from '../media/crandon_park_screen.png'
import veza_brewing from '../media/veza_brewing_screen.png'


class LocationCard extends React.Component {

    state = {
        img_src: []
    }

    componentDidMount() {
        this.setState({img_src: this.props.location.img_url})
    }

    AddressCard = address => {
        return (
            <address>
                {address.street}<br></br>
                {address.city}, {address.state}<br></br>
                {address.zipcode}
            </address>
        )
    }
    
    addDatesCard = (props) => {
        return props.location.screenings.map(screening =>  <DatesLocationCard key={screening.id} screening={screening}/>)
    }

    addImageWithScreen = (location) => {
        switch (location.name) {
            case 'Lagniappe':
                this.setState({img_src: lagniappe_screen})
                break;
            case 'Wynwood Walls':
                this.setState({img_src: wynwood_walls})
                break;
            case "Sugar Rooftop Bar":
                this.setState({img_src: sugar_rooftop})
                break;
            case "SLS South Beach Miami":
                this.setState({img_src: sls})
                break;
            case "Crandon Park Marina":
                this.setState({img_src: crandon_park})
                break;
            case "Veza Sur Brewing":
                this.setState({img_src: veza_brewing})
                break;
            default:
                this.setState({img_src: location.img_url})

        }    
    }

    render() {
        return (
            <div className='location-container'>
                <div className='location-image'>
                    <img src={this.state.img_src} onMouseLeave={() => this.setState({img_src: `${this.props.location.img_url}`})} onMouseEnter={() => this.addImageWithScreen(this.props.location)} ></img>
                </div>
                <div className='location-card'>
                    <div className='location-name'>
                        <h1>{this.props.location.name}</h1>
                        <p>Capacity: {this.props.location.capacity} people</p>
                        {this.AddressCard(this.props.location.address)}
                    </div>
                    {/* <div className='location-address'>
                        
                    </div> */}
                    <div className="location-dates">
                        {this.addDatesCard(this.props)}
                    </div>
                </div>
            </div>
        )
    }
}

export default LocationCard;