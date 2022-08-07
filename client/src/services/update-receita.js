import api from "./api";

export default function updateReceita() {
  const receitaUpdate = document.querySelector("#receitaUpdate");

  if (receitaUpdate.value > 2000000000) {
    alert("VALOR EXEDDEU O LIMITE");
    receitaUpdate.value = "";
    return;
  }

  api.put("/update-receita", {
    receita: receitaUpdate.value,
  });

  window.location.reload();
}
