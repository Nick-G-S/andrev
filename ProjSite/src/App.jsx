import { useState } from "react";
import Header from "./First_page/Header.jsx";
import Content from "./First_page/Content.jsx";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="app">
        <Header />
        <Content />
      </div>
  );
}

export default App;
