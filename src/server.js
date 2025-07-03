// Importando o módulo do express
const express = require('express')

// Importação dos controllers
const veiculoController = require('./controllers/veiculo.controller')

// Criando uma instância do express
const app = express()

//Configurar o ejs template engine
app.set("view engine", "ejs")

//configurar a pasta das views
app.set("views", "./src/views")


// Cursos
app.get('/cursos', veiculoController.listar);
app.post('/cursos', veiculoController.criar);
app.delete('/cursos/:id', veiculoController.deletar);
app.put('/cursos/:id', veiculoController.atualizar);


app.listen(3001, function() {
  console.log("Servidor rodando na porta 3000")
})