const cargo = require('../models/cargo')

cargo.methods(['get', 'post', 'put', 'delete'])
cargo.updateOptions({ new: true, runValidators: true })

module.exports = cargo