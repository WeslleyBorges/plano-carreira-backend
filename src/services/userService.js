const userModel = require('../models/user')

userModel.methods(['get', 'post', 'put', 'delete'])
userModel.updateOptions({ new: true, runValidators: true })

module.exports = userService