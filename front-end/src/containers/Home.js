import React from 'react'

class Home extends React.Component {

    render() {
        return (
            <div className="home">
               <div className="news-conglomerate-1">
                    <div className="news-1">
                         <div className="news-1-text">
                              <h3 className="top-five" >FIVE MUST-SEE MOVIES PLAYING ON CINEPUB</h3>
                         </div>
                    </div>
                    <div className="news-2">
                         <div className="news-2-header">
                              UNAFRAID OF SUBTITLES?
                         </div>
                         <div className="news-2-text">
                              YOU WON'T WANT TO MISS THESE FOREIGN LAGNUGAGE FILMS PLAYING ON CINEPUB
                         </div>
                    </div>
               </div>
               <div className="news-conglomerate-2">
                    <div className="news-in-column">
                         <div className="news-5">
                              <h1>FILM PREMIERE</h1>
                              <h4>ATTEND THE PREMIERE OF UP AND COMING DIRECTOR PEDRO ROCA'S NEW FEATURE FILM "NUMERO ZERO"</h4>
                         </div>
                         <div className="news-4">
                              <div className="news-4-img">
                                   <img src="https://vhx.imgix.net/criterionchannelchartersu/assets/d8d32214-67b1-4012-a134-c771703fe7fa-47edd203.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280" />
                              </div>
                              <div className="news-4-text">
                                   <span>SOUTH KOREAN FILM NIGHT</span>
                                   <br></br>
                                   <p>JOIN US AND IMMERSE YOURSELF IN THE RIVETING SOUTH KOREAN FILM CULTURE</p>
                              </div>
                         </div>
                         <div className="news-3">
                              <h3>MOVIES YOU CAN ENJOY IN THE FALL AT ANY CiNEPuB LOCATION</h3>
                         </div>
                    </div>
                    <div className="news-in-row">
                         <div className="news-6">
                              <div className="news-6-text">
                                   <h3>WATCH ITALIAN ACTRESS MONICA BELLUCI IN THESE FOUR BREATHTAKING PERFORMANCES</h3>
                              </div>
                              <div className="news-6-img">
                                   <img src="https://images-na.ssl-images-amazon.com/images/I/51Ps%2Bxunv5L.jpg"/>
                              </div>
                         </div>
                         <div className="news-in-row-in-column">
                              <div className="news-7">
                                   <h3>NEW CINEPUB LOCATIONS COMING SOON TO SOUTH FLORIDA!</h3>
                              </div>
                              <div className="news-8">
                                   <h3><a href="https://www.surveymonkey.com/r/M666KRQ">PLEASE FILL OUT THIS SHORT SURVEY AND HELP US IMPROVE THE CINEPUB EXPERIENCE!</a></h3>
                              </div>
                              <div className="news-9">
                                   <h3>FOR MORE INFO AND UPDATES, FOLLOW US ON SOCIAL MEDIA</h3>
                              </div>
                         </div>
                    </div>
               </div>     
            </div>
        )
    }
}

export default Home
