import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  const createHostCards = () => {
    if (props.hostsDataInactive) {
      return props.hostsDataInactive.map(host => {
        if (!host.active) {
          return <Host key={host.id} host={host} handleSelectedHostClick={props.handleSelectedHostClick} />
        } else {
          null
        }
      })
    } else if (props.hostsDataActive) {
      return props.hostsDataActive.map(host => {
        if (host.active) {
          return <Host key={host.id} host={host} handleSelectedHostClick={props.handleSelectedHostClick} />
        } else {
          null
        }
      })
    }
  }

  const showData = () => {
    console.log(props.hostsData)
  }

  return(
    <Card.Group itemsPerRow={6}>
      {console.log(props.hostsData)}
      {createHostCards()}
    </Card.Group>
  )
}

export default HostList
