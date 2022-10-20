const express = require('express')
const app = express()
const port = 3000
const produtoRota = require("./controllers/produto/router.js")

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Documentação da API')
})

app.use(express.json()) // express.jason ele pega oque tem no boyd e manda para o banco.

app.use('/', produtoRota) // esse app use aqui estar interceptando os dados do produto 

app.use((req, res) => {
res.status(404).send("Rota nao encontrada")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

