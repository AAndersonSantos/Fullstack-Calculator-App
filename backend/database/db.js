require('dotenv').config();
const Sequelize = require('sequelize')

const database = process.env.DATABASE
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const db = new Sequelize(database, user, password, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mariadb",
    define: {
        timestamps: true,
        createdAt: false, 
        updatedAt: false,
        freezeTableName: true
    },
})

try{
    db.authenticate();
    console.log('Conexão realizada com sucesso');
}catch(err){
    console.log('Erro ao realizar a conexão com banco de dados: ' + err);
}

module.exports = db