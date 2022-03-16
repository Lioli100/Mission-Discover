const express = require("express");
const route = require("./route");
const path = require("path");

const server = express();

server.set("view engine", "ejs");

/* Estamos informando para o server que essa pasta ele irá usar todo o conteúdo que está na raiz do nosso projeto */
server.use(express.static("public"));

server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(5000, () => console.log("RODANDO"));
