const express = require('express');
const router = express.Router();
const calculadoraController = require("../controllers/calculadoraController");

router.post('/calculadora', calculadoraController.post);
router.get('/calculadora', calculadoraController.get);

module.exports = router;