import React from "react";//jsx
import './style.css';
import Carrossel from "./componentes/Carrossel";
import Header from "../../componentes/Header.js";
import Orientacao from  "./componentes/Orientacao";
import Footer from "../../componentes/Footer.js";
import '../../App.js';

function Home() {
    return(
        <div>
            <Header/>
            <Carrossel/>
            <Orientacao/>
            <Footer/>
        </div>
    );
}

export default Home;