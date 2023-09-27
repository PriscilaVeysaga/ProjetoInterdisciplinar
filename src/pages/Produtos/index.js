import React, { useState } from 'react';
import "./produtos.css";
import shampoo from "../../images/produtos/shampoo_barba.png"
import shampoo1 from "../../images/produtos/01.png"
import shampoo2 from "../../images/produtos/02.png"
import shampooSolido from "../../images/produtos/04.png"
import shampooReconstrutor from "../../images/produtos/06.png"
import condicionador from "../../images/produtos/07.png"
import pomada from "../../images/produtos/08.png"




const Produtos = () => {
  const [produtos, setProdutos] = useState([
  {
    categoria: 'Cabelo',
    produtos: [
      {
        id: 1,
        nome: 'Shampoo Reparador',
        descricao: 'Enriquecido com ingredientes naturais, ele restaura o brilho e a vitalidade dos seus fios.',
        imagem: shampoo1,
        preco: 49.99
      },
      {
        id: 2,
        nome: 'Shampoo Gasoline',
        descricao: 'Transforme cabelos danificados em uma obra-prima de suavidade e brilho.',
        imagem: shampoo2,
        preco: 30.00
      },

      {
        id: 3,
        nome: 'Shampoo Sólido',
        descricao: 'Nosso shampoo sólido é feito com ingredientes naturais que deixam seu cabelo sedoso.',
        imagem: shampooSolido,
        preco: 29.99
      },

      {
        id: 4,
        nome: 'Shampoo Reconstrutor',
        descricao: 'Nosso shampoo reconstrutor repara os danos, deixando-os visivelmente mais saudáveis.',
        imagem: shampooReconstrutor,
        preco: 60.00
      },

      {
        id: 5,
        nome: 'Condicionador',
        descricao: 'Dê ao seu cabelo o toque final perfeito com nosso condicionador',
        imagem: condicionador,
        preco: 65.00
      },
      ]
  },
  {
    categoria: 'Barba',
      produtos:[
        {
          id: 6,
          nome: 'Shampoo de Barba',
          descricao: 'Limpa profundamente, deixando os fios macios e cheios de vida',
          imagem: shampoo,
          preco: 59.99
        },
        {
          id: 7,
          nome: 'Pomada em pó',
          descricao: 'a solução leve e versátil para estilizar e dar textura a sua barba',
          imagem: pomada,
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
