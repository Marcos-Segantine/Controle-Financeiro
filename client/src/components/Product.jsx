import api from "../services/api";

import "./CSS/products.css";

export default function Products(props) {
  function deleteProduct(e) {
    api.delete(`/product/delete/${e.target.id}`).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="products">
      <p className="product--name">{props.data.name_product}</p>
      <p className="product--name">R$ {props.data.price_product}</p>
      <p className="product--name">{props.data.about_product}</p>
      <span id={props.id} className="delete--item" onClick={deleteProduct}>
        X
      </span>
    </div>
  );
}