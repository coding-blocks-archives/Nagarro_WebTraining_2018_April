const express = require('express')

const server = express()

// root
server.get('/', function (req, res) {
    res.send("HELLO")
})

server.get('/s', function (req, res) {
    res.send("WORLD")
})
server.listen(8000)