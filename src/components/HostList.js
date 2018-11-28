import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  const createHostCards = () => {
    if (props.hostsData) {
      return props.hostsData.map(host => {
        if (!host.active) {
          return <Host key={host.id} host={host} selectHost={props.selectHost} />
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
