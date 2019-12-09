const restful = require('node-restful')
const mongoose = restful.mongoose
const cargo = require('./cargo')
const nivel = require('./nivel')

const cargoNivelSchema = new mongoose.Schema({
    cargo: { type: cargo.schema, required: true },
    nivel: { type: nivel.schema, required: true },
    salario: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = {
    model: restful.model('cargoNivel', cargoNivelSchema),
    schema: cargoNivelSchema
}