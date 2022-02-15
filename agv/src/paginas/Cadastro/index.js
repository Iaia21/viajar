import React from "react";
import './style.css';
import Header from "../../componentes/Header.js";
import Carrossel from "../Home/componentes/Carrossel"
import Footer from "../../componentes/Footer.js";


function Cadastro() {
    return(
        <div>
        <Header/>
        <Carrossel/>

        <div className="container">
        <main className="text-info"><b>Agora que você já escolheu o seu destino, faça a sua reserva!</b></main>
    <p className="lead">Esse é o segundo passo para concretizar o seu sonho... Escolhido o destino,
        cadastre os seus dados pessoais para prosseguirmos!</p>
</div>
<hr/>

    <div className="container">

        <label for="nome">Nome Completo</label>
        <input type="text" className="form-control"/>
        
        <label for="nome">Data de nascimento</label>
        <input type="date" class="form-control" placeholder=""/>

        <label for="nome">CPF</label>
        <input type="cpf" maxlenght="11" className="form-control" placeholder="CPF"/>

        <label for="nome">RG</label>
        <input type="rg" maxlenght="9" className="form-control" placeholder="RG"/>

        <label for="nome">Endereço residencial</label>
        <input type="endereco" className="form-control" placeholder="Endereço residencial"/>

        <label for="nome">CEP</label>
        <input type="cep" className="form-control" placeholder="CEP"/>
    <br/>

    <label for="estados" className="text-dark">Cidade</label>
        <select id="estados" name="estados">
                <option value="bh">Belo Horizonte-MG</option>
                <option value="bo">Bonito-MT</option>
                <option value="fo">Fortaleza-CE</option>
                <option value="gr">Gramado-RS</option>
                <option value="mc">Maceió-PE</option>
                <option value="rj">Rio de Janeiro-RJ</option>
                <option value="sl">Salvador-BA</option>
                <option value="sp">São Paulo-SP</option>
        </select>
        <br/>
        
    <div class="form-group">
        <label for="number">Telefone</label>
        <input type="number" className="form-control" placeholder="Telefone"/>
        
        <label for="nome">Email</label>
        <input type="email" className="form-control" placeholder="Email"/>
        
        <input type="checkbox" id="contatoEmail" name="contatoEmail" value="sempreContato"/>
        <label for="contatoEmail" className="text-info">Aceito receber emails com promoções</label>
    </div>
         <br/>

        <a class="btn btn-primary" href="Compra" role="button">Continuar</a>
    
        <button onclick="alert('Tem certeza que deseja cancelar?')"className="btn btn-outline-warning float-right">Cancelar</button>
        
        </div>
        <br/>
        <Footer/>
        </div>

    );
}
export default Cadastro;