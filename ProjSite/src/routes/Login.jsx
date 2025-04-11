import Header from "../First_page/Header.jsx";
import "../Css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="account">
      <Header />

      {/* if session != true { CODIGO DE LOGIN + CADASTRO
      }*/}

      <div className="login-container">
        <div className="login">
          <div className="txt-box">
            <div className="lock-icon">
              <FontAwesomeIcon icon={faLock} size="lg" />
            </div>
            <div>Ja tem uma conta?</div>
            <div>informe os seus dados abaixo para acessá-la.</div>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Senha*" />
          </div>
          <div className="checkbox-box">
            <input type="checkbox" />
            <span>Lmbrar meus dados</span>
          </div>
          <div>
            <button>ACESSAR CONTA</button>
          </div>
          <div>
            <button>Esqueci minha senha</button>
          </div>
        </div>

        <div className="cadastro">

            
        </div>
      </div>
    </div>
  );
}

export default Login;
