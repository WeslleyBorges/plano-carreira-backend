const restful = require('node-restful')
const mongoose = restful.mongoose
const cargo = require('./cargo')
const nivel = require('./nivel')

const cargoNivelSchema = new mongoose.Schema({
    cargo: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"cargo" },
    nivel: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"nivel"},
    salario: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = {
    model: restful.model('cargoNivel', cargoNivelSchema),
    schema: cargoNivelSchema
}