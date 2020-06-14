import React from "react";
import coro_css from "./CarouselCard.module.css";
const CarouselCards = (props) => {
  return (
    <div className={coro_css.wrapper}>
      <div className={coro_css.imgwrapper}>
        <img src={props.data.preview_image} alt={props.data.name} />
      </div>
      <div className={coro_css.detailWrapper}>
        <div className={coro_css.name}>
          <h2>{props.data.name}</h2>
          <p>
            By <span>{props.data.posted_by} </span> Under
            <span> {props.data.category}</span>
          </p>
        </div>
        <div className={coro_css.price}> ${props.data.price}</div>
      </div>
      <div className={coro_css.likeWrapper}>
        <div className={coro_css.wishlist}>
          <i className="far fa-star"></i> Save to Wishlist
        </div>
        <div className={coro_css.like}>
          <i class="far fa-thumbs-up"></i> Like this
        </div>
      </div>
    </div>
  );
};
export default CarouselCards;
