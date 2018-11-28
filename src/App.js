import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const hostsURL = "http://localhost:4000/hosts"
const areasURL = "http://localhost:4000/areas"

class App extends Component {

  state = {
    hostsData: null,
    areasData: null
  }

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  componentDidMount() {
    fetch(hostsURL)
    .then(obj => obj.json())
    .then(hostsData => {
      this.setState({hostsData})
    })
    fetch(areasURL)
    .then(obj => obj.json())
    .then(areasData => {
      this.setState({areasData})
    })
  }

  // Function that responds to an onClick on a
  // h

  render(){
    return (
      <Segment id='app'>

        <WestworldMap areasData={this.state.areasData} hostsData={this.state.hostsData} />
        <Headquarters hostsData={this.state.hostsData}/>

      </Segment>
    )
  }
}

export default App;
