import React, { Component } from "react";
import Axios from "axios";
import home_css from "./Home.module.css";
import ProductCards from "../../Components/Cards/ProductCards";
import CarouselCards from "../../Components/Cards/CarouselCards";
import Boxcard from "../../Components/Boxcard/Boxcard";
import ExitingProducts from "../../Components/exitingProducts/ExitingProducts";

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
        console.log(
          JSON.parse(localStorage.getItem("dataWeb")).landingSection,
          err
        );

        this.setState({
          ...this.state,
          cardData: JSON.parse(localStorage.getItem("dataWeb")).landingSection,
          carouselCards: JSON.parse(localStorage.getItem("dataWeb"))
            .carouselCards,
        });
      });
  }

  render() {
    const cards = this.state.cardData.map((el) => (
      <ProductCards data={el} kry={el.id * new Date()} />
    ));
    const carouselCards = this.state.carouselCards.map((el) => (
      <CarouselCards data={el} />
    ));

    return (
      <div className={home_css.container}>
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

        <div>{carouselCards} </div>
      </div>
    );
  }
}

// import { connect } from "react-redux";
// function mapStateToProps(state) {
//   return {};
// }
// export default connect(mapStateToProps)(Home);
export default Home;
