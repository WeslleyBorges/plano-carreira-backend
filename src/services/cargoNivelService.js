const cargoNivel = require('../models/cargoNivel').model

cargoNivel.methods(['get', 'post', 'delete', 'put'])
cargoNivel.updateOptions({ new: true, runValidators: true })

module.exports = cargoNivel