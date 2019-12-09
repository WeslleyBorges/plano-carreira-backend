const restful = require('node-restful')
const mongoose = restful.mongoose

const nivelSchema = new mongoose.Schema({
  nome: { type: String, required: true }
  // Adicionar a referência para CARGO
}, {
  versionKey: false,
  timestamps: true
})

module.exports = {
  model: restful.model('nivel', nivelSchema),
  schema: nivelSchema
}