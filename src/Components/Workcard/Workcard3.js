import React from "react";
import card from "./Workcard3.module.css";

import i3 from "../../images/works-icon-03.png";
const Workcard3 = () => {
  return (
    <div className={card.container}>
      <div className={card.numberWrapper}>03</div>
      <div className={card.infoWrapper}>
        <div class={card.icon}>
          <img src={i3} alt={"name"} />
        </div>
        <h6>SIGN UP </h6>
        <h3>
          Contact sellers <br />
          and
          <strong> start buying.</strong>
        </h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. <br />
          <br /> laudantium rem aperiam, eaque ipsa quae ab illo inventore
          veritatis
        </p>
      </div>
    </div>
  );
};

export default Workcard3;
