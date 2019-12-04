const setorModel = require('../models/setor').model

setorModel.methods(['get', 'post', 'put', 'delete'])
setorModel.updateOptions({ new: true, runValidators: true })
           
module.exports = setorModel