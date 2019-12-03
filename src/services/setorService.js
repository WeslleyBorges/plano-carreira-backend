const setor = require('../models/setor')

setor.methods(['GET', 'POST', 'PUT', 'DELETE'])

setor.updateOptions({ new: true, runValidators: true })
           
module.exports = setor