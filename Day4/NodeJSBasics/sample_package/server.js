const express = require('express')

const server = express()

// root
server.get('/', function (req, res) {
    res.send("HELLO")
})

server.get('/s', function (req, res, next) {
    console.log("WORLD")
    next()
})
server.get('/s', function (req, res) {
    console.log("END")
    res.send("END")
})

server.listen(8000)