import api from "../services/api";
import mostraListProduct from "../services/mostraProductList";

import Product from "./Product";

import "./CSS/ListProduct.css";

import { useState, useEffect } from "react";

export default function ListProduct() {
  const [product, setProduct] = useState([]);

  let totalAmount = 0;

  useEffect(() => {
    api.get("/products").then((res) => setProduct(res.data));
  }, [product.length]);

  (() => {
    for (let i in product) {
    totalAmount += product[i].price_product;
    }
  })();

  return (
    <>
      <div id="listProduct" className="product--list">
        <h3>Produtos ou serviços à comprar</h3>
        {!product ? (
          <p>LOADING..</p>
        ) : (
          product.map((data) => (
            <Product data={data} key={data.id} id={data.id} />
          ))
        )}
        <p className="totalAmount">Total: <span>R$ {totalAmount}</span></p>
      </div>

      <button
        id="btnDisplayList"
        className="product-list-mobile--btn"
        onClick={mostraListProduct}
      >
        VER LISTA
      </button>
    </>
  );
}
