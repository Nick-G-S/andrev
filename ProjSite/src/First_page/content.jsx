import { useState } from "react";
import wide_promo from "../assets/promo-pichau-WIDE.jpg";
import lil_promo from "../assets/promo-pichau-little.jpg";
import lil_promo2 from "../assets/promo-pichau-little-2.jpg";
import lil_wide_promo from "../assets/promo-pichau-little-wide.jpg";
import lil_wide2_promo from "../assets/promo-pichau-little-wide-2.jpg";
import gaming from "../assets/icon-gaming-white.png";
import monte from "../assets/icon-monte-white.png";
import pichau_white from "../assets/icon-pichau-white.png";
import work_station from "../assets/icon-workstation.png";

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
          <div className="little promo">
            <img src={lil_promo} alt="" />
          </div>
          <div className="little promo">
            <img src={lil_promo2} alt="" />
          </div>
        </div>

        <div className="lil-wide promo">
          <img src={lil_wide2_promo} alt="" />
        </div>
      </div>

      <div className="box-containers">
        <div className="box">
          <div className="box-logo gaming">
            <img src={gaming} alt="" />
          </div>
          <div className="box-txt">
            <strong>GAMER</strong>
            <span>O PC PERFEITO PARA JOGAR</span>
          </div>
        </div>

        <div className="box">
          <div className="box-logo work_station">
            <img src={work_station} alt="" />
          </div>
          <div className="box-txt">
            <strong>WORK </strong>
            <strong>STATION</strong>
            <span>PARA MODELAGEM E RENDERIZAÇÃO</span>
          </div>
        </div>

        <div className="box">
          <div className="box-logo pichau-white">
            <img src={pichau_white} alt="" />
          </div>
          <div className="box-txt">
            <strong>HOME</strong>
            <span>PARA CASA OU ESCRITÓRIO</span>
          </div>
        </div>

        <div className="box monte">
          <div className="box-logo">
            <img src={monte} alt="" />
          </div>
          <div className="box-txt">
            <strong>MONTE</strong>
            <span>O SEU PC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
