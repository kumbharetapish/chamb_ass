import React, { Component } from "react";
import details_css from "./Details.module.css";
import { connect } from "react-redux";
import Axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      Preview: null,
      like: "",
      specifications: [],
    };
  }

  componentDidMount() {
    Axios.get(
      `https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/${this.props.id}`
    )
      .then((res) => {
        // console.log(res.data);
        this.setState({
          ...this.state,
          photos: [...res.data.photos],
          like: res.data.likes,
          specifications: [...Object.entries(res.data.specifications)],
        });

        console.log(Object.entries(res.data.specifications));

        sessionStorage.setItem("imgSrc", JSON.stringify(res.data.photos));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handelPreview = (ImgSrc) => {
    this.setState({
      Preview: ImgSrc,
    });
  };

  render() {
    const imgs = this.state.photos.map((el) => {
      return (
        <div
          onClick={() => this.handelPreview(el)}
          className={
            this.state.Preview === el
              ? details_css.hightLightPhoto
              : details_css.photos
          }
        >
          <img src={el} alt="" />
        </div>
      );
    });

    const spec_table = this.state.specifications.map((el) => {
      return (
        <tr>
          <th>{el[0]}</th>
          <th className={details_css.col2}>{el[1]}</th>
        </tr>
      );
    });
    return (
      <div className={details_css.container}>
        <div className={details_css.imgWrapper}>
          <div className={details_css.previewWrapper}>
            <img
              src={
                this.state.Preview === null
                  ? this.props.preview_image
                  : this.state.Preview
              }
              alt=""
            />
          </div>
          <div className={details_css.photosWrapper}>{imgs}</div>
          <div className={details_css.likeWrapper}>
            <div className={details_css.wishlist}>
              <i className="fas fa-star"></i> Save to Wishlist
            </div>
            <div className={details_css.like}>
              <i class="fas fa-thumbs-up"></i> Like this
            </div>
            <p>{`${this.state.like} likes`} </p>
          </div>
        </div>
        <div className={details_css.DesWrapper}>
          <h4>{"Description"}</h4>
          <p>{this.props.description}</p>
        </div>
        <div className={details_css.speWrapper}>
          <h4>{"Specifications"}</h4>

          <table>{spec_table}</table>
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
const mapStateToAction = (dispatch) => {
  return { getData: (id) => dispatch({ type: "GET_PRODUCT_DETAILS", id: 1 }) };
};

export default connect(mapStateToProps)(Details);
