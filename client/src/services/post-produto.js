import api from "./api";

export default function postProduto() {
  const nameProduct = document.querySelector("#nameProduct");
  const priceProduct = document.querySelector("#priceProduct");
  const aboutProduct = document.querySelector("#aboutProduct");

  if (priceProduct.value > 2000000000) {
    alert(" VALOR EXEDEU O LIMITE");
    priceProduct.value = "";
    return;
  }
  else if (nameProduct.value === '') {
    alert('INFORME O NOME DO PRODUTO OU SERVIÇO QUE VOCÊ DESEJA COMPRAR')
    nameProduct.value = ''
    return;
  }

  api.post("/post-product", {
    name: nameProduct.value,
    price: priceProduct.value,
    about: aboutProduct.value,
  });

  window.location.reload();
}
