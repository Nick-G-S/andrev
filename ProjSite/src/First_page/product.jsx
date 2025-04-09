import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import Product_box from "./Product_box";

import "../Css/product.css";

function Product() {
  const [count, setCount] = useState(0);

  return (
    <div className="product">

      <div className="new-product">
        <div className="txt">
          <FontAwesomeIcon icon={faCircleExclamation} size="xl" color="red" />
          <span>PRODUTOS NOVOS E LANÇAMENTOS</span>
        </div>
        <div className="new-product items">
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
        </div>
      </div>

      <div className="featured-product">
        <div className="txt">
          <FontAwesomeIcon icon={faFireFlameCurved} size="xl" color="red" />
          <span>OFERTAS EM DESTAQUE</span>
        </div>
        <div className="featured-product items">
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
          <Product_box />
        </div>
      </div>
    </div>
  );
}

export default Product;
