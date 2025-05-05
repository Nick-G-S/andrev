import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faAngleRight,
  faSun,
  faMoon,
  faHeart,
  faCircleQuestion,
  faCartShopping,
  faChevronDown,
  faTimes,
  faGear,
  faMicrochip,
  faKeyboard,
  faDesktop,
  faCogs,
  faTv,
  faChair,
  faPlug,
  faLaptop,
  faSuitcase,
  faGamepad,
  faWifi,
  faVrCardboard,
  faHome,
  faUmbrellaBeach,
  faBoxOpen,
  faPaw,
  faTshirt,
  faTags,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/pichau-logo.png";

import "../Css/header.css";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const categories = [
    {
      name: "Hardware",
      icon: faMicrochip,
      submenu: [
        "Processadores",
        "Placa Mãe",
        "Memórias",
        "Placa de Vídeo",
        "Disco Rígido interno (HD)",
        "SSD",
        "Gabinete",
        "Fonte",
        "Cabos Estensores Sleeved",
        "Coolers e Whatercoolers",
        "Ventoinhas e Casemod",
        "Pasta Térmica e Refrigerantes",
        "Placas de Som",
        "Drive Óptico",
        "Acessórios para Gabinete",
        "Ver Todos"
      ],
      icon2: faAngleDown

    },
    { name: "Periféricos", icon: faKeyboard, icon2: faAngleDown},
    { name: "Computadores", icon: faDesktop, icon2: faAngleDown },
    { name: "Kit Upgrade", icon: faCogs, icon2: faAngleDown },
    { name: "Monitores", icon: faTv, icon2: faAngleDown  },
    { name: "Cadeiras e Mesas Gamer e Escritório", icon: faChair, icon2: faAngleDown  },
    { name: "Eletrônicos", icon: faPlug, icon2: faAngleDown  },
    { name: "Notebooks e Portáteis", icon: faLaptop, icon2: faAngleDown  },
    { name: "Mochilas", icon: faSuitcase, icon2: faAngleDown  },
    { name: "Video Games", icon: faGamepad, icon2: faAngleDown  },
    { name: "Redes e Wireless", icon: faWifi, icon2: faAngleDown  },
    { name: "Realidade Virtual", icon: faVrCardboard, icon2: faAngleDown  },
    { name: "Casa Inteligente", icon: faHome, icon2: faAngleDown  },
    { name: "Casa e Lazer", icon: faUmbrellaBeach, icon2: faAngleDown  },
    { name: "Openbox", icon: faBoxOpen, icon2: faAngleDown  },
    { name: "Pets", icon: faPaw, icon2: faAngleDown  },
    { name: "Vestuário", icon: faTshirt, icon2: faAngleDown  },
    { name: "Marcas", icon: faTags, icon2: faAngleDown  }
  ];

  return (
    
      <div className="home">
        <header className="header-upper">
          <span className="logo-container">
            <img className="pichau-logo" src={logo} alt="Pichau-logo" />
          </span>
          <div className="options">
            <div className="contAcess">
              <a href="/account" >
                <FontAwesomeIcon icon={faCircleUser} color="red" />
              </a>
              <span>
                Minha Conta
                <br />
                <strong>Entrar / Cadastro</strong>
              </span>
            </div>
            <div className="contact">
              <a>
                <FontAwesomeIcon icon={faCircleQuestion} color="red" />
              </a>
              <span>
                Atendimento
                <br />
                <strong>Ao cliente</strong>
              </span>
            </div>
            <div className="favoritos">
              <a>
                <FontAwesomeIcon icon={faHeart} color="red" />
              </a>
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
        <button className="departamentos" onClick={() => setSidebarOpen(true)}>
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

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div>
          <div className="SidebarLogo">
            <img className="pichau-logo-Sidebar" src={logo} alt="Pichau-logo" />
            <span className="logo-container">
              <button className="close-btn" onClick={() => setSidebarOpen(false)}>
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </span>
          </div>
          <div className="ButtonMontarPC">
            <button className="MontePC" onClick={() => setSidebarOpen(true)}>
              <div className="IconGear">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <strong>MONTE SEU PC</strong>
            </button>
          </div>
        </div>
        <h2>CATEGORIAS</h2>
        <ul className="menu-sidebar">
          {categories.map((category) => (
            <li key={category.name}>
              <div onClick={() => toggleCategory(category.name)} className="menu-item-sidebar">
                <div className="IconSidebar">
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                {category.name}
                <div className="iconSidebar2">
                  <FontAwesomeIcon icon={category.icon2} />
                </div>
              </div>
              {openCategory === category.name && category.submenu && (
                <ul className="submenu">
                  {category.submenu.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
    
  );
}

export default Header;
