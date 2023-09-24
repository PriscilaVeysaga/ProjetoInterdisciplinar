import React from "react";
import "./apreServico.css";
import imgFundo from "../../images/fundo.png";
import bigode from "../../images/bigode-branco-png.png";

export default function index() {
  return (
    <>
      <div className="edicao-fundo">
        <img
          className="fundo"
          src={imgFundo}
          alt="Imagem de fundo com aparelhos de barbiar"
        />
        <div className="descricao-texto">
          <p>Les Mustaches</p>
          <p style={{ fontSize: "60px" }}>Seja Bem -vindos</p>
          <img
            src={bigode}
            alt="logo de bigode branco"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
