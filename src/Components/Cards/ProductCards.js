import React from "react";
import card_css from "./Products.module.css";
import { Link } from "react-router-dom";

const ProductCards = (props) => {
  return (
    <Link to={`./product/page/${props.data.id}`}>
      <div className={card_css.container}>
        <h2> {props.data.name}</h2>
        <img src={props.data.preview_image} alt={props.data.name} />
      </div>
    </Link>
  );
};
export default ProductCards;
