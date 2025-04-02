import { useState } from "react";
import Header from "./First_page/Header.jsx";
import Content from "./First_page/Content.jsx";
import Product from "./First_page/Product.jsx";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Content />
      <Product />

    </div>
  );
}

export default App;
