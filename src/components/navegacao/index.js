// // Navigation.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/Clientes">Clientes</Link>
//       <Link to="/Profissional">Profissional</Link>
//       <Link to="/Produtos">Produtos</Link>
//     </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/profissional">Profissional</Link>
        </li>
        <li>
          <Link to="/produto">Produto</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/pedidos">Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

