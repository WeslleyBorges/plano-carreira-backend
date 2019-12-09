const user = require('../models/user')

user.methods(['get', 'post', 'put', 'delete'])
user.updateOptions({ new: true, runValidators: true })

module.exports = user