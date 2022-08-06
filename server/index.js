const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { resolve } = require("path");

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "33564169",
  database: "database",
});

app.use(express.json());
app.use(cors());
app.use("/", express.static(resolve(__dirname, "../client", "./build")));


app.get('/get-receita-despesa',(req, res) => {
  db.query('SELECT * FROM receitas_despesas', (error, result) => {
    res.send(result)
  })
})


app.get("/products", (req, res) => {
  db.connect((error) => {
    if (error) throw error;
    db.query("SELECT * FROM api", (error, result) => {
      if (error) throw error;

      res.send(result);
    });
  });
});

app.post("/post-product", (req, res) => {
  db.query(
    `INSERT INTO api(name_product, price_product, about_product) VALUES ('${req.body.name}', ${req.body.price}, '${req.body.about}')`
  );
});

app.post('/post-receita', (req, res) => {
  let totalReceita = +req.body.receita

  db.query(`SELECT receita FROM receitas_despesas`, (error, result) => {
    totalReceita += +result[0].receita
    db.query(`UPDATE receitas_despesas SET receita=(${totalReceita})`)
  })
})

app.put("/update-receita", (req, res) => {
  db.query(`UPDATE receitas_despesas SET receita=${+req.body.receita}`);
});

app.put("/update-despesa", (req, res) => {
  db.query(`UPDATE receitas_despesas SET despesa=${+req.body.despesa}`
  )
});

app.post('/post-despesa', (req, res) => {
  let totalDespesa = +req.body.despesa
  db.query('SELECT despesa FROM receitas_despesas', (error, result) => {
    totalDespesa += result[0].despesa
    db.query(`UPDATE receitas_Despesas SET despesa=${totalDespesa}`)
  })
})

app.delete("/product/delete/:id", (req, res) => {
  const { id } = req.params;

  db.query(`DELETE FROM api WHERE id=${id}`);
  res.status(200);
});

app.listen(3030);
