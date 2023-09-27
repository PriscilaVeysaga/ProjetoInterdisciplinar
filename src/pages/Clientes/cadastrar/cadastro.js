import React, { useState } from 'react';
import './cadastro.css';
import Homem from "../../../images/homem.png"

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    sexo: '',
    dataNascimento: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados ao servidor
    console.log(formData);
  }

  return (
    <div className="cadastro-container">
      <div className="image-container-cadastro">
        <img src={Homem} alt="Imagem" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="sexo">Sexo</label>
            <input type="text" id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input type="date" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required />
          </div>
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={() => window.history.back()}>Voltar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroForm;
