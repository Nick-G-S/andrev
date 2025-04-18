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
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/pichau-logo.png";

import "../Css/header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home">
        <header className="header-upper">
          <span className="logo-container">
            <img className="pichau-logo" src={logo} alt="Pichau-logo" />
          </span>
          <div className="options">
            <div className="contAcess">
              <button href="/account">
                <FontAwesomeIcon icon={faCircleUser} color="red" />
              </button>
              <span>
                Minha Conta
                <br />
                <strong>Entrar / Cadastro</strong>
              </span>
            </div>
            <div className="contact">
              <button>
                <FontAwesomeIcon icon={faCircleQuestion} color="red" />
              </button>
              <span>
                Atendimento
                <br />
                <strong>Ao cliente</strong>
              </span>
            </div>
            <div className="favoritos">
              <button>
                <FontAwesomeIcon icon={faHeart} color="red" />
              </button>
              <span>
                <span>
                  meus
                  <br />
                  <strong>favoritos</strong>
                </span>
              </span>
            </div>
            <div className="fundo">
              <button>
                <FontAwesomeIcon icon={faMoon} color="red" />
              </button>
              <span>
                Modo
                <br />
                <strong>Escuro</strong>
              </span>
            </div>
            {/* <div className="fundo">
            <FontAwesomeIcon icon={faSun} />
            <span>
              Modo<strong>Claro</strong>
            </span>
          </div> */}

            <button className="ShoppingCar">
              <span className="icon">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
              </span>
              <span className="text">
                <strong>CARRINHO</strong>
                <span>0 PRODUTO</span>
              </span>
              <span className="arrow">
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </span>
            </button>
          </div>
        </header>

        <header className="header-under">
          <button className="departamentos">
            <div className="dep-bars">
              <FontAwesomeIcon icon={faBars} size="2x" color="white" />
            </div>
            <div className="dep-words">
              <div>ACESSE TODOS OS</div>
              <strong>DEPARTAMENTOS</strong>
            </div>
            <div className="dep-arrow">
              <FontAwesomeIcon icon={faAngleRight} color="white" />
            </div>
          </button>



          

          <div className="search">
            <input placeholder="digite o que você procura..." type="text" />
          </div>


        </header>
      </div>
    </>
  );
}


// magnifying glass
export default Header;
