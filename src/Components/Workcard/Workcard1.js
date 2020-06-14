import React from "react";
import card from "./Workcard1.module.css";
import i1 from "../../images/works-icon-01.png";

const  Workcard1 = () => {
  return (
    <div className={card.container}>
      <div className={card.numberWrapper}>01</div>
      <div className={card.infoWrapper}>
        <div class={card.icon}>
          <img src={i1} alt={"name"} />
        </div>
        <h6>SIGN UP </h6>
        <h3>
          <strong> Small or big ,</strong> <br /> we have the solution.
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

export default Workcard1