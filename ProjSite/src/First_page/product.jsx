import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Product_box from "./Product_box";

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
        
        <Product_box />
        
      </div>
    </div>
  );
}

export default Product;
