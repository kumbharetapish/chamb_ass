import React, { Component } from "react";
import exitingProducts_css from "./exitingProducts.module.css";
import img1 from "../../images/exciting_img-01.jpg";
import img2 from "../../images/exciting_img-02.jpg";

class ExitingProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          name: "Explore exciting and exotic products tailored to you.",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis doloribus assumenda a quidem illum? Non dolor cupiditate quasi corporis. Laborum velit officia neque eligendi voluptatibus!",
          preview_image: img1,
        },

        {
          name: "List your products on chamb and grow connections.",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis doloribus assumenda a quidem illum? Non dolor cupiditate quasi corporis. Laborum velit officia neque eligendi voluptatibus! Excepturi quos autem eligendi!",
          preview_image: img2,
        },
      ],
    };
  }

  render() {
    return (
      <div className={exitingProducts_css.wrapper}>
        <div className={exitingProducts_css.container}>
          <img
            src={this.state.cardData[0].preview_image}
            alt={this.state.cardData[0].name}
          />
          <h1> {this.state.cardData[0].name}</h1>
          <p>{this.state.cardData[0].description}</p>
        </div>
        <samp></samp>
        <div className={exitingProducts_css.container}>
          <img
            src={this.state.cardData[1].preview_image}
            alt={this.state.cardData[1].name}
          />
          <h1> {this.state.cardData[1].name}</h1>
          <p>{this.state.cardData[1].description}</p>
        </div>
      </div>
    );
  }
}

export default ExitingProducts;
