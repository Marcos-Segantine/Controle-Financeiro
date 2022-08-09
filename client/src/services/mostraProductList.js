export default function mostraListProduct() {
  const listProduct = document.querySelector("#listProduct");

  if (listProduct.className === "product--list") {
    listProduct.classList.add("product--list-display");
  } else {
    listProduct.classList.remove("product--list-display");
  }
}
