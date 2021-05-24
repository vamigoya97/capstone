import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import About from './containers/About'
import Faqs from './containers/Faqs'
import Home from './containers/Home'
import Pubber from './containers/Pubber'
import Screening from './containers/Screening'

const base_url = 'http://localhost:4000'
class App extends React.Component {

  state = {
    locations: [],
    screenings: [],
    isActive: false
  }

  handleHide = () => {
    this.setState({ isActive: true })
  }
  handleShow = () => {
    this.setState({ isActive: false })
  }

  componentDidMount(){
    fetch(`${base_url}/locations`)
      .then(response => response.json())
      .then(locations => this.setState({ locations }))
    
    fetch(`${base_url}/screenings`)
      .then(response => response.json())
      .then(screenings => this.setState({ screenings }))
  }

  render() {
    return (
      <div className="App">
        <Header handleShow={this.handleShow}/> 
        {/* <div id="circle" class="bounce"><p> your text here</p></div> */}
        <Switch>
          <Route key='1' path='/about' render={() => <About />}/>
          <Route key='2' path='/faqs' render={() => <Faqs />} />
          <Route key='3' path='/become-pubber' render={() => <Pubber />} />
          <Route key='4' path='/find-screening' render={() => <Screening screenings={this.state.screenings} locations={this.state.locations} isActive={this.state.isActive} handleHide={this.handleHide} />} />
          <Route key='0' exact path='/' render={() => <Home />}/>
        </Switch>
      </div>
    );
  }
}

export default App;