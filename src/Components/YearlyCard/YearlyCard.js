import React, { Component } from "react";
import card_css from "./YearlyCard.module.css";
// import { connect } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";

class YearlyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearlyData: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "https://5ed296ce717d5f0016518314.mockapi.io/api/v1/pricing-details"
    )
      .then((res) => {
        console.log(res.data[0]);
        this.setState({
          ...this.state,
          yearlyData: Object.entries(res.data[0].yearly[0]),
        });
        console.log(this.state.yearlyData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const cardsMonthly = this.state.yearlyData.map((el) => {
      return (
        <div
          className={
            this.props.bit
              ? card_css.cardContainer
              : [card_css.cardContainer, card_css.cardFlip].join(" ")
          }
        >
          {el[1].most_popular ? (
            <p> MOST POPULAR</p>
          ) : (
            <div className={card_css.blank}></div>
          )}
          <div className={card_css.cardWrapper}>
            <div className={card_css.pricingHeader}>
              <h2>Chamb Free</h2>
              <p>No binding</p>
            </div>
            <div className={card_css.pricingBody}>
              <ul className={card_css.pricingFeatures}>
                {el[1].features.map((pt) => (
                  <li>{pt}</li>
                ))}
              </ul>
              <div className={card_css.plan_price}>
                {el[1].price === ("Free" || "Custom") ? (
                  <h2 className={card_css.plan_price}>{el[1].price}</h2>
                ) : (
                  <h2 className={card_css.plan_price}>
                    {el[1].price}
                    <span className={card_css.small}> trl. per. mth.</span>
                  </h2>
                )}
              </div>
              <Link className={card_css.select} href="#">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return cardsMonthly;
  }
}

export default YearlyCard;
