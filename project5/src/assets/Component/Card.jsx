import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className="card">
        <img className="card-img" src={props.imgsrc} alt="myPic" />
      <h1>{props.name}</h1>
      <h3>{props.number}</h3>
      <h3>{props.email}</h3>
    </div>
  )
}

export default Card
