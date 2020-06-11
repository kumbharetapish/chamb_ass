import React, { Component } from "react";
import box_css from "./Boxcard.module.css";
import img1 from "../../images/xpann-icon.jpg";
import img2 from "../../images/create-icon.jpg";
import img3 from "../../images/get-icon.jpg";

class Boxcard extends Component {
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
          name: "“Chamb” Your Business",
          description:
            "Grow easily with chamb. Create free account. We help expanding your business easily.",
          preview_image: img1,
        },
        {
          name: "Create and add",
          description:
            "Grow easily with chamb. Create free account. We help expanding your business easily.",
          preview_image: img2,
        },
        {
          name: "Get inspired",
          description:
            "Grow easily with chamb. Create free account. We help expanding your business easily.",
          preview_image: img3,
        },
      ],
    });
  }
  render() {
    const cards = this.state.cardData.map((el) => {
      return (
        <div className={box_css.container}>
          <img src={el.preview_image} alt={el.name} />
          <h2> {el.name}</h2>
          <p>{el.description}</p>
        </div>
      );
    });
    return <div className={box_css.wrapper}>{cards}</div>;
  }
}

export default Boxcard;
