import React, { useState } from 'react';
import "./produtos.css";
import shampoo from "../../images/produtos/shampoo_barba.png"
import shampoo1 from "../../images/produtos/01.png"
import shampoo2 from "../../images/produtos/02.png"


const Produtos = () => {
  const [produtos, setProdutos] = useState([
  {
    categoria: 'Cabelo',
    produtos: [
      {
        id: 1,
        nome: 'Shampoo Reparador muito grandeeeee',
        descricao: 'blablabla',
        imagem: shampoo1,
        preco: 49.99
      },
      {
        id: 2,
        nome: 'Condicionador Reparador',
        descricao: 'blablabla',
        imagem: shampoo,
        preco: 49.99
      },
      ]
  },
  {
    categoria: 'Barba',
      produtos:[
        {
          id: 3,
          nome: 'Espuma de Barbear Sensitive',
          descricao: 'Espuma p/ peles sensíveis',
          imagem: shampoo,
          preco: 49.99
        },
        {
          id: 4,
          nome: 'Loção pós barba',
          descricao: 'blablabla',
          imagem: shampoo,
          preco: 49.99
        },
      ]
    }
])
  return (
    <div className='main-container'>
      <div className='content-produto'>
        {produtos.map((item, index) =>
          <div key={index} >
            <h1 className='categoria'>{item.categoria}</h1>
            <div className='row'>
              {item.produtos.map((prd, key)=>
                <div className='cards'>
                  <div className='card'>
                    <img
                      className="img-produto"
                      src={prd.imagem}
                      alt=""
                    />
                    <div className='div-nome'>
                      <span className='produto-nome'>{prd.nome}</span>
                    </div>
                    
                    <div className='div-descricao'>
                      <span className='produto-descricao'>{prd.descricao}</span>
                    </div>
                    <div className='div-preco'>
                      <span className='produto-preco'>{Number(prd.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                      <div className='btn-comprar'>
                        <span className='txt-btn-comprar'>Comprar</span>
                      </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Produtos;
