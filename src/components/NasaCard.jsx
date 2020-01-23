import React from "react";
import "../styles/NasaCards.css";
import NasaCardStyle from "../styles/NasaCardStyle";

function NasaCard(props) {
  return (
    <div className="photo-list" key={props.id}>
      <img className="nasa-photos" src={props.img} alt="one of nasa" />
      <h1 className="photo-title">{props.title}</h1>
      <h3 className="photo-date">Date: {props.date}</h3>
      <p className="photo-explanation">{props.description}</p>
    </div>
  );
}

export default NasaCard;
