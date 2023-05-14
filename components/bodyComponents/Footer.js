
import Logo from "../img/LogoGelaBoca.png.webp"
import LogoM from "../img/LOGO-MOMENTO1.png"

function Footer(){
  return (
    <div>
        <div className="footer">

<br/>
<br/>
<br/>




    <span>
        <p><strong>FRANQUIA DE SUCESSO</strong></p>
    </span>

<br/>
<br/>

<div className="navFooter">

<div class="footerNavDiv">
    <h3>Sobre nós</h3>
    <h4><span>Nossa empresa</span></h4>
</div>

<div className="footerNavDiv">
    <h3>Franquia Gela Boca</h3>
    <h4><span>Quero ser franqueado</span></h4>
</div>

<div className="footerNavDiv">
    <h3>Contato</h3>
    <h4><span>Unidades</span></h4>
</div>

<div className="footerNavDiv">
    <h3>Produtos</h3>
    <h4><span>Gela Boca <br/> Delivery</span></h4>
</div>

<div className="footerNavDiv">
    <img class="footerimg1" src={Logo} alt="Logo"/>
</div>

<div className="footerNavDiv">
    <img className="footerimg2" src={LogoM} alt="Logo"/>
</div>
</div>
</div>

<hr/>
    </div>
  )
}

export default Footer