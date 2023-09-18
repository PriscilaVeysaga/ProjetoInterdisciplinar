// // import React from 'react';
// // import Routes from './Routes';

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>Meu Aplicativo</h1>
// //       <Routes />
// //     </div>
// //   );
// // };

// // export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import fundo from './images/fundo.png';
// import logo_sem_fundo from './images/logo_sem_fundo.png';
// import Home from './pages/Home';
// import Clientes from './pages/Clientes';
// import Profissional from './pages/Profissional';
// import Produto from './pages/Produtos';
// import Servicos from './pages/Servicos';



// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <div className="logo">
//           <nav>
//             <ul>
//               <li>
//                 <img src={logo_sem_fundo} alt="logo" 
//                   style={{ 
//                     width: '250px', 
//                     height: 'auto' }} 
//                 />
              
//               </li>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/clientes">Clientes</Link>
//               </li>
//               <li>
//                 <Link to="/profissional">Profissional</Link>
//               </li>
//               <li>
//                 <Link to="/produto">Produto</Link>
//               </li>
//               <li>
//                 <Link to="/servicos">Serviços</Link>
//               </li>
//             </ul>
//           </nav>
//           <img src={fundo} alt="fundo" />  
//         </div>
//         </header>
//         <main>
        
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/clientes" element={<Clientes />} />
//             <Route path="/profissional" element={<Profissional />} />
//             <Route path="/produto" element={<Produto />} />
//             <Route path="/servicos" element={<Servicos />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import fundo from './images/fundo.png';
import logo_sem_fundo from './images/logo_sem_fundo.png';
import Navigation from './components/navegacao';  // Certifique-se de que o caminho está correto!
import AppRoutes from './Routes';      // Certifique-se de que o caminho está correto!

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src={logo_sem_fundo} alt="logo" style={{ width: '250px', height: 'auto' }} />
          </div>
          <Navigation />
        </header>
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;

