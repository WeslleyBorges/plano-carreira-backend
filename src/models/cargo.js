const restful = require('node-restful')
const mongoose = restful.mongoose
const setorSchema = require('./setor').schema

const cargoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: false },
  setor: { type: setorSchema, required: true }
  // Adicionar a referência para nível
}, {
  versionKey: false,
  timestamps: true
})

module.exports = restful.model('cargo', cargoSchema)