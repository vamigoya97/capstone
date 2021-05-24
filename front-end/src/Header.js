import React from 'react'
import { Link } from 'react-router-dom'
// import { Dropdown, DropdownButton } from 'react-bootstrap'

class Header extends React.Component {

    render() {
        return(
            <div className="header">
                <div className="app-title">
                    <div className="wordart-1 italic-outline">
                        <span className="text">CINEPUB</span>
                    </div>
                </div>
                <div className="links">
                    <Link to="/">
                        <div className="wordart-link italic-outline">
                            <span className="text">HOME</span>
                        </div>
                    </Link>
                    <Link to="/about">
                    <div className="wordart-link italic-outline">
                            <span className="text">ABOUT</span>
                    </div>
                    </Link>
                    <Link to='/find-screening' onClick={() => this.props.handleShow()}>
                        <div className="wordart-link italic-outline">
                            <span className="text">FIND SCREENING</span>
                        </div>
                    </Link>
                    <Link to="/become-pubber">
                    <div className="wordart-link italic-outline">
                            <span className="text">BECOME A PUBBER</span>
                        </div>
                    </Link>
                    <Link to="/faqs">
                    <div className="wordart-link italic-outline">
                            <span className="text">FAQS</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;