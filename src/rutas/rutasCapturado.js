const express = require("express");
const enrutador = express.Router();
const capturadoControlador = require("../controladores/capturadoControlador");

enrutador.post("/capturar", capturadoControlador.capturarPokemon);

module.exports = enrutador;
