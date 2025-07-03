// importar a biblioteca do mysql12 para se conectar ao banco de dados mysql
const mysql = require ('mysql2/promise')

//configuraçao da conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost', // endereço do servidor
    user: 'root', // usuario do banco de dados
    password: 'root', //senha banco de dados
    database: 'sistema_concessionaria' // nome do banco de dados
})

// exportar essa conexao para ser utilizada em outros arquivos (model)

module.exports = {
    conexao 
}