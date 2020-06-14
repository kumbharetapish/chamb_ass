import React, { Component } from "react";
import footer_css from "./Footer.module.css";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className={footer_css.container}>
        <div className={footer_css.wrapper}>
          <div className={footer_css.formWrapper}>
            <div className={footer_css.formHeading}>
              <h2>Start a free account today</h2>
            </div>
            <form>
              <input
                type="text"
                name="email"
                placeholder="Enter your e-mail "
              />
              <button type="submit" value="continue">
                continue
              </button>
            </form>
            <div className={footer_css.conWrapper}>
              <h3>Question? Call us on 12 34 56 78 for help</h3>
              <p>Easy setup - no payment fees - up to 100 products for free</p>
            </div>
          </div>
          <span></span>
          <div className={footer_css.linkDivWrapper}>
            <div className={footer_css.linkWrapper}>
              <h4> {"SELL ON CHAMB"}</h4>
              <ul>
                <li>
                  <Link to="/pricing"> Pricing </Link>
                </li>
              </ul>
            </div>

            <div className={footer_css.linkWrapper}>
              <h4> {"BUY ON CHAMB"}</h4>
              <ul>
                <li>
                  <Link to="/how_it_work"> How it works suppliers</Link>{" "}
                </li>
              </ul>
            </div>

            <div className={footer_css.linkWrapper}>
              <h4> {"COMPANY"}</h4>
              <ul>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
              </ul>
            </div>

            <div className={footer_css.linkWrapper}>
              <h4> {"INDUSTRIES"}</h4>
              <ul>
                <li>
                  <Link to="#"> Textiles</Link>
                </li>
                <li>
                  <Link to="#">Furniture</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
