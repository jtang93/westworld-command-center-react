import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

// {/* NOTE: The className "host selected" renders a different style than simply "host". */}
const Host = (props) => {

  return(
    <Card
      className="host selected"
      onClick={() => props.handleSelectedHostClick(props.host)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
