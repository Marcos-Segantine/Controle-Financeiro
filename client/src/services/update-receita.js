import api from "./api";

export default function updateReceita() {
  const receitaUpdate = document.querySelector("#receitaUpdate");

  api.put("/update-receita", {
    receita: receitaUpdate.value,
  });

  window.location.reload();
}
