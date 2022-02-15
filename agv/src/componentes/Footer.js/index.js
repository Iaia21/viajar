import React from "react";
import "./style.css";

function Footer () {//todo o componente tem a primeira letra em maiúsculo

    return (
  
    
<footer id="rodape">
    <div class="jumbotron jumbotron-fluid"></div>
    
    <div class="row um">
        <div id="footerLogo" class="col-lg-6">
            <div class="row">
                <div class="col-lg-6 col-md-6 mb-lg-0">
                    <img src="./imagens/VR.png" class="img-fluid dois"/>
                </div>
                <div id="socialIcons" class="col-lg-6 col-md-6 mb-5 mb-lg-0 tres">
                    <div id="socialIcons1" class="text-uppercase-expanded text-xs mb-4">
                        <center> {/*os inputs e imagens fecham nelas mesmas*/}
                        <a target="_blank"><img src="./imagens/face.png" class="img-fluid img "/></a>&nbsp;
                        <a target="_blank"><img src="./imagens/yout.png" class="img-fluid img "/></a>&nbsp;
                        <a target="_blank"><img src="./imagens/insta.png" class="img-fluid img "/></a>
                    </center></div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="row text-dark">
                <center>
                    
                </center>
                <div class="col-lg-12">VIAJAR Brasil Operadora e Agência de Viagens S.A.</div>
                <div class="col-lg-12">CNPJ: 12.345.678/0001-00</div>
                <div class="col-lg-12">Rua Gregory, 321, 11ª andar - São Paulo - SP</div><div class="col-lg-12">CEP: 02121-123</div>
            </div>
        </div>
    </div>
    <div class="destaque">
        <p><b>&copy; Viajar</b></p>
    </div>
    

</footer>

    );
}
    export default Footer;