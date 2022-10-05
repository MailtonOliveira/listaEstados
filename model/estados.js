const estadosDatabase = require("../database/estados.json");

function getEstados() {
    return estadosDatabase;
}

module.exports = {
    getEstados,
};


