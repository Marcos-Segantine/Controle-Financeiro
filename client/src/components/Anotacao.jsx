import React, { useState, useEffect } from "react";

import api from "../services/api";

import "./CSS/Anotacao.css";

export default function Anotacao() {
  const [annotation, setAnnotation] = useState([]);

  useEffect(() => {
    api.get("/get-annotation").then((res) => setAnnotation(res.data));
  }, []);

  function getAnnotation() {
    const inputAnnotation = document.querySelector("#inputAnnotation");

    const inputAnnotationLenght = inputAnnotation.value.split('')

    if (inputAnnotation.value === "") {
      alert("CAMPO NAO PODE FICAR EM BRANCO");
      return;
    } else if (inputAnnotationLenght.length > 400) {
      alert("TEXTO EXEDEU O LIMITE");
      inputAnnotation.value = ''
      return;
    }

    api.post("/post-annotation", {
      annotation: inputAnnotation.value,
    });

    window.location.reload();
  }

  function deleteAnnotation(e) {
    api.delete(`/delete-annotation/${e.target.id}`, {
      id: 2,
    });

    window.location.reload();
  }

  return (
    <div className="annotation">
      <h3>Anotações</h3>
      <form id="form">
        <div className="form-control">
          <input
            id="inputAnnotation"
            type="text"
            placeholder="Digite aqui algo para não se esquecer"
          />
        </div>

        <div className="btn" onClick={getAnnotation}>
          Adicionar
        </div>
      </form>
      <div className="content--annotation">
        {!annotation ? (
          <p>LOADING...</p>
        ) : (
          annotation.map((data) => (
            <div className="annotation-div" key={data.id}>
              <p>{data.content}</p>
              <span id={data.id} onClick={deleteAnnotation}>
                X
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
