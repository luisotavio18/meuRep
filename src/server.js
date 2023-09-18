// Importar o pacote express
const express = require("express");

// Instanciar o express na variavel app
const app = express();

// Recuperar o pacote dotenv
const dotenv = require("dotenv").config();

// Importando variável do arquivo .env
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Running at port ${PORT}!`));