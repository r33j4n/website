import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Card.css";

const JCard = (props) => {
  // const a = props.name;
  const navigate = useNavigate();
  const handleClick = (arg) => {
    console.log(arg);
    navigate(`/jwellery/${arg}`);
  }
  return (
    <div className="box btn_shadow" onClick={() => handleClick(props.name)}>
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

export default JCard;
