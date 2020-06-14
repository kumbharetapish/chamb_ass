import React from "react";
import card_css from "./BenenfitCards.module.css";
import i1 from "../../images/icon-b1.png";
import i2 from "../../images/icon-b2.png";
import i3 from "../../images/icon-b3.png";
import i4 from "../../images/icon-b4.png";
import i5 from "../../images/icon-b5.png";

import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

class BenenfitCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
    };
  }

  componentDidMount() {
    this.setState({
      cardData: [
        {
          img: i1,
          name: "Branden Minisite",
          dic:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
        },
        {
          img: i2,
          name: "Vetted Sellers",
          dic:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
        },
        {
          img: i3,
          name: "Verified with 3.part",
          dic:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
        },
        {
          img: i4,
          name: "Data Protection",
          dic:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
        },
        {
          img: i5,
          name: "Support",
          dic:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
        },
        {
          img: i1,
          name: "Branden Minisite",
          dic:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.",
        },
      ],
    });
  }
  render() {
    const card = this.state.cardData.map((el) => {
      return (
        <div className={card_css.wrapper}>
          <div class= {card_css.icon}>
            <img src={el.img} alt={el.name} />
          </div>
          <h3>{el.name}</h3>
          <p>{el.dic}</p>
        </div>
      );
    });

    return <div className={card_css.container}>{card}</div>;
  }
}
export default BenenfitCards;
