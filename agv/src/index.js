import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./paginas/Home/index"
import Contato from "./paginas/Contato/index"
import Destinos from "./paginas/Destinos/index"
import Cadastro from "./paginas/Cadastro/index"
import Compra from "./paginas/Compra/index"

ReactDOM.render(
  <BrowserRouter>
     <Routes>
        
        <Route element = { <Home/>} path="/" exact/>
        <Route element = { <Contato/> } path="/contato"/>
        <Route element = { <Destinos/> } path="/destinos"/>
        <Route element = { <Cadastro/> } path="/cadastro"/>
        <Route element = { <Compra/> } path="/compra"/>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

