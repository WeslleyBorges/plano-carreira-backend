const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const DATABASE_URI = process.env.MONGODB_URI || 'mongodb://localhost/plano-carreira'

mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

module.exports = () => {
  db.on('error', console.error.bind(console, 'Connection error:'))
  db.once('open', () => {
    console.log('The backend was successfully connected to the database')
  })
}