const express = require('express')
const { resolve } = require('path')

const app = express()

const port = 3030

app.use('/', express.static(resolve(__dirname, '../client', './build')))


app.listen(3030, () => {
    console.log(`Servidor rodando na porta ${port}`);
})