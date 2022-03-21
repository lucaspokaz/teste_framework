const express = require("express")

const divisorController = require("./controller/divisorController")

var app = express()

app.get('/divisores/:numero', divisorController.get_divisores)

const PORT = 80

app.listen(PORT, () => {
    console.log(`Server na porta ${PORT} - http://localhost/...`)
})