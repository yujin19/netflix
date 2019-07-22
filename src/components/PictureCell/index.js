import React from "react";
import "./index.css";

const PictureCell = props => {
  return (
    <div className="movie">
      <h4>{props.title}</h4>
      <div className="postShow">
        <img src={props.img} alt={props.id} />
        <div className="overlay" />
        <div>
          <button onClick={() => props.handler(props.id)}>{props.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default PictureCell;
