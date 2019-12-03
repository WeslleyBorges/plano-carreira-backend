const restful = require('node-restful')
const mongoose = restful.mongoose

const setorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: false }
}, {
  versionKey: false,
  timestamps: true,
  autoCreate: true
})

module.exports = restful.model('setores', setorSchema)