const restful = require('node-restful')
const mongoose = restful.mongoose

const funcionarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  matricula: { type: String, required: true },
  email: { type: String, required: true }
  // Adicionar a referência para CARGO
})

module.exports = restful.model('funcionario', funcionarioSchema)