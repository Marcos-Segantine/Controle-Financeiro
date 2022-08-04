import React, { useState, useEffect } from "react";

import api from "./services/api";

import "./App.css";

import Amount from "./components/Amount";
import Product from "./components/Product";

function App() {
  const [product, setProduct] = useState();

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="app" className="App">
      <Amount />

      <div id="listProduct" className="product--list">{!product ? (
        <p>Loading...</p>
      ) : (
        product.map((data) => <Product key={data.id} id={data.id} data={data} />)
      )}</div>
    </div>
  );
}

export default App;