import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const hostsURL = "http://localhost:4000/hosts"
const areasURL = "http://localhost:4000/areas"

class App extends Component {

  state = {
    hostsData: [],
    areasData: [],
    selectedHost: null // Need to change
  }

  handleSelectedHostClick = (host) => {
    this.setState({selectedHost: host})
  }

  updateHostStatus = (host) => {

    host.active = !host.active
      this.setState({
        selectedHost: host,
        hostsData: this.state.hostsData.map(oldHost=>{
          if (oldHost.id === host.id){
            return host
          } else {
            return oldHost
          }
        })
      })
  }

  updateHostArea = ({value}) => {
    // Need to change selectedHost

    let newSelectedHost = {...this.state.selectedHost}
    newSelectedHost.area = value
    this.setState({selectedHost: newSelectedHost})

    // Make a copy of hostsData
    let oldHostsData = [...this.state.hostsData]

    let newHostsData = oldHostsData.map((host,index) => {
      if (host.id === this.state.selectedHost.id) {
        return newSelectedHost
      } else {
        return host
      }
    })

    this.setState({hostsData: newHostsData})
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

        <WestworldMap
          areasData={this.state.areasData} hostsData={this.state.hostsData}
          handleSelectedHostClick={this.handleSelectedHostClick}
           />

        <Headquarters
          hostsData={this.state.hostsData}
          areasData={this.state.areasData}
          selectedHost={this.state.selectedHost}
          handleSelectedHostClick={this.handleSelectedHostClick}
          updateHostArea={this.updateHostArea}
          updateHostStatus={this.updateHostStatus}
          />

      </Segment>
    )
  }
}

export default App;
