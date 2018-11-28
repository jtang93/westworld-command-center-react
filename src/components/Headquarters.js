import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  state = {
    selectedHost: null
  }

  // Should this function and selectedHost be in state
  selectHost = (props) => {
    this.setState({selectedHost: props.host})
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
          <ColdStorage hostsData={this.props.hostsData} selectHost={this.selectHost}/>
        </Grid.Column>
        <Grid.Column width={5}>
          <Details selectedHost={this.state.selectedHost} />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
