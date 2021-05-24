import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Location from './Location'
import Movie from './Movie'
import { Route, Switch } from 'react-router-dom'

const HideLocationButton = (props) => {
    return (props.isActive ? <Location locations={props.locations}  /> : null)
}

const HideMovieButton = (props) => {
    return (props.isActive ? <Movie  screenings={props.screenings} /> : null)
}

const FilterLinks = () => {

    let { url } = useRouteMatch();

    return (
        <div className="filter-links">
            <Link className="filter-button-1" to={`${url}/filter-by-location`}>
                <div className="filter-location-button">
                    <div className="wordart-link-filter italic-outline">
                        <span className="text">Filter by location</span>
                    </div>
                </div>
            </Link>
            <Link className="filter-button-2" to={`${url}/filter-by-movie`}>
                <div className="filter-movie-button"  >
                    <div className="wordart-link-filter italic-outline">
                        <span className="text">Filter by movie</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function Screening(props) {

        let {path} = useRouteMatch();

        return (
            <div className="find-screenings">
                <div className='filter-buttons' onClick={props.handleHide}>
                    {props.isActive ? null : FilterLinks()}
                </div>
                <Switch>
                    <Route key='5' path={`${path}/filter-by-location`} render={() => HideLocationButton(props) } />
                    <Route key='6' path={`${path}/filter-by-movie`} render={() => HideMovieButton(props) } />
                </Switch>
            </div>
        )
}

export default Screening