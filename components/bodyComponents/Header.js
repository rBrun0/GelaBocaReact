import Logo from "../img/LogoGelaBoca.png.webp"
import LogoM from "../img/LOGO-MOMENTO1.png"

import { Link } from 'react-router-dom'


function Header(){
  return (
    <div>
                  <header className="cabeçalho">
        <div className="imgHeaderLogo">
            <span><img src={Logo} alt="logoGelaBoca" /></span>
        </div>

        <div className="navHeader">
           
          <Link to="/"><span>Sobre</span></Link>  
            <span>Nosso Sorvete</span>
            <span>Blog</span>
           <Link to="/Contato"><span>Fale conosco</span></Link> 

        </div>

        <div className="imgHeader2">
           
        <img src={LogoM} alt="logoMomento2"/>
        </div>

        <div className="localizacao">
           <span>Encontre uma loja</span>
           
        </div>

        <div className="sign">
            <strong>seja um franqueado</strong>
        </div>
    </header>
    </div>
  )
}

export default Header