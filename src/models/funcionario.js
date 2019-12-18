const restful = require('node-restful')
const mongoose = restful.mongoose
const cargoNivel = require('./cargoNivel')

const funcionarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  matricula: { type: String, required: true },
  email: { type: String, required: true },
  cargoNivel: { type: mongoose.Schema.Types.ObjectId, required: true , ref:"cargoNivel"}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = restful.model('funcionario', funcionarioSchema)