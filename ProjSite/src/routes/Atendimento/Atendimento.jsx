import Header from "../../First_page/Header.jsx";
import "../../Css/atendimento.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
function Atendimento() {
  return (
    <div>
      <Header />

      <div className="atendimento">
        <div className="main-container">
          <div className="sugestion">ABRA UM TICKET</div>

          <h1>Dúvidas frequentes</h1>

          <div className="sugestion">DÚVIDA SOBRE CADASTRO</div>
          <div className="sugestion">DÚVIDA SOBRE PAGAMENTO</div>
          <div className="sugestion">DÚVIDA SOBRE ENTREGA</div>
          <div className="sugestion">DÚVIDAS SOBRE TROCA E DEVOLUÇÃO</div>
          <div className="sugestion">CONTATO DOS FABRICANTES </div>

          <h1>Serviços mais buscados</h1>

          <div className="sugestion">DÚVIDA SOBRE O PEDIDO</div>
          <div className="sugestion">ENTENDA AS FASES DA SUA COMPRA</div>
          <div className="sugestion">DÚVIDAS SOBRE GARANTIA/RMA PEÇAS</div>
          <div className="sugestion">DÚVIDAS SOBRE GARANTIA/RMA PC</div>
          <div className="sugestion">DÚVIDAS FREQUENTES SOBRE A PANDEMIA</div>
          <div className="sugestion">QUAL O PRAZO PARA ENVIO DO MEU PEDIDO</div>
          <div className="sugestion">COMO TROCAR O ENDEREÇO DE ENTREGA</div>
          <div className="sugestion">
            COMO FAZER O RASTREIO NAS TRANSPORTADORAS
          </div>
          <div className="sugestion">
            COMO ADICIONAR A GARANTIA DA MINHA COMPRA
          </div>

          <p>
            Para mais informações, acesse os nossos Termos de Aceite e Politica
            de Privacidade da Pichau.
          </p>

          <div className="att-bottom">
            <h2>Ficou com alguma dúvida?</h2>
            <p>
              Entre em contato conosco através dos canais de comunicação abaixo
              que estaremos te auxiliando!
            </p>

            <div>
              <div className="icon">
                <div className="upper">
                  <FontAwesomeIcon icon={faCommentDots} color="black" />
                  <span>Atendimento Loja Virtual</span>
                </div>
                <div className="lower">
                  <span>
                    Chat fica localizado no canto inferior esquerdo da sua tela.
                    Atendimento de Segunda a Sexta 8hr às 12hr e das 13hr às
                    18hr.
                  </span>
                </div>
              </div>

              <div className="icon">
                <div className="upper">
                  <FontAwesomeIcon icon={faCommentDots} color="black" />
                  <span>Telefone de contato</span>
                </div>
                <div className="lower">
                  <span>
                    Você pode estar entrando em contato através do telefone:
                    (47) 3305-5150 . Atendimento de Segunda a Sexta 8hr às 12hr
                    e das 13hr às 18hr.
                  </span>
                </div>
              </div>
              <div className="icon">
                <div className="upper">
                  <FontAwesomeIcon icon={faCommentDots} color="black" />
                  <span>E-mail de contato</span>
                </div>
                <div className="lower">
                  <span>
                    Você pode estar entrando em contato também pelo e-mail:
                    sac@pichau.com.br
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atendimento;
