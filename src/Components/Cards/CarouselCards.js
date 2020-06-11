import React from "react";

const ProductCards = (props) => {
  return (
    <div>
      <img src={props.data.preview_image} alt={props.data.name} />
      <h2> {props.data.name}</h2>
    </div>
  );
};
export default ProductCards;
