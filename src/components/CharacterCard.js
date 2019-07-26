import React from 'react'

export default function CharacterCard (props) {
  console.log("char card", props)
  return (
    <div>
     <h2>{props.name}</h2>
     <img src={props.image} />

    </div>
  
  )
}
