import React, { Component } from "react";
import hit_css from "./HowItWork.module.css";
import i3 from "../../images/works-icon-01.png";
import i4 from "../../images/works-icon-02.png";
import i5 from "../../images/works-icon-03.png";
import BenenfitCards from "../../Components/BenenfitCards/BenenfitCards";
import Workcard1 from "../../Components/Workcard/Workcard1";
import Workcard2 from "../../Components/Workcard/Workcard2";
import Workcard3 from "../../Components/Workcard/Workcard3";

// import { connect } from "react-redux";

class HowItWork extends Component {
  render() {
    return (
      <div className={hit_css.container}>
        <div className={hit_css.wrapper}>
          <div className={hit_css.left_box}>
            <h2>
              How it works if <br />
              <span>you’re a buyer.</span>
            </h2>
            <p>
              We explained the buying proces of Chamb in three simple steps. See
              how it works, benefits and FAQ.
            </p>
            <div className={hit_css.formEmail}>
              <h3>Sign up for free</h3>
              <form className={hit_css.boxEmail}>
                <input type="email" placeholder="Enter your e-mail" />
                <button>Continue</button>
              </form>
            </div>
          </div>
          <div className={hit_css.right_box}>
            <Workcard1 />
            <span></span>
            <Workcard2 />
            <span></span>
            <Workcard3 />
          </div>
        </div>
        <div className={hit_css.cardContainer}>
          <BenenfitCards />
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//     return {};
//   }
// export default connect(mapStateToProps)(HowItWork);

export default HowItWork;
