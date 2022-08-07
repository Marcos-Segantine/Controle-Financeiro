import api from "./api";

export default function postDespesa() {
  const despesa = document.querySelector("#postDespesa");

  if (despesa.value > 2000000000) {
    alert('VALOR EXEDDEU O LIMITE')
    despesa.value = ''
    return
  }

  api.post("/post-despesa", {
    despesa: despesa.value,
  });

  window.location.reload();
}
