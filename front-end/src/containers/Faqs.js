import React from 'react'

class Faqs extends React.Component {
    render() {
        return(
            <div className="faqs-container">
                <div className="faqs-container-1">
                    <div className="question-1">
                        <h2>Is cinepub screening movies at the moment?</h2>
                        <p>No. Cinepub is not an active service at the moment.</p>
                    </div>
                    <div className="question-2">
                        <h2>Are the locations listed real cinepub locations?</h2>
                        <p>They are not. They are tentative locations that hopefully some day will hold cinepub screenings.</p>
                    </div>
                    <div className="question-3">
                        <h2>How much does it cost to watch a movie at any cinepub location?</h2>
                        <p>That has yet to be determined.</p>
                    </div>
                </div>
                <div className="faqs-container-2">
                    <div className="question-4">
                        <h2>Will any location open in the near future?</h2>
                        <p>It is still unclear.</p>
                    </div>
                    <div className="question-5">
                        <h2>Is there a way I can contribute for a cinepub to open near my house?</h2>
                        <p>Yes! Start by completing this <a href="https://www.surveymonkey.com/r/M666KRQ">short user feedback survey.</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faqs