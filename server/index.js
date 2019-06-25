const express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    cors = require('cors')

const port = process.env.PORT || 8080;

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.listen(port)

server.get('/', () => console.log('cheguei'))

console.log('Port: ' + port)