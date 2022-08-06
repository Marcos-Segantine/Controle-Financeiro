import api from "./api";

export default function postDespesa() {
  const despesa = document.querySelector("#postDespesa");
  api.post("/post-despesa", {
    despesa: despesa.value,
  });

  window.location.reload();
}
