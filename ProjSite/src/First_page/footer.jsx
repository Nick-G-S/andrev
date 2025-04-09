import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Pichau_Empresas from "../assets/Pichau_Empresas.png";
import meio_pagamento1 from "../assets/meio_pagamento1.png";
import meio_pagamento2 from "../assets/meio_pagamento2.png";
import meio_pagamento3 from "../assets/meio_pagamento3.png";
import meio_pagamento4 from "../assets/meio_pagamento4.png";
import meio_pagamento5 from "../assets/meio_pagamento5.png";
import meio_pagamento6 from "../assets/meio_pagamento6.png";




import '../Css/footer.css'

function footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="banner_rotativo">
        <span>
          lugar que deve ficar o banner rotativo
        </span>
      </div>

      <div className="historicoDeNavegacao">
        <span>
          historico de navegação
        </span>
      </div>

      <div className="contato_atendimento">
        <div className="atendimento_online">

          <div className="horario">
            <div className="FontAwesomeIconicon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <p>
              <strong>
                atendimento loja virtual
              </strong>
              <br />
              <span>segunda a sexta
                <strong> 8h as 12h </strong>
                e das
                <strong> 14h as 18h</strong>
              </span>
            </p>
          </div>
          <div className="telefone">
            <div className="FontAwesomeIconicon">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <strong>(47) 3305-5150</strong>
          </div>
          <div className="sac">
            <div className="FontAwesomeIconicon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <strong>sac@pichau.com.br</strong>
          </div>
        </div>


        <div className="atendimento_fisico">
          <div className="FontAwesomeIconicon">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <strong>loja fisica
            <br />
            em joinville</strong>
          <div class="separacao"></div>
          <span>
            <strong>(47)3026-6446 </strong>
            <br />
            segunda a sexta das 9h as 19h
            <br />
            sabado das 9h as 13H

          </span>
        </div>
      </div>

      <div className="empresas">
        <a href=""><img src={Pichau_Empresas} alt="" /></a>
      </div>


      <div className="footerLiks">

        <div className="praticos">
          <div className="intitucional">
            <p>institucional
            </p>

            <li><a href="">quem somos</a></li>
            <li><a href="">localização </a></li>
            <li><a href="">nossas lojas </a></li>
            <li><a href="">blog </a></li>
          </div>
          <div className="intitucional">
            <p>duvidas</p>
            <li> <a href="">entrega</a></li>
            <li><a href="">garantia </a></li>
            <li><a href="">como comprar</a></li>
            <li><a href="">formas de pagamento</a></li>
            <li><a href="">sobre boletos</a></li>
          </div>
          <div className="intitucional">
            <p> ajuda</p>
            <li> <a href="">SAC</a></li>
            <li><a href="">fale conosco </a></li>
            <li><a href="">termos de aceite </a></li>
            <li><a href="">politicas de privacidade </a></li>
          </div>
        </div>




        <div className="meiosPagamento">
          <p>pagamento</p>
          <div className="FTmeiospagamento">
            <li><img src={meio_pagamento1} /></li>
            <li><img src={meio_pagamento2} /></li>
            <li><img src={meio_pagamento3} /></li>
            <li><img src={meio_pagamento4} /></li>
            <li><img src={meio_pagamento5} /></li>
            <li><img src={meio_pagamento6} /></li>
          </div>
        </div>

        <div className="Informativos">
          <p>informativos</p>
          <strong>receba ofertas exclusivas em seu email</strong>
          <div>
            insira seu email
          </div>
          <div className="RedesSociais">
            <span>siga-nos nas redes sociais</span>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <p>baixe os aplicativos</p>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>

    </>
  )
}

export default footer