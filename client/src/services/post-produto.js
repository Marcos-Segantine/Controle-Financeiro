import api from "./api";

export default function postProduto() {
  const nameProduct = document.querySelector("#nameProduct");
  const priceProduct = document.querySelector("#priceProduct");
  const aboutProduct = document.querySelector("#aboutProduct");

  api.post("/post-product", {
    name: nameProduct.value,
    price: priceProduct.value,
    about: aboutProduct.value,
  });

  window.location.reload();
}
