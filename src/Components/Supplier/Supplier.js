import React from "react";
import Supplier_css from "./Supplier.module.css";
import comImg from "../../images/supplier-pc-img.png";
import { Link } from "react-router-dom";
const Supplier = () => {
  return (
    <div className={Supplier_css.wrapper}>
      <div className={Supplier_css.container}>
        <div className={Supplier_css.leftSide}>
          <h4>{"Supplier"} </h4>
          <h1>
            {"Grow your store "}
            <br />
            <samp>
              {"With a new sales  "} <br /> {"channel"}{" "}
            </samp>
          </h1>
          <p>
            {
              "Never worry about sales or income ftom outbound channels. with chamb your store is directly connected to thousands of interested in your products."
            }
          </p>
          <Link to="#">Create a supplier account</Link>
        </div>
        <div className={Supplier_css.imgWrapper}>
          <img src={comImg} alt={"computer"} />
        </div>
      </div>
    </div>
  );
};

export default Supplier;
