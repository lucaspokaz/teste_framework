const express = require("express")
const cors = require('cors')

const divisorController = require("./controller/divisorController")

var app = express()
app.use(cors())

app.get('/divisores/:numero', divisorController.get_divisores)

app.all('*', (res) => {
    res.status(404).send('Rota não encontrada.');
})

const PORT = 80

app.listen(PORT, () => {
    console.log(`Server na porta ${PORT} - http://localhost/...`)
})