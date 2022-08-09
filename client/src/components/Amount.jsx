import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import api from "../services/api";
import updateReceita from "../services/update-receita";
import postReceita from "../services/post-receita";
import updateDespesa from "../services/update-despesa";
import postDespesa from "../services/post-despesas";
import postProduto from "../services/post-produto";

import "./CSS/Amount.css";

export default function Amount() {
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    api.get("/get-receita-despesa").then(({ data }) => {
      setAmount(data);
    });
  }, []);

  return (
    <div className="container">
      <h4>Saldo atual</h4>

      <h1 id="balance" className="balance">
        R${" "}
        {!amount ? (
          <p>loading...</p>
        ) : (
          amount.map((data) => data.receita - data.despesa)
        )}
      </h1>

      <div className="inc-exp-container">
        <div>
          <h4>Receitas</h4>
          <p id="money-plus" className="money plus">
            + R${" "}
            {!amount ? <p>loading...</p> : amount.map((data) => data.receita)}
          </p>
        </div>

        <div>
          <h4>Despesas</h4>
          <p id="money-minus" className="money minus">
            - R${" "}
            {!amount ? <p>loading...</p> : amount.map((data) => data.despesa)}
          </p>
        </div>
      </div>

      <div className="amount">
        <div className="renda-despesas">
          <form id="form">
            <h3>Receitas</h3>

            <div className="form-control">
              <input
                id="receitaPost"
                type="number"
                placeholder="Acrescentar receita"
              />
            </div>
            <div className="btn" onClick={postReceita}>
              Adicionar
            </div>
            <div className="form-control">
              <input
                id="receitaUpdate"
                type="number"
                placeholder="Atualizar receita"
              />
            </div>
            <div className="btn" onClick={updateReceita}>
              Adicionar
            </div>
          </form>

          <form id="form">
            <h3>Despesas</h3>

            <div className="form-control">
              <input
                id="postDespesa"
                type="number"
                placeholder="Adicionar despesa"
              />
            </div>
            <div className="btn" onClick={postDespesa}>
              Adicionar
            </div>
            <div className="form-control">
              <input
                id="updateDespesa"
                type="number"
                placeholder="Atualizar despesa"
              />
            </div>
            <div className="btn" onClick={updateDespesa}>
              Atualizar
            </div>
          </form>
        </div>

        <div className="form-produto">
          <h3>Adicionar produto ou serviço que quero comprar</h3>

          <form id="form">
            <div className="form-control">
              <input
                id="nameProduct"
                type="text"
                placeholder="Nome do produto"
              />

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

            <div className="btn" onClick={postProduto}>
              Adicionar
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
