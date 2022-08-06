import api from "./api";

export default function postReceita() {
  const receitaPost = document.querySelector("#receitaPost");

  api.post("/post-receita", {
    receita: receitaPost.value,
  });

  window.location.reload();
}
