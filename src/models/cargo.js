const restful = require('node-restful')
const mongoose = restful.mongoose
const setorSchema = require('./setor').schema

const cargoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: false },
  setor: { type: mongoose.Schema.Types.ObjectId, required: true , ref:"setor"}
  // Adicionar a referência para nível
}, {
  versionKey: false,
  timestamps: true
})

module.exports = {
  model: restful.model('cargo', cargoSchema),
  schema: cargoSchema
} 