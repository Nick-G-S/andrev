import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/pichau-logo.png';


import "../Css/header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home">
        <span className="logo-container">
          <img className="pichau-logo" src={logo} alt="Pichau-logo" />
        </span>
        <div className="departamentos">
          <div className="dep-bars">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="dep-words">
            <span>ACESSE TODOS OS</span>
            <span>DEPARTAMENTOS</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div className="options">
          <div className="contAcess">
            <FontAwesomeIcon icon={faCircleUser} />
            <span>
              Minha Conta  <strong>Entrar / Cadastro</strong>
            </span>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faCircleQuestion} size="2x"/>
            <span>
             Atendimento
             <br /> 
             <strong>Ao cliente</strong>
            </span>
          </div>
          <div className="favoritos">
            <FontAwesomeIcon icon={faHeart} />
            <span>
              <span>
                meus <strong>favoritos</strong>
              </span>
            </span>
          </div>
          <div className="fundo">
            <FontAwesomeIcon icon={faMoon} />
            <span>
              <span>
                Modo <strong>Claro</strong>
              </span>
            </span>
          </div>
          {/* <div className="fundo">
            <FontAwesomeIcon icon={faSun} />
            <span>
              Modo<strong>Escuro</strong>
            </span>
          </div> */}
          <div className="ShoppingCar">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>
              <strong>Carrinho</strong>
            </span>
          </div>
        </div>
        <div className="search">
          <span>digite o que você procura...</span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </>
  );
}

// magnifying glass
export default Header;
