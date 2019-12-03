const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const getPort = require('get-port')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

const getAvailablePortAndRunServer = async () => {
  const port = process.env.PORT || await getPort()
  server.listen(port, () => console.log(`Server is running on port ${port}`))
}

getAvailablePortAndRunServer()

module.exports = server