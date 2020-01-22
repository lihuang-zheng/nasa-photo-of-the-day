import React from "react";
import "../styles/NasaCards.css";

function NasaCard(props) {
  return (
    <div className="photo-list" key={props.id}>
      <img className="nasa-photos" src={props.img} alt="one of nasa" />
      <h2 className="photo-date">Date: {props.date}</h2>
      <p className="photo-explanation">{props.description}</p>
    </div>
  );
}

export default NasaCard;
