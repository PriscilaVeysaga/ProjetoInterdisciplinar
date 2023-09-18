// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe Route e Routes

// import Home from './pages/Home';
// import Clientes from './pages/Clientes';
// import Profissional from './pages/Profissional';
// import Produtos from './pages/Produtos';
// import Servicos from './pages/Servicos';

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Clientes" element={<Clientes />} />
//         <Route path="/Profissional" element={<Profissional />} />
//         <Route path="/Produtos" element={<Produtos />} />
//         <Route path="/Servicos" element={<Servicos />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Profissional from './pages/Profissional';
import Produto from './pages/Produtos';
import Servicos from './pages/Servicos';
import Pedidos from './pages/Pedidos'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/profissional" element={<Profissional />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/pedidos" element={<Pedidos />} />
    </Routes>
  );
}

export default AppRoutes;



