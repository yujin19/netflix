import React from "react";

const PictureCell = props => {
  return (
    <div className="movie">
      <h3>{props.title}</h3>
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
