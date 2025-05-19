
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
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
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/pichau-logo.png";

import "../Css/header.css";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openProcessors, setOpenProcessors] = useState(false);


  const [openVideoCards, setOpenVideoCards] = useState(false);
  const toggleVideoCards = () => setOpenVideoCards(!openVideoCards);


  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleProcessors = () => {
    setOpenProcessors(!openProcessors);
  };

  const categories = [
    {
      name: "Hardware",
      icon: faMicrochip,
      icon2: faAngleDown,
      submenu: [
        {
          name: "Processadores",
          icon2: faAngleDown,
          submenuItems: [
            { name: "Intel", link: "/processadores/Intel" },
            { name: "AMD", link: "/processadores/AMD" },
            { name: "Ver Todos", link: "/processadores" },
          ]
        },
        "Placa Mãe",
        "Memórias",
        {
          name: "Placa de Vídeo",
          icon2: faAngleDown,
          submenuItems: [
            { name: "NVIDIA GeForce", link: "/Placa de Vídeo/NVIDIA GeForce" },
            { name: "AMD Readeon", link: "/Placa de Vídeo/AMD Readeon" },
            { name: "Intel Ark", link: "/Placa de Vídeo/Intel Ark" },
            { name: "Ver Todos", link: "/Placa de Vídeo " },
          ]
        },

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
        "Ver Todos",
      ],
    },
    {
      name: "Periféricos",
      icon: faKeyboard,
      icon2: faAngleDown,
      submenu: [
        "Acessórios",
        "Caixa de Som",
        "Teclado",
        "Fone de Ouvido",
        "Microfones",
        "Kit Teclado e Mouse",
        "Kits Periféricos",
        "Mouse",
        "Mousepad",
        "Cabos e Adaptadores",
        "Impressoras",
        "Armazenamento",
        "Energia",
        "Webcam",
        "Pendrives",
        "Mesa Digitalizadora",
        "Ver Todos",
      ],
    },
    {
      name: "Computadores", icon: faDesktop, icon2: faAngleDown,
      submenu: [
        "PC Gamer", 
        "computadores Woskstation", 
        "Computadores Casa e Escritorio", 
        "Ver Todos",]
    },
    { name: "Kit Upgrade", icon: faCogs },
    { name: "Monitores", icon: faTv, icon2: faAngleDown, 
      submenu: []

     },
    { name: "Cadeiras e Mesas Gamer e Escritório", icon: faChair, icon2: faAngleDown, submenu: [], },
    { name: "Eletrônicos", icon: faPlug, icon2: faAngleDown, submenu: [] },
    { name: "Notebooks e Portáteis", icon: faLaptop, icon2: faAngleDown, submenu: [] },
    { name: "Mochilas", icon: faSuitcase },
    { name: "Video Games", icon: faGamepad, icon2: faAngleDown, submenu: [] },
    { name: "Redes e Wireless", icon: faWifi, icon2: faAngleDown, submenu: [] },
    { name: "Realidade Virtual", icon: faVrCardboard, icon2: faAngleDown, submenu: [], },
    { name: "Casa Inteligente", icon: faHome, icon2: faAngleDown, submenu: [] },
    { name: "Casa e Lazer", icon: faUmbrellaBeach, icon2: faAngleDown, submenu: [] },
    { name: "Openbox", icon: faBoxOpen },
    { name: "Pets", icon: faPaw, icon2: faAngleDown, submenu: [] },
    { name: "Vestuário", icon: faTshirt, icon2: faAngleDown, submenu: [] }
  ];

  return (
    <div className="home">
      <header className="header-upper">
        <Link to="/" className="logo-container">
          <img className="pichau-logo" src={logo} alt="Pichau-logo" />
        </Link>
        <div className="options">
          <div className="contAcess">
            <Link to="/account">
              <FontAwesomeIcon icon={faCircleUser} color="red" />
            </Link>

            <span>
              Minha Conta
              <br />
              <strong>Entrar / Cadastro</strong>
            </span>
          </div>
          <div className="contact">
            <Link to="/atendimento">
              <FontAwesomeIcon icon={faCircleQuestion} color="red" />
            </Link>
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

          <button className="ShoppingCar">
            <span className="iconCar">
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
              <button
                className="close-btn"
                onClick={() => setSidebarOpen(false)}
              >
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
              <div
                onClick={() => toggleCategory(category.name)}
                className={`menu-item-sidebar ${openCategory === category.name ? 'active' : ''}`}
              >
                <div className="category-left">
                  <div className="IconSidebar">
                    <FontAwesomeIcon icon={category.icon} />
                  </div>
                  <span className="category-name">{category.name}</span>
                </div>
                <div className="iconSidebar2">
                  <FontAwesomeIcon icon={category.icon2} />
                </div>
              </div>

              <ul className={`submenu ${openCategory === category.name ? 'open' : ''}`}>
                {category.submenu && category.submenu.map((item, index) => {
                  if (typeof item === "string") {
                    return (
                      <li
                        key={item}
                        onClick={item === "Processadores" ? toggleProcessors : null}
                        className="submenu-item"
                      >
                        <span>{item}</span>
                        {item === "Processadores" && (
                          <FontAwesomeIcon icon={category.icon2} className="icon-processadores" />
                        )}
                      </li>
                    );
                  }

                  const isProcessors = item.name === "Processadores";
                  const isVideoCards = item.name === "Placa de Vídeo";

                  const isOpen = isProcessors ? openProcessors : isVideoCards ? openVideoCards : false;
                  const toggleSubmenu = isProcessors
                    ? toggleProcessors
                    : isVideoCards
                      ? toggleVideoCards
                      : () => { };

                  return (
                    <div key={item.name}>
                      <li onClick={toggleSubmenu} className="submenu-item">
                        <span>{item.name}</span>
                        <FontAwesomeIcon icon={category.icon2} className="icon-processadores" />
                      </li>
                      <ul className={`submenu-processadores ${isOpen ? 'open' : ''}`}>
                        {isOpen &&
                          item.submenuItems.map((subItem) => (
                            <li key={subItem.name}>
                              <a href={subItem.link}>{subItem.name}</a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>

      </div>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}

export default Header;
