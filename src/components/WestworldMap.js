import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {

  const createAreaCards = () => {
    if (props.areasData) {
      return props.areasData.map(area =>
        <Area key={area.id} area={area} hostsData={props.hostsData} handleSelectedHostClick={props.handleSelectedHostClick}/>)
    }
  }

  return (
    <Segment id="map" >
      {createAreaCards()}
    </Segment>
  )
}

export default WestworldMap
