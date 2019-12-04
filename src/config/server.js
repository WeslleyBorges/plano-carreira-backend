const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8080
server.listen(port, () => console.log(`Server is running on port ${port}`))

module.exports = server