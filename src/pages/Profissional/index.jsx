import React from "react";
import prodissional from "../../images/Profissional.jpg";

const Clientes = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img style={{ width: "400px" }} src={prodissional} alt="Imagem" />
      </div>
      <div className="content">
        <div className="page-header">
          <h1>Profissionais</h1>
          <span className="texto">
            Na Les Mustaches, nossos clientes tem preferências.
            <br></br>
            <p>
              Personalização Total: Escolha o Profissional e Horário Ideais para
              Você!
            </p>
            <p>
              Aqui, a escolha é sua! Opte pelo profissional certo e o horário
              mais conveniente para você. Conte com profissionais de primeira
              classe e horários flexíveis que se ajustam à sua agenda. No nosso
              espaço, você está no comando da sua experiência, e a sua
              satisfação é a nossa prioridade. Agende agora e comece sua jornada
              de bem-estar personalizada!
            </p>
          </span>
          <div className="buttons">
            <button>Profissionais</button>
            <button>Agenda</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clientes;
