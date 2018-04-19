const express = require('express')
const path = require('path')
const {User} = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/signup', (req, res) => {
    // req.body.username, req.body.password
    // User.create
})

app.get('/guest', (req, res) => {
    // Make this page availabe to everyone
})

app.get('/newsfeed', (req, res) => {
    // Available to only logged in people
    // For all logged in people, data shown is same

})

app.get('/profile', (req, res) => {
    // Available to only logged in people
    // Data is different (each user sees own profile)
})

app.listen(4444)