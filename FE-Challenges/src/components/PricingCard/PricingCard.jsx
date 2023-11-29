/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./PricingCard.css";

const PricingCard = ({ title, price, desc, btnText }) => {
  //   const [title, setTitle] = useState(props.title);
  //   const [price, setPrice] = useState(props.price);
  //   const [details, setDetails] = useState([]);

  return (
    <div className="pricContainer">
      <div className="top">
        <span className="spa" >{title} </span>
        <div className="adaptPrice">
        <h1 className="tit">
          {(title =="Pro" || title == "Starter") && '$'} {price} {title == "Pro" && "/"}
        </h1>
        <span>{price == 99 ? "Month" : ""}{price == 799 ? "Year" : ""}</span>
        </div>
      </div>
      <div className="middle">
      <ul className="red-dot-list">
      {desc?.map((item, index) => (
        <li key={index}>
          <span className="red-dot"></span>
          {item}
        </li>
      ))}
    </ul>
      </div>
      <div className="bottom">
        <button className="cBtn">{btnText}</button>
        </div>
    </div>
  );
};

export default PricingCard;
