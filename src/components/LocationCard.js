import React from 'react'

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
  <div>
    <h2>{name}</h2>
    <p>{type} - {dimension}</p>
    <p>{residents.length} Residents</p>
  </div>
  
  )
}
