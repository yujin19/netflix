import React from "react";
import Header from "../Header";
import PictureCell from "../PictureCell";

const MovieList = props => {
  const data = props.data;
  return (
    <div>
      <Header name={props.name} />
      <div className="list">
        {data === undefined
          ? null
          : data.map((ele, index) => {
              return (
                <PictureCell
                  title={ele.title}
                  key={index}
                  img={ele.img}
                  alt={ele.id}
                  handler={() => props.handler(index)}
                  btn={props.btn}
                />
              );
            })}
      </div>
    </div>
  );
};

export default MovieList;
