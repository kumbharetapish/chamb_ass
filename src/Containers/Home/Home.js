import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_css from "./Home.module.css";
import ProductCards from "../../Components/Cards/ProductCards";
import CarouselCards from "../../Components/CarouselCard/CarouselCards";
import Boxcard from "../../Components/Boxcard/Boxcard";
import ExitingProducts from "../../Components/exitingProducts/ExitingProducts";
import Supplier from "../../Components/Supplier/Supplier";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      carouselCards: [],
    };
  }

  componentDidMount() {
    Axios.get(
      "https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data"
    )
      .then((res) => {
        console.log(res.data[0].landingSection);
        console.log(res.data[0].carouselCards);
        localStorage.setItem("dataWeb", JSON.stringify(res.data[0]));
        this.setState({
          ...this.state,
          cardData:
            res.data[0] === undefined
              ? JSON.parse(localStorage.getItem("dataWeb").landingSection)
              : res.data[0].landingSection,
          carouselCards:
            res.data[0] === undefined
              ? JSON.parse(localStorage.getItem("dataWeb").carouselCards)
              : res.data[0].carouselCards,
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          cardData: JSON.parse(localStorage.getItem("dataWeb")).landingSection,
          carouselCards: JSON.parse(localStorage.getItem("dataWeb"))
            .carouselCards,
        });
      });

      console.log( this.props.productData );
      
  }

  render() {
    const cards = this.state.cardData.map((el) => (
      <ProductCards data={el} kry={el.id * new Date()} />
    ));
    const carouselCards = this.state.carouselCards.map((el) => (
      <CarouselCards data={el} />
    ));

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4.5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={home_css.container}>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <div className={home_css.main_container}>
          <div className={home_css.wrapper}>
            <div className={home_css.headWrapper}>
              <div className={home_css.heading}>
                <h1>{"Find your next product here."}</h1>
                <h4> {"It has never been easier."}</h4>
              </div>
              <div className={home_css.search}>
                <input
                  type="search"
                  name="products"
                  placeholder="Search something you want"
                />
                <div className={home_css.select}>
                  <select>
                    <option>Furniture </option>
                    <option>Appliances</option>
                    <option>Stationary</option>
                  </select>
                </div>

                <button>{"Search"}</button>
              </div>
            </div>
            <div className={home_css.cardsWrapper}>{cards}</div>
          </div>
        </div>
        <div className={home_css.boxcardWrapper}>
          <Boxcard />
        </div>
        <div className={home_css.exciting_box}>
          <ExitingProducts />
        </div>
        <div className={home_css.SupplierWrapper}>
          <Supplier />
        </div>

        <div className={home_css.carouselWrapper}>
          <h2> TRENDING PRODUCTS ON CHAMB</h2>
          <Slider {...settings}>{carouselCards}</Slider>
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

export default connect(mapStateToProps)(Home);
