import React from 'react'

class Pubber extends React.Component {
    render() {
        return(
            <div className="pubber-container">
                <div className="pubber-info">
                    <p>If interested on joining Cinepub as a business opoortunity, <a href="https://www.surveymonkey.com/r/M666KRQ">please fill out this form.</a> If you are eligible, we will contact you with further instructions.</p>
                </div>
                <div className="pubber-reqs">
                    <div className="pubber-less-20">
                        <p> For eligible candidates with <span className="pubber-span">less than 20 spectators per screening,</span> see equipment and requirements below.</p>
                        <div className="img-less-20">
                        </div>
                    </div>
                    <div className="pubber-less-50">
                        <p> For eligible candidates with<span className="pubber-span"> more than 20, less than 50 spectators per screening, </span>see equipment and requirements below.</p>
                        <div className="img-less-50">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pubber