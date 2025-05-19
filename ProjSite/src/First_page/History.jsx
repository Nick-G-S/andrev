import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "../Css/history.css"
import testProduct from "../assets/Test-product1.jpg"


function History() {
    return (
        <div className="history">
            <div className="clock-icon">
                <FontAwesomeIcon icon={faClockRotateLeft} color="red" />
                <span>SEU HISTÓRICO DE NAVEGAÇÃO</span>
            </div>
            <div className="content-history">
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
                <div className="product-history"><img src={testProduct} alt="Produto" /></div>
            </div>
        </div>
    )
}

export default History