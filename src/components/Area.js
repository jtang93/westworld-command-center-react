import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => { //this was a parenthesis before

  const activeHosts = () => {
      let activeHostList = props.hostsData.filter(host => host.active && host.area===props.area.name)
      return activeHostList
  }


  return (
    <div className='area' id={props.area.name}>
      <h3 className='labels'>{props.area.name.split("_").join(" ").toUpperCase()}</h3>
      <HostList hostsDataActive={activeHosts()} handleSelectedHostClick={props.handleSelectedHostClick}/>
    </div>
  )
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
