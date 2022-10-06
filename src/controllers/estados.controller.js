const estadoModel = require("../model/estados");

const estadosController = {
    listEstados(request, response) {
        response.setHeader("Access-Control-Allow-Origin", "*");

        const estadosDatabase = estadoModel.getEstados();

    response.json(estadosDatabase);
    },

    listProdutos: (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.json([{nome: "produto 1"}, {nome: "Produto 2"}]);

    },

    cadastrarProduto: (req, res) => {
        console.log(req.body)
        res.json("Produto Cadastrado")
    }
};
 


module.exports =  estadosController;