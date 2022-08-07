import api from "./api";

export default function updateDespesa() {
  const despesa = document.querySelector("#updateDespesa");

  if (despesa.value > 2000000000) {
    alert("VALOR EXEDDEU O LIMITE");
    despesa.value = "";
    return;
  }

  api.put("/update-despesa", {
    despesa: despesa.value,
  });

  window.location.reload();
}
