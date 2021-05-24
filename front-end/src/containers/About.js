import React from 'react'

class About extends React.Component {
    render() {
        return(
            <div className="about-container">
                    <div className="about-1">
                        <p>Cinepub intends to make the <span className="span-about" > movie-going experience </span> an alternative to a casual night out by bringing together smaller groups of people in <span className="span-about" > smaller sized screening areas. </span> Just like in the early ages of cinema with Nickelodeon theaters, Cinepub will connect local businesses, public spaces or any other piece of real estate deemed safe and compliant, with the average movie-goer eager for a unique screening experience near them. It will hold a <span className="span-about" > unique  collection of films </span> characterized by its intellectually and culturally defiant styles while upholding the <span className="span-about" > highest quality in visuals and surround sound. </span></p>
                    </div>
                    <div className="about-2">
                        <p>Its goal is to create an ecosystem where filmmakers are encouraged to showcase their films in a more<span className="span-about"> local, intimate platform </span> and moviegoers to identify Cinepub as an opportunity for an <span className="span-about">enriching, relationship building experience. </span> As big theater chains are increasingly leaning towards showcasing major hollywood studio blockbusters, Cinepub is determined to exhibit <span className="span-about"> past and contemporary films </span> that would go somewhat unnoticed or would have to be streamed online otherwise.</p>
                        <p>If you have time, please fill out this <a href="https://www.surveymonkey.com/r/M666KRQ">short user feedback survey!</a></p>
                    </div>
            </div>
        )
    }
}

export default About;
