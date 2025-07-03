// Importar o model de cursos
const veiculosModel = require("../models/veiculo.model")

async function listar(request, response) {
  // Chamar a função listarTodosCursos do model
  const veiculos = await cursoModel.listarTodosCursos()

  console.log(veiculos)
  
  //response.json(cursos);

  //Renderizar a view listar-cursos
  response.render('listar-veiculos',{ veiculos })
}

function criar(request, response) {
  response.send("Função responsável por criar um veiculo")
}

function atualizar(request, response) {
  response.send("Função responsável por atualizar um veiculo")
}

function deletar(request, response) {
  response.send("Função responsável por deletar um veiculo")
}

module.exports = {
  listar,
  criar,
  atualizar,
  deletar
}