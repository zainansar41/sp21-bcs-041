import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="image_container">
          <img
            className="Cardimage"
            src={`http://localhost:5000/images/${props.image}`}
            alt="Avatar"
          />
        </div>
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>by: {props.author}</p>
        </div>
      </div>
    </>
  );
}
