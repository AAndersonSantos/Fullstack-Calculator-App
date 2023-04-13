const path = require('path');
const calculatorDb = require('../../database/models/calculator');

exports.getPage = function(req, res){
    res.sendFile(path.join(__dirname, '../../../frontend/public/pages/resultados.html'));
}

exports.getResults = function (req, res) {

    calculatorDb.findAll().then((posts) => {
        res.status(200).json(posts);
    })
}
