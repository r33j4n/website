import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="box btn_shadow ">
      <div className="img">
        <img src={props.image}/>
      </div>
      <div className="category1 d_flex">
        <p>{props.title}</p>
        <h2>{props.price}</h2>
      </div>

      
    </div>
  );
};

export default Card;
