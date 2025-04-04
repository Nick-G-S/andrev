import { useState } from "react";

let product_actual_price = "R$459,99";
let product_image = "oi";
let product_name =
  "Gabinete Gamer Mancer Narok V2, Rainbow, Mid-Tower, Lateral de Vidro, Com 3 Fans, Preto, MCR-NRK-V2";
let product_price_inline = "R$15,99";
let product_price_vista = "R$20,99";

function Product_box() {
  return (
    <div className="product-box">
      <div className="product-img">
        <img src={product_image} alt="Imagem do produto" />
      </div>
      <div className="product-details">
        <strong>{product_name}</strong>
        <span>de -{product_actual_price}-</span>
      </div>
      <div className="product-price-vista">
        <span className="vista-span">á vista </span>
        <div>
          <strong>{product_price_vista}</strong>{" "}
        </div>
        <span>no pix com 15% de desconto</span>
      </div>
      <div className="separator"></div>
      <div className="product-parcelado-inline">
        <span className="box-txt">
          em até 12x de
          <span className="inline-payment"> {product_price_inline} </span>
        </span>

        <span>sem juros no cartão</span>
      </div>
    </div>
  );
}

export default Product_box;
