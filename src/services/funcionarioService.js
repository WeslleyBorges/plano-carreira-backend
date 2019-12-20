const funcionario = require('../models/funcionario')
const populateFunc = require('../controllers/returnPopulated').populateFuncionario

funcionario.methods([{method:'get',after:populateFunc}, 'post', 'put', 'delete'])
funcionario.updateOptions({ new: true, runValidators: true })

module.exports = funcionario