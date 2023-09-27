// import React from 'react';

// const Clientes = () => {
//   return <h1>Clientes</h1>;
// }

// export default Clientes;


import React from 'react';
import { Link } from 'react-router-dom';
import cliente from "../../images/adulto.jpg"
import './clientes.css';

const Clientes = () => {
  return (
    <div className="container">
    <div className="image-container">
      <img src={cliente} alt="Imagem" />
    </div>
    <div className="content">
      <div className="page-header">
        <h1>Olá! Sejam todos bem vindes!</h1>
        <span className='texto'>
          Na Les Mustaches, nossos clientes são mais do que visitantes regulares, são amigos e parte essencial da nossa história. 
          <br></br>
          Cada corte, cada conversa e cada sorriso compartilhado é o que nos motiva a continuar fazendo o nosso melhor.
          <br></br>
          Aqui, não oferecemos apenas um serviço de barbearia, proporcionamos uma experiência única de cuidado e atenção a cada detalhe. Nossa equipe dedicada está sempre pronta para ouvir suas preferências e transformá-las em cortes e estilos que refletem sua personalidade
        </span>
        <div className="buttons">
          <button>
          <Link to="/cadastro">Cadastrar</Link>
          </button>
          <button>Entrar</button>
        </div>
      </div>
    </div>
  </div>
 );
}
export default Clientes
