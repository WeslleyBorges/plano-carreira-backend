const nivel = require('../models/nivel')

nivel.methods(['get', 'post', 'put', 'delete'])
nivel.updateOptions({ new: true, runValidators: true })

module.exports = nivel