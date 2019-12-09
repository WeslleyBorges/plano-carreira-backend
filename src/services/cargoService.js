const cargo = require('../models/cargo').model

cargo.methods(['get', 'post', 'put', 'delete'])
cargo.updateOptions({ new: true, runValidators: true })

module.exports = cargo