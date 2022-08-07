import api from "../services/api";

import Product from "./Product";

import "./CSS/ListProduct.css";

import { useState, useEffect } from "react";

export default function ListProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProduct(res.data));
  }, [product.length]);

  function mostraListProduct() {
    const listProduct = document.querySelector('#listProduct')

    if (listProduct.className === 'product--list') {
      listProduct.classList.add('product--list-display')
    }else {
      listProduct.classList.remove('product--list-display')
    }

  }

  return (
    <>
      <div id="listProduct" className="product--list">
        {!product ? (
          <p>LOADING..</p>
        ) : (
          product.map((data) => (
            <Product data={data} key={data.id} id={data.id} />
          ))
        )}
      </div>

      <button id="btnDisplayList" className="product-list-mobile--btn" onClick={mostraListProduct}>VER LISTA</button>
    </>
  );
}
