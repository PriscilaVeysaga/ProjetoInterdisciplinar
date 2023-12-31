import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Profissional from "./pages/Profissional";
import Produto from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Pedidos from "./pages/Pedidos";
import Cadastro from "./pages/Clientes/cadastrar/cadastro";
import Login from "./pages/Clientes/login/login";
import Agendar from "./pages/Profissional/agenda";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/profissional" element={<Profissional />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/agenda" element={<Agendar />} />
    </Routes>
  );
};

export default AppRoutes;
