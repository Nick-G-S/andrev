import { useState } from "react";
import wide_promo from "../assets/promo-pichau-WIDE.jpg";
import lil_promo from "../assets/promo-pichau-little.jpg";
import lil_promo2 from "../assets/promo-pichau-little-2.jpg";
import lil_wide_promo from "../assets/promo-pichau-little-wide.jpg";
import lil_wide2_promo from "../assets/promo-pichau-little-wide-2.jpg";

import "../Css/content.css";

function Content() {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      <div className="wide_promo">
        <img src={wide_promo} alt="" />
      </div>

      <div className="small-container">
        <div div className="lil-wide promo">
          <img src={lil_wide_promo} alt="" />
        </div>

        <div className="promo-small-container">
          <div className="liltle promo">
            <img src={lil_promo} alt="" />
          </div>
          <div className="liltle promo">
            <img src={lil_promo2} alt="" />
          </div>
        </div>

        <div className="lil-wide promo">
          <img src={lil_wide2_promo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content;
