require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.SERVER_PORT || 8080
const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../frontend/public')));

const calculadoraRoutes = require("./src/routes/calculadoraRoutes");
const resultadosRoutes = require("./src/routes/resultadosRoutes");

//Rotas calculadora
app.use(calculadoraRoutes);

//Rotas Resultados
app.use(resultadosRoutes)

app.listen(port, () => {
    console.log("Servidor conectado na porta: " + port)
})