import React from 'react'
import '../App.css'

function Apresentation(props) {
  return (
    <div className="Apresentation">
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
      <img width={100} height={100} src={props.image} />
    </div>
  )
}

export default Apresentation
