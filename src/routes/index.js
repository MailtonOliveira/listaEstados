const express = require("express");
const estadoController = require("../controllers/estados.controller");
const routes = express.Router();

routes.get("/", estadoController.listEstados);


routes.get("/healthcheck", (req,res) => {
    console.log(req.query)
    res.send("Servidor sendo executado corretamente")
})

routes.get("/produto/lista", estadoController.listProdutos)
routes.post("/produto", estadoController.cadastrarProduto)

routes.post("/cadastro", (req,res) => {
    console.log(req.body);
    res.json(req.body);
})

module.exports = routes;