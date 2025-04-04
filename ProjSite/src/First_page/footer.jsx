import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";



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
        <FontAwesomeIcon icon={faClock} />
        <strong>
          atendimento loja virtual
        </strong>
        <span>segunda a sexta</span>
        <strong>8h as 12h</strong>
        <span>e das</span>
        <strong>14h as 18h</strong>
        <FontAwesomeIcon icon={faPhoneVolume} />
        <strong>(47) 3305-5150</strong>
        <FontAwesomeIcon icon={faEnvelope} />
        <strong>sac@pichau.com.br</strong>
        </div>

        <div className="atendimento_fisico">
        <FontAwesomeIcon icon={faHouse} />
<strong>loja fisica em joinville</strong>
<strong>(47)3026-6446</strong>
<span>segunda a sexta das 9h as 19h</span>
<span>sabado das 9h as 13H</span>
        </div>
      </div>
<span>banner</span>

<div className="informativos">

<div className="praticos">
<div className="intitucional">
  <p>nossas lojas</p>
  <li> <a href="">quem somos</a></li>
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



</div>
    

    </>
  )
}

export default footer