const express = require("express");
const { appendFile } = require("fs");

const routes = require("./routes");


const server = express();

server.use(express.json());

server.use(routes);

server.listen(8000, () => console.log("Server ON"));