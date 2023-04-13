const sequelize = require('sequelize');
const db = require('../db');

const calculatorDb = db.define('calculator-tb' , {
    id: {
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true
    },
    nome: {
        type:sequelize.STRING,
        allowNULL: false,
        required: true,
        validate: {
			    notEmpty: true
		    }
    },
    calculo: {
        type:sequelize.STRING,
        allowNULL: false,
        required: true,
        validate: {
			    notEmpty: true
		    }
    },
    resultado: {
        type:sequelize.STRING,
        allowNULL: false,
        required: true,
        validate: {
			    notEmpty: true
		    }
    },
    data: {
        type: 'DATE',
        defaultVaue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNULL: false
    },
})

module.exports = calculatorDb