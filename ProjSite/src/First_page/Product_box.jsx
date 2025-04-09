import React, { useEffect, useState } from "react";


function Product_box() {
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/produtos") // URL da sua API
  //     .then((response) => response.json())
  //     .then((data) => setProdutos(data))
  //     .catch((error) => console.error("Erro ao buscar produtos:", error));
  // }, []);

  const products = [
    {
      id: 1,
      price: "R$459,99",
      image: "oi",
      name: "Gabinete Gamer Mancer Narok V2, Rainbow, Mid-Tower, Lateral de Vidro, Com 3 Fans, Preto, MCR-NRK-V2",
      price_inline: "R$15,99",
      price_vista: "R$20,99",
    },
  ];

  const product = products[0]

  return (
    <div className="product-box">
      <div className="product-img">
        <img src={product.image} alt="Imagem do produto" />
      </div>
      <div className="product-details">
        <strong>{product.name}</strong>
        <span>de -{product.price}-</span>
      </div>
      <div className="product-price-vista">
        <span className="vista-span">á vista </span>
        <div>
          <strong>{product.price_vista}</strong>{" "}
        </div>
        <span>no pix com 15% de desconto</span>
      </div>
      <div className="separator"></div>
      <div className="product-parcelado-inline">
        <span className="box-txt">
          em até 12x de
          <span className="inline-payment"> {product.price_inline} </span>
        </span>

        <span>sem juros no cartão</span>
      </div>
    </div>
  );
}

export default Product_box;
