import React from "react";
import card from "./Workcard2.module.css";
import i2 from "../../images/works-icon-02.png";

const Workcard2 = () => {
  return (
    <div className={card.container}>
      <div className={card.numberWrapper}>02</div>
      <div className={card.infoWrapper}>
        <div class={card.icon}>
          <img src={i2} alt={"name"} />
        </div>
        <h6>Search </h6>
        <h3>
          We revolutionized
          <br /><strong> searching.</strong>
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

export default Workcard2;
