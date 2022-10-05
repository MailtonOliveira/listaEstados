const estadoModel = require("../model/estados");

const controller = {
    listEstados(request, response) {
        response.setHeader("Access-Control-Allow-Origin", "*");

        const estadosDatabase = estadoModel.getEstados();

    response.json(estadosDatabase);
    },
};

module.exports = controller;