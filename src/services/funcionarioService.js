const funcionario = require('../models/funcionario')

funcionario.methods(['get', 'post', 'put', 'delete'])
funcionario.updateOptions({ new: true, runValidators: true })

module.exports = funcionario