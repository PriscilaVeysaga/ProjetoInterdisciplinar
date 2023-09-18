import React from "react";
import imgFundo from "../../images/fundo.png";
import bigode from "../../images/bigode-branco-png.png";

export default function index() {
  return (
    <>
      <div className="edica-decricao">
        <div className="edicao-fundo">
          <img
            className="fundo"
            src={imgFundo}
            alt="Imagem de fundo com aparelhos de barbiar"
          />
          <div className="descriao-texto">
            <p>Les Mustaches</p>
            <img src={bigode} alt="logo de bigode branco" />
          </div>
        </div>
      </div>
    </>
  );
}
