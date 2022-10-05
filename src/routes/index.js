const express = require("express");
const estadoController = require("../controllers/estados.controller");
const routes = express.Router();

routes.get("/", estadoController.listEstados);

module.exports = routes;