import Header from "../../First_page/Header.jsx";
import "../../Css/atendimento.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
function Atendimento() {
  return (
    <div>
      <Header />

      <div className="atendimento">
        <div className="ticket"> </div>
      </div>
    </div>
  );
}

export default Atendimento;
