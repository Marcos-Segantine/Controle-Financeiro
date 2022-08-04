import api from "../services/api";

import Product from "./Product";

import "./CSS/ListProduct.css";
import { useEffect } from "react";
import { useState } from "react";

export default function ListProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProduct(res.data));
  }, [product.length]);

  return (
    <div id="listProduct" className="product--list">
      {!product ? (
        <p>LOADING..</p>
      ) : (
        product.map((data) => (
          <Product data={data} key={data.id} id={data.id} />
        ))
      )}
    </div>
  );
}
