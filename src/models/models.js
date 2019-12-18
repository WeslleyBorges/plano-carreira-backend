const cargo = require('../models/cargo').model
const cargoNivel = require('../models/cargoNivel').model
const funcionario = require('../models/funcionario')
const nivel = require('../models/nivel').model
const setor = require('../models/setor').model

module.exports = {
    models:[
        cargo,
        cargoNivel,
        funcionario,
        nivel,
        setor
    ]
}