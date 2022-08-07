import api from "./api";

export default function postReceita() {
  const receitaPost = document.querySelector("#receitaPost");

  if (receitaPost.value > 2000000000) {
    alert("VALOR EXEDDEU O LIMITE");
    receitaPost.value = "";
    return;
  }

  api.post("/post-receita", {
    receita: receitaPost.value,
  });

  window.location.reload();
}
