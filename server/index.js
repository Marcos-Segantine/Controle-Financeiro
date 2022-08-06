const express = require("express");
const cors = require("cors");
const { resolve } = require("path");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", express.static(resolve(__dirname, "../client", "./build")));

app.use(routes);

app.listen(3030);
