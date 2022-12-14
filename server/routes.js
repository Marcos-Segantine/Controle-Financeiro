const route = require("express").Router();
const db = require("./database/db");

route.get("/get-receita-despesa", (req, res) => {
  db.query("SELECT * FROM receitas_despesas", (error, result) => {
    res.send(result);
  });
});

route.get("/products", (req, res) => {
  db.connect((error) => {
    if (error) throw error;
    db.query("SELECT * FROM api", (error, result) => {
      res.send(result);
    });
  });
});

route.post("/post-product", (req, res) => {
  db.query(
    `INSERT INTO api(name_product, price_product, about_product) VALUES ('${req.body.name}', ${req.body.price}, '${req.body.about}')`
  );
});

route.post("/post-receita", (req, res) => {
  let totalReceita = +req.body.receita;

  db.query(`SELECT receita FROM receitas_despesas`, (error, result) => {
    totalReceita += +result[0].receita;
    db.query(`UPDATE receitas_despesas SET receita=(${totalReceita})`);
  });
});

route.put("/update-receita", (req, res) => {
  db.query(`UPDATE receitas_despesas SET receita=${+req.body.receita}`);
});

route.put("/update-despesa", (req, res) => {
  db.query(`UPDATE receitas_despesas SET despesa=${+req.body.despesa}`);
});

route.put("/change-checked", (req, res) => {
  db.query();
});

route.post("/post-despesa", (req, res) => {
  let totalDespesa = +req.body.despesa;
  db.query("SELECT despesa FROM receitas_despesas", (error, result) => {
    totalDespesa += result[0].despesa;
    db.query(`UPDATE receitas_Despesas SET despesa=${totalDespesa}`);
  });
});

route.get("/get-annotation", (req, res) => {
  db.query("SELECT * FROM annotation", (error, result) => {
    res.send(result);
  });
});

route.post("/post-annotation", (req, res) => {
  db.query(`INSERT INTO annotation(content) VALUES ('${req.body.annotation}')`);
});

route.delete("/delete-annotation/:id", (req, res) => {
  const { id } = req.params;

  db.query(`DELETE FROM annotation WHERE id=${id}`);
});

route.delete("/product/delete/:id", (req, res) => {
  const { id } = req.params;

  db.query(`DELETE FROM api WHERE id=${id}`);
  res.status(200);
});

module.exports = route;
