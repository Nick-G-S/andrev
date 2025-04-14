import Header from "../First_page/Header.jsx";
import "../Css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUserPlus } from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon icon={faLock} size="lg" color="#303030" />
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
            <span>Lembrar meus dados</span>
          </div>
          <div>
            <button>ACESSAR CONTA</button>
          </div>
          <div>
            <button>Esqueci minha senha</button>
          </div>
        </div>

        <div className="cadastro">
          <div className="lock-icon">
            <FontAwesomeIcon icon={faUserPlus} size="lg" color="#303030" />
          </div>
          <div>Novo Cliente</div>
          <div>
            Criar uma conta é fácil! Informe seus dados e uma senha para
            aproveitar todos os beneficios de ter uma conta.
          </div>
          <button>CADASTRE-SE</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
