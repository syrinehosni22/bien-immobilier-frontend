import React from 'react'

export default function Client(props) {
    const {id,name,profession} = props;
  return (
    <div className="client-listing-component">
        <div>name:{name}</div>
        <div>profession:{profession}</div>
    </div>
  )
}


