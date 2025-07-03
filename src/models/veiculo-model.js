const bancoDados = require("../config/banco-dados")

async function listarTodosVeiculos() {
      // Abrir a conexão com o banco de dados
      const conexao = await bancoDados.conexao
    
      // Executar a consulta de SELECT no banco de dados
      // Desestruturação do resultado da consulta
      const query = await conexao.execute("SELECT * FROM veiculos")

      // Retornar os cursos
      return query[0]
}

module.exports = {
    listarTodosVeiculos
}