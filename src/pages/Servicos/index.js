import React from 'react';
import adulto from '../../images/combo.jpeg';
import barba from '../../images/barb.jpg'
import infantil from '../../images/corteKids.jpg';
import "./servicos.css";

const Servicos = () => {
  return (
    <div className="container-servicos">
      <div className="servico" style={{backgroundImage: `url(${adulto})`}}>
        <h2>Corte Adulto</h2>
      </div>
      <div className="servico" style={{backgroundImage: `url(${barba})`}}>
        <h2>Barba</h2>
      </div>
      <div className="servico" style={{backgroundImage: `url(${infantil})`}}>
        <h2>Corte Infantil</h2>
      </div>
    </div>
  );
}

export default Servicos;
