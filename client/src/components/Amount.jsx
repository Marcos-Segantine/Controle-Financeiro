import React from "react";

import api from "../services/api";

import "./CSS/Amount.css";

export default function Amount() {
  function postData() {
    const nameProduct = document.querySelector("#nameProduct");
    const priceProduct = document.querySelector("#priceProduct");
    const aboutProduct = document.querySelector('#aboutProduct');

    api
      .post("/post-product", {
        name: nameProduct.value,
        price: priceProduct.value,
        about: aboutProduct.value
      })

    window.location.reload()
  }

  return (
    <div className="container">
      <h4>Saldo atual</h4>

      <h1 id="balance" className="balance">
        R$ 0.00
      </h1>

      <div className="inc-exp-container">
        <div>
          <h4>Receitas</h4>
          <p id="money-plus" className="money plus">
            + R$0.00
          </p>
        </div>

        <div>
          <h4>Despesas</h4>
          <p id="money-minus" className="money negativo">
            - R$0.00
          </p>
        </div>
      </div>

      <h3>Transações</h3>

      <ul id="transactions" className="transactions">
        <li className="minus">
          Salário <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>

      <h3>Lista de desejos</h3>

      <form id="form">
        <div className="form-control">
          <label>Nome</label>
          <input id="nameProduct" type="text" placeholder="Nome do produto" />
        </div>

        <div className="form-control">
          <input
            id="priceProduct"
            type="number"
            placeholder="Valor do produto"
          />

          <input
            id="aboutProduct"
            type="text"
            placeholder="Descrição do produto"
          />
        </div>

        <div className="btn" onClick={postData}>
          Adicionar
        </div>
      </form>
    </div>
  );
}
