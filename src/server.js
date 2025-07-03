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
app.get('/veiculos', veiculoController.listar);
app.post('/veiculos', veiculoController.criar);
app.delete('/veiculos/:id', veiculoController.deletar);
app.put('/veiculos/:id', veiculoController.atualizar);


app.listen(3001, function() {
  console.log("Servidor rodando")
})