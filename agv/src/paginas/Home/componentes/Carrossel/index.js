import React from "react";
import './style.css';

function Carrossel() {
    return(
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="..\imagens\SPc.png" alt="São Paulo"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..\imagens\Salvadorc.png" alt="Salvador"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..\imagens\RJc.png" alt="Rio de Janeiro"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
    );
}

export default Carrossel;