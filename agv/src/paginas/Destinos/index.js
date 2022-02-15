import React from "react";
import './style.css';
import Header from "../../componentes/Header.js";
import Carrossel from "../Home/componentes/Carrossel"
import Footer from "../../componentes/Footer.js";


function Destinos() {
    return(
        <div>
        <Header/>
        <Carrossel/>

<div className="container">
<main className="text-info"><h1>Aqui você terá a oportunidade de escolher o seu destino!</h1></main>
<p className="lead">Programar uma viagem pode ser um momento único, único para planejar, visualizar e sentir
a experiência que está próximo de ser realizada.
 Esse é o seu momento, escolha o seu próximo destino:</p>                

    <div className="container">
        <div className="box_destino bonito">
        <img src="../imagens/Bonito.png"/>
        <br/><br/> 
        <a href="Cadastro">Bonito</a>
    </div>
        <br/><br/> 
        
    <div className="box_destino fortaleza">
        <img src="..\imagens\Fortaleza.png"/>
        <br/><br/>  
        <a href="Cadastro">Fortaleza</a>
    </div>
        <br/><br/> 
        
    <div className="box_destino gramado">
        <img src="..\imagens\Gramado.png"/>
        <br/><br/>  
        <a href="Cadastro">Gramado</a>
    </div>
        <br/><br/> 
       
    <div className="box_destino maceio">
        <img src="imagens/Maceio.png"/>
        <br/><br/>  
        <a href="Cadastro">Maceió</a>
    </div>
        <br/><br/> 
    
    <div className="box_destino rj">
        <img src="imagens/RJ.png"/>
        <br/><br/>  
        <a href="Cadastro">Rio de Janeiro</a>
    </div>
        <br/><br/> 
         
    <div className="box_destino salvador">
        <img src="imagens/Salvador.png"/>
        <br/><br/> 
        <a href="Cadastro">Salvador</a>
        </div>
    </div>
        <br/><br/> 
         
    <div className="box_destino sp">
       {/*<div class="valign">*/}
        <img src="imagens/SP.png"/>
        <br/><br/>  
        <a href="Cadastro">São Paulo</a>
    </div>

        <br/><br/>  
        </div>
<Footer/>

</div>
    );
}
export default Destinos;