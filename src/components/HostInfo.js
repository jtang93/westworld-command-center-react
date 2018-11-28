import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  state = {
    value: this.props.selectedHost.area
  }

  getArrayOfObjectAreas = (areas) => {
    return areas.map(area => {
        return {key: area.name, text: area.name, value: area.name}
      })
  }

  static getDerivedStateFromProps(props, state) {
    return {value: props.selectedHost.area}
  }





  handleChange = (e, {value}) => {
    // this.setState({value})
    this.props.updateHostArea({value})
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = () => {
    console.log("The radio button fired");
    this.props.updateHostStatus(this.props.selectedHost)
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.selectedHost.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.selectedHost.lastName!=="n/a" ? this.props.selectedHost.firstName + " " + this.props.selectedHost.lastName : this.props.selectedHost.firstName} | { this.props.selectedHost.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
                { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.selectedHost.active ? "Active" : "Inactive"}
                  checked={this.props.selectedHost.active}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.state.value}
                options={this.getArrayOfObjectAreas(this.props.areasData)}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

// Sometimes the label should take "Decommissioned". How are we going to conditionally render that? - LINE 53: label={"Active"}

// Checked takes a boolean and determines what position the switch is in. Should it always be true? LINE 54: checked={true}



export default HostInfo
