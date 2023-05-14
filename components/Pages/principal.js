import Footer  from "../bodyComponents/Footer"
import Header from "../bodyComponents/Header"

import LogoH from "./LOGO-MOMENTO.png"
import LogoF from "./fabrica2.jpg.webp"
import ThiagoR from "./Thiago-Ramalho.png.webp"
import Matriz from "./Visao360_8.png.webp"

import './principal.css'

function Principal(){
    return (
        <div>


           <Header/>

            

    <section className="imgAniversario">
        <img src={LogoH} alt="22anosGelaBoca"/>
    </section>
    
    <br/>
    <br/>
    <br/>

    <section className="sobreNos">
        <h2><strong>Sobre nós</strong></h2>
        <h1><strong>HISTÓRIA DA GELA BOCA</strong></h1>
        <br/>
        <p>Fundada em 2000, a Gela Boca nasceu com a crença que o sorvete tem o poder de proporcionar momentos simples <br/> de felicidade. Por isso a responsabilidade que carregamos vai muito além de entregar um produto que apenas alimente.</p>
<br/>
        <p>A ideia de criar a Gela Boca surgiu no ano 2000 em Maringá, no norte do Paraná. No início a fábrica e a primeira loja dividiam <br/> o espaço de apenas 120m². Com o passar dos anos a empresa foi conquistando os <br/> moradores da Cidade Canção e evoluindo, os sabores de sorvete foram se multiplicando e junto com eles a demanda.</p>
<br/>
        <p>Hoje contamos com 8.000m², que se dividem entre administração e fábrica, e <strong>mais de 100 lojas franqueadas em operação</strong> e <strong> outras 10 lojas em implantação nos estados do Paraná, Mato Grosso do Sul, São Paulo </strong> e <strong>Santa Catarina</strong>. Mas, não pretendemos <br/> parar por aí, a Gela Boca ainda tem muito para progredir. Estamos diariamente em busca de novos conhecimentos para nos  <br/> modernizar e conseguir elevar ainda mais a qualidade e variedade dos nossos produtos. Tudo isso para atender com todo <br/> cuidado todas as necessidades dos nossos clientes e conseguir que eles vivam a delícia da simplicidade.</p>

        <br/>
        <br/>

        </section>

        <section className="fabrica">
        <h1><strong>FÁBRICA GELA BOCA</strong></h1>

        <br/>

        <img src={LogoF} alt="fabricaGelaBoca"/>
<br/>
        <iframe width="880" height="435" src="https://www.youtube.com/embed/7oMKORoYIN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>

    <section className="ceo">

<h1>CONHEÇA A HISTÓRIA DO NOSSO CEO THIAGO RAMALHO</h1>

<img src={ThiagoR} alt="ThiagoRamalho"/>

<br/>

<p>Desde os 12 anos já trabalhava ao lado da família no balcão da sorveteria e de lá pra cá segue construindo uma das marcas <br/> mais promissoras do Brasil. A Gela Boca foi criada em 2000 e, em 2010, idealizado por Thiago Ramalho, iniciou seu plano de <br/> <span>expansão por meio de franquias</span>. A sorveteria nasceu para o sustento da família Ramalho e se tornou a realização dos sonhos <br/> e fonte de renda de diversas outras pessoas através do franchising. </p>

<br/>
<br/> 

<p>Em 2018, Thiago foi eleito o Jovem Empreendedor do Ano pelo Conselho Permanente do Jovem Empresário (COPEJEM) da <br/> ACIM.</p>
<br/>
<p>Conheça um pouco mais da história de Thiago Ramalho e sua família no vídeo produzido para a divulgação do prêmio.</p>
</section>

<section className="matriz">
        <h1>FAÇA UM TOUR 360 NA <br/> NOSSA LOJA MATRIZ</h1> 
        
        <img src={Matriz} alt="lojaMatriz"/>

        <br/>

        <p>CLIQUE AQUI PARA FAZER O TOUR</p>
    </section>


    <Footer/>

        </div>
    )
}

export default Principal