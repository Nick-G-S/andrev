// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faCircleUser,
//   faAngleRight,
//   faSun,
//   faMoon,
//   faHeart,
//   faCircleQuestion,
//   faCartShopping,
//   faChevronDown,
//   faTimes,
//   faGear,
//   faMicrochip,
//   faKeyboard,
//   faDesktop,
//   faCogs,
//   faTv,
//   faChair,
//   faPlug,
//   faLaptop,
//   faSuitcase,
//   faGamepad,
//   faWifi,
//   faVrCardboard,
//   faHome,
//   faUmbrellaBeach,
//   faBoxOpen,
//   faPaw,
//   faTshirt,
//   faTags,
//   faAngleDown,
//   faAngleUp
// } from "@fortawesome/free-solid-svg-icons";
// import logo from "../assets/pichau-logo.png";

// import "../Css/header.css";

// function Header() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openCategory, setOpenCategory] = useState(null);
//   const toggleCategory = (category) => {
//     setOpenCategory(openCategory === category ? null : category);
//   };

//   const categories = [
//     {
//       name: "Hardware",
//       icon: faMicrochip,
//       icon2: faAngleDown,
//       submenu: [
//         "Processadores",
//         "Placa Mãe",
//         "Memórias",
//         "Placa de Vídeo",
//         "Disco Rígido interno (HD)",
//         "SSD",
//         "Gabinete",
//         "Fonte",
//         "Cabos Estensores Sleeved",
//         "Coolers e Whatercoolers",
//         "Ventoinhas e Casemod",
//         "Pasta Térmica e Refrigerantes",
//         "Placas de Som",
//         "Drive Óptico",
//         "Acessórios para Gabinete",
//         "Ver Todos"
//       ]
//     },
//     {
//       name: "Periféricos", icon: faKeyboard, icon2: faAngleDown,
//       submenu: [
//         "Acessórios",
//         "Caixa de Som",
//         "Teclado",
//         "Fone de Ouvido",
//         "Microfones",
//         "Kit Teclado e Mouse",
//         "Kits Periféricos",
//         "Mouse",
//         "Mousepad",
//         "Cabos e Adaptadores",
//         "Impressoras",
//         "Armazenamento",
//         "Energia",
//         "Webcam",
//         "Pendrives",
//         "Mesa Digitalizadora",
//         "Ver Todos"]
//     },
//     { name: "Computadores", icon: faDesktop, icon2: faAngleDown, submenu: [] },
//     { name: "Kit Upgrade", icon: faCogs, icon2: faAngleDown, submenu: [] },
//     { name: "Monitores", icon: faTv, icon2: faAngleDown, submenu: [] },
//     { name: "Cadeiras e Mesas Gamer e Escritório", icon: faChair, icon2: faAngleDown, submenu: [] },
//     { name: "Eletrônicos", icon: faPlug, icon2: faAngleDown, submenu: [] },
//     { name: "Notebooks e Portáteis", icon: faLaptop, icon2: faAngleDown, submenu: [] },
//     { name: "Mochilas", icon: faSuitcase, icon2: faAngleDown, submenu: [] },
//     { name: "Video Games", icon: faGamepad, icon2: faAngleDown, submenu: [] },
//     { name: "Redes e Wireless", icon: faWifi, icon2: faAngleDown, submenu: [] },
//     { name: "Realidade Virtual", icon: faVrCardboard, icon2: faAngleDown, submenu: [] },
//     { name: "Casa Inteligente", icon: faHome, icon2: faAngleDown, submenu: [] },
//     { name: "Casa e Lazer", icon: faUmbrellaBeach, icon2: faAngleDown, submenu: [] },
//     { name: "Openbox", icon: faBoxOpen, icon2: faAngleDown, submenu: [] },
//     { name: "Pets", icon: faPaw, icon2: faAngleDown, submenu: [] },
//     { name: "Vestuário", icon: faTshirt, icon2: faAngleDown, submenu: [] },
//     { name: "Marcas", icon: faTags, icon2: faAngleDown, submenu: [] }
//   ];

//   return (

//     <div className="home">
//       <header className="header-upper">
//         <span className="logo-container">
//           <img className="pichau-logo" src={logo} alt="Pichau-logo" />
//         </span>
//         <div className="options">
//           <div className="contAcess">
//             <a href="/account" >
//               <FontAwesomeIcon icon={faCircleUser} color="red" />
//             </a>
//             <span>
//               Minha Conta
//               <br />
//               <strong>Entrar / Cadastro</strong>
//             </span>
//           </div>
//           <div className="contact">
//             <a>
//               <FontAwesomeIcon icon={faCircleQuestion} color="red" />
//             </a>
//             <span>
//               Atendimento
//               <br />
//               <strong>Ao cliente</strong>
//             </span>
//           </div>
//           <div className="favoritos">
//             <a>
//               <FontAwesomeIcon icon={faHeart} color="red" />
//             </a>
//             <span>
//               <span>
//                 meus
//                 <br />
//                 <strong>favoritos</strong>
//               </span>
//             </span>
//           </div>
//           <div className="fundo">
//             <button>
//               <FontAwesomeIcon icon={faMoon} color="red" />
//             </button>
//             <span>
//               Modo
//               <br />
//               <strong>Escuro</strong>
//             </span>
//           </div>
//           {/* <div className="fundo">
//             <FontAwesomeIcon icon={faSun} />
//             <span>
//               Modo<strong>Claro</strong>
//             </span>
//           </div> */}

//           <button className="ShoppingCar">
//             <span className="icon">
//               <FontAwesomeIcon icon={faCartShopping} size="lg" />
//             </span>
//             <span className="text">
//               <strong>CARRINHO</strong>
//               <span>0 PRODUTO</span>
//             </span>
//             <span className="arrow">
//               <FontAwesomeIcon icon={faChevronDown} size="sm" />
//             </span>
//           </button>
//         </div>
//       </header>

//       <header className="header-under">
//         <button className="departamentos" onClick={() => setSidebarOpen(true)}>
//           <div className="dep-bars">
//             <FontAwesomeIcon icon={faBars} size="2x" color="white" />
//           </div>
//           <div className="dep-words">
//             <div>ACESSE TODOS OS</div>
//             <strong>DEPARTAMENTOS</strong>
//           </div>
//           <div className="dep-arrow">
//             <FontAwesomeIcon icon={faAngleRight} color="white" />
//           </div>
//         </button>

//         <div className="search">
//           <input placeholder="digite o que você procura..." type="text" />
//         </div>
//       </header>

//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <div>
//           <div className="SidebarLogo">
//             <img className="pichau-logo-Sidebar" src={logo} alt="Pichau-logo" />
//             <span className="logo-container">
//               <button className="close-btn" onClick={() => setSidebarOpen(false)}>
//                 <FontAwesomeIcon icon={faTimes} size="lg" />
//               </button>
//             </span>
//           </div>
//           <div className="ButtonMontarPC">
//             <button className="MontePC" onClick={() => setSidebarOpen(true)}>
//               <div className="IconGear">
//                 <FontAwesomeIcon icon={faGear} />
//               </div>
//               <strong>MONTE SEU PC</strong>
//             </button>
//           </div>
//         </div>
//         <h2>CATEGORIAS</h2>
//         <ul className="menu-sidebar">
//           {categories.map((category) => (
//             <li key={category.name}>
//               <div onClick={() => toggleCategory(category.name)} className="menu-item-sidebar">
//                 <div className="category-left">
//                   <div className="IconSidebar">
//                     <FontAwesomeIcon icon={category.icon} />
//                   </div>
//                   <span className="category-name">{category.name}</span>
//                 </div>
//                 <div className="iconSidebar2">
//                   <FontAwesomeIcon icon={category.icon2} />
//                 </div>
//               </div>

//               {openCategory === category.name && category.submenu && (
//                 <ul className="submenu">
//                   {category.submenu.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
//     </div>

//   );
// }

// export default Header;

















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
  const [openProcessors, setOpenProcessors] = useState(false);

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
          submenuItems: [
            { name: "Intel", link: "/processadores/Intel" },
            { name: "AMD", link: "/processadores/AMD" },
            { name: "Ver Todos", link: "/processadores" },
          ]
        },
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
      ]
    },
    {
      name: "Periféricos", icon: faKeyboard, icon2: faAngleDown,
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
        "Ver Todos"]
    },
    { name: "Computadores", icon: faDesktop, icon2: faAngleDown, submenu: [] },
    { name: "Kit Upgrade", icon: faCogs },
    { name: "Monitores", icon: faTv, icon2: faAngleDown, submenu: [] },
    { name: "Cadeiras e Mesas Gamer e Escritório", icon: faChair, icon2: faAngleDown, submenu: [] },
    { name: "Eletrônicos", icon: faPlug, icon2: faAngleDown, submenu: [] },
    { name: "Notebooks e Portáteis", icon: faLaptop, icon2: faAngleDown, submenu: [] },
    { name: "Mochilas", icon: faSuitcase },
    { name: "Video Games", icon: faGamepad, icon2: faAngleDown, submenu: [] },
    { name: "Redes e Wireless", icon: faWifi, icon2: faAngleDown, submenu: [] },
    { name: "Realidade Virtual", icon: faVrCardboard, icon2: faAngleDown, submenu: [] },
    { name: "Casa Inteligente", icon: faHome, icon2: faAngleDown, submenu: [] },
    { name: "Casa e Lazer", icon: faUmbrellaBeach, icon2: faAngleDown, submenu: [] },
    { name: "Openbox", icon: faBoxOpen },
    { name: "Pets", icon: faPaw, icon2: faAngleDown, submenu: [] },
    { name: "Vestuário", icon: faTshirt, icon2: faAngleDown, submenu: [] }
  ];

  return (
    <div className="home">
      <header className="header-upper">
        <span className="logo-container">
          <img className="pichau-logo" src={logo} alt="Pichau-logo" />
        </span>
        <div className="options">
          <div className="contAcess">
            <a href="/account">
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
              <div
                onClick={() => toggleCategory(category.name)}
                className={`menu-item-sidebar ${openCategory === category.name ? 'active' : ''}`}>
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

              {openCategory === category.name && category.name === "Hardware" && (
                <ul className="submenu">
                  {category.submenu.map((item, index) => {
                    if (typeof item === "string") {
                      return (
                        <li key={item} onClick={item === "Processadores" ? toggleProcessors : null}>
                          {item}
                        </li>
                        
                      );
                    } else {
                      return (
                        <div key={item.name}>
                          <li onClick={toggleProcessors}>{item.name}</li>
                          {openProcessors && (
                            <ul className="submenu-processadores">
                              {item.submenuItems.map(subItem => (
                                <li key={subItem.name}>
                                  <a href={subItem.link}>{subItem.name}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    }
                  })}
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
