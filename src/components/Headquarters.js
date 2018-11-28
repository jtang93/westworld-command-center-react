import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
          <ColdStorage
            hostsData={this.props.hostsData} handleSelectedHostClick={this.props.handleSelectedHostClick}/>
        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            areasData={this.props.areasData}
            selectedHost={this.props.selectedHost}
            updateHostArea={this.props.updateHostArea}
            updateHostStatus={this.props.updateHostStatus}
             />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
