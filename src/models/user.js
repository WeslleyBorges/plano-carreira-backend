const restful = require('node-restful')
const uniqueValidator = require('mongoose-unique-validator')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema( mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    email: {type: String, require: true, unique: true}
  }, {
    timestamps: true
  }))
  userSchema.plugin(uniqueValidator)
  module.exports = restful.model('user', userSchema)