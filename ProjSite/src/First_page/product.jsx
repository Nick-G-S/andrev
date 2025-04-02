import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import "../Css/product.css";

function Product() {
  const [count, setCount] = useState(0);

  return (
    <div className="product">
      <div className="new-product">
        <div className="new-product-txt">
          <FontAwesomeIcon icon={faCircleExclamation} size="2xl" color="red" />
          <h1>PRODUTOS NOVOS E LANÇAMENTOS</h1>
        </div>

        <div className="product-box">
          <div className="product-img">
            <img src="" alt="" />
          </div>
          <div className="product-details">
            <strong>
              Gabinete Gamer Mancer Narok V2, Rainbow, Mid-Tower, Lateral de
              Vidro, Com 3 Fans, Preto, MCR-NRK-V2
            </strong>
          </div>
          <div className="product-price-vista">
            <span>á vista 189,99</span>
            <span>no pix com 15% de desconto</span>
          </div>
          <div className="separator">
            
          </div>
          <div className="product-parcelado-inline">
            <span>em até 12x de 185,90</span>
            <span>sem juros no cartão</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
