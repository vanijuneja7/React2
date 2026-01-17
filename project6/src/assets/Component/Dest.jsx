import React from 'react';
import './Dest.css';

const Dest = (props) => {
  return (
    <div className="dest">
      <img className="dest-img" src={props.imgsrc} alt={props.name} />

      <div className="des-image">
        <div className="location-row">
          <span className="location">📍 {props.name.toUpperCase()}</span>
          <a href={props.map} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>

        <h2>{props.name}</h2>
        <h3>{props.date}</h3>
        <p>{props.about}</p>
      </div>
    </div>
  );
};

export default Dest;


