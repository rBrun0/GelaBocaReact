import Footer from "../bodyComponents/Footer"
import Carmel from "./Logo-branco-Carmel.png"


import "./Contato.css"
import Header from "../bodyComponents/Header"

function Contato(){
    return (
        <div>
          <Header/>

    <section class="equipef">
        <h1>FAÇA PARTE DA NOSSA EQUIPE</h1>
        <p>Na Gela Boca você pode criar uma carreira gratificante com pessoas admiráveis e marcas incríveis.</p>
    </section>

    <section class="containerForm">
        <h1>contato</h1>
        <p>Gostaria de deixar uma mensagem para nós? Utilize o formulário abaixo.</p>
        <form action="https://formsubmit.co/romerobruno788@gmail.com" method="POST">

            <input type="text" name="nome" id="nome" placeholder="Nome" class="inputc" required/>
            <label for="nome"></label>

            <input type="email" name="email" id="email" placeholder="Seu email:" class="inputc" required/>
            <label for="email"></label>

            <input type="tel" name="numero" id="numero" placeholder="55+ DDD" class="inputc" required/>
            <label for="numero"></label>

          <div class="containerOption">
              
                <label for="optionf" >Assunto</label>
                <select name="optionf" id="optionf">
                    <option value=""></option>
                    <option value="FORNECEDORES">FORNECEDORES</option>
                    <option value="FRANQUIAS">FRANQUIAS</option>
                    <option value="PARCERIAS">PARCERIAS</option>
                    <option value="PRODUTOS">PRODUTOS</option>
                    <option value="RECLAMAÇÕES">RECLAMAÇÕES</option>
                    <option value="ELOGIOS">ELOGIOS</option>
                    <option value="VISITA NA FABRICA">VISITA NA FABRICA</option>
                    <option value="SUGESTÕES">SUGESTÕES</option>
                    <option value="OUTROS">OUTROS</option>

                </select>

               
          </div>

          <textarea name="mensagem" id="textof" cols="58" rows="4" placeholder="Mensagem:" class="texto"></textarea>

          <input type="submit" value="Enviar" class="isubmit"  />
        </form>

        <div class="carmel">
            <img src={Carmel} alt="LogoCarmal"/>
            <p><strong>
                Carmel Indústria e Comércio de Sobremesas LTDA <br/>
                    Fábrica da Gela Boca, Ultraçaí e DOM Gelateria –
                         (44) 3028-8990 <br/>
                        Rua Braz Izelli, 727
            </strong> – Jd. Ouro Cola, Maringá
                 – PR, 87070-772 <br/>
                
                </p>
        </div>
    </section>

    
        <Footer/>
        </div>


    )
}

export default Contato

