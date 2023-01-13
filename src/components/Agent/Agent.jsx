import React from 'react'

export default function Agent(props) {
    const {id,name,profession} = props;
  return (
    <div className="agents-listing-component">
        <div>name:{name}</div>
        <div>profession:{profession}</div>
    </div>
  )
}


