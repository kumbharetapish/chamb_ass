import React, { Component } from "react";
import Axios from "axios";
import product_css from "./Product.module.css";
import { Link } from "react-router-dom";

import { fetchProductDetails } from "../../action/action";

import Details from "../../Components/Details/Details";
import { connect } from "react-redux";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: "",
    };
  }

  componentWillMount() {
    this.props.fetchProductDetails(this.props.match.params.id);
  }

  componentDidMount() {
    Axios.get(
      `https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/${this.props.match.params.id}`
    )
      .then((res) => {
        // console.log(res.data);
        this.setState({
          ...this.state,
          productData: res.data,
        });
        sessionStorage.setItem("imgSrc", JSON.stringify(res.data.photos));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    
    return (
      <div className={product_css.container}>
        <div className={product_css.Wrapper}>
          <div className={product_css.productNameWrapper}>
            <h2>{this.state.productData.product_name} </h2>
            <p>
              By <span> {this.state.productData.posted_by}</span>
            </p>
          </div>
          <div className={product_css.productDetailsWrapper}>
            <div className={product_css.profile}>
              <img
                src={this.state.productData.user_pic}
                alt={this.state.productData.posted_by}
              />
              <h4>
                {this.state.productData.posted_by}{" "}
                <i className="fas fa-check-circle"></i>
              </h4>
              <Link to={`#`}>{"Visit Store"}</Link>
            </div>

          
              <Details
                id={this.props.match.params.id}
                preview_image={this.state.productData.preview_image}
                imgSrc={this.state.productData.photos}
                specifications={this.state.productData.specifications}
                description={this.state.productData.description}
                likes={this.state.productData.likes}
              />
          

            <div className={product_css.option}>
              <h4>{"Price"}</h4>
              <h5>
                <strong>${this.state.productData.price}</strong> pr.peice
              </h5>
              <label htmlFor="">Option</label>
              <select name="option" id="">
                <option value="0">flying Cart Green Rug</option>
                <option value="4">{/* <input type="text" /> */}</option>
                <option value="1"> Alaska</option>
                <option value="2"> Hawaii </option>
                <option value="3">califonia </option>
                <option value="4">Nevada</option>
              </select>
              <Link to="#"> Contact Company</Link>
              <p>
                <strong>
                  <i className="fa fa-clock-o" aria-hidden="true"></i> 16 hours{" "}
                </strong>{" "}
                avg. responsive time
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productData: state.productData,
  };
}

export default connect(mapStateToProps, { fetchProductDetails })(Product);
