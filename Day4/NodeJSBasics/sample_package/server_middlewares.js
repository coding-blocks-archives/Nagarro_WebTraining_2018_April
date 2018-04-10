const express = require('express')

const app = express()

app.use(function (req, res, next) {
    console.log("I always run")
    next()
})
app.use('/b', (req, res, next) => {
    console.log("I run whenever you ask for /b")
    next()
})
app.use('/a', (req, res, next) => {
    console.log("I run whenever you ask for /a")
    next()
})

app.get('/a', (req, res) => {
    console.log("You requested a")
    res.send("a")
})

app.get('/a/b', (req, res) => {
    console.log("You requested a/b")
    res.send("a/b")
})

app.get('/b/a', (req, res) => {
    console.log("You requested b/a")
    res.send("b/a")
})

app.use(function (req, res) {
    res.status(404).send("<h1>No such page found</h1>")
})


app.listen(8181)