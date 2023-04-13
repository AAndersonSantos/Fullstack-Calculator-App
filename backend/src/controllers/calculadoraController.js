const path = require('path');
const calculatorDb = require('../../database/models/calculator');

exports.post = function(req, res){

    const mensagemData = {
        nome: req.body.nome,
        calculo: req.body.calculo,
        resultado: req.body.resultado,
    }
   
    calculatorDb.create(mensagemData).then(function () {
        res.status(200).json({ message: 'Salvo com sucesso!' });;
    }).catch(function (erro) {
        res.send("Houve um erro: " + erro)
    })
    
}

exports.get = function(req, res){
    res.sendFile(path.join(__dirname, '../../../frontend/public/pages/calculadora.html'));
}