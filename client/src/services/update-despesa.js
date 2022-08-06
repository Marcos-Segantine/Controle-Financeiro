import api from "./api";

export default function updateDespesa() {
  const despesa = document.querySelector("#updateDespesa");

  api.put("/update-despesa", {
    despesa: despesa.value,
  });

  window.location.reload();
}
