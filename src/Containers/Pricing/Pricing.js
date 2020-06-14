import React, { Component } from "react";
import prc_css from "./Pricing.module.css";

import MonthlyCard from "../../Components/Monthlycard/Monthlycard";
import YearlyCard from "../../Components/YearlyCard/YearlyCard";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleBit: true,
    };
  }

  toggleMonthly = () => {
    this.setState({
      toggleBit: true,
    });
  };

  toggleYearly = () => {
    this.setState({
      toggleBit: false,
    });
  };
  render() {
    return (
      <div className={prc_css.container}>
        <div className={prc_css.wrapper}>
          <div className={prc_css.headingWrapper}>
            <h1>Pricing on Chamb</h1>
            <p>
              Get targeted distribution to Chamb's built-in network of global
              companies. <br /> Choose the right one for you.{" "}
            </p>
          </div>
          <div className={prc_css.buttonWrapper}>
            <div className={prc_css.button}>
              <button
                className={this.state.toggleBit ? prc_css.btnHightLight : ""}
                onClick={this.toggleMonthly}
              >
                {" "}
                Monthly{" "}
              </button>
              <button
                className={this.state.toggleBit ? "" : prc_css.btnHightLight}
                onClick={this.toggleYearly}
              >
                {" "}
                Yearly{" "}
              </button>
            </div>
          </div>

          <div className={prc_css.cardWrapper}>
            <MonthlyCard bit={this.state.toggleBit} />
            <YearlyCard bit={this.state.toggleBit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
