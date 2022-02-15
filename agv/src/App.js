import React from "react";//jsx
import Carrossel from "../src/paginas/Home/componentes/Carrossel";
import Header from "../src/componentes/Header.js/index";
import Orientacao from  "../src/paginas/Home/componentes/Orientacao";
import Footer from "../src/componentes/Footer.js/index";


function App() {
  return (
    <div>
      
    <Header/>
    <Carrossel/>
    <Orientacao/>
    <Footer/>
    
    </div>
    
  );
}

export default App;

