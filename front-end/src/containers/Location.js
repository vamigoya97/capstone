import React from 'react'
import LocationCard from '../components/LocationCard'

function Location(props) {
    return props.locations.map(location => <LocationCard key={location._id} location={location} />)
}

export default Location
