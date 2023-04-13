const express = require('express');
const router = express.Router();
const resultadosController = require("../controllers/resultadosController");

router.get('/resultados', resultadosController.getPage);
router.get('/resultados/data', resultadosController.getResults);

module.exports = router;