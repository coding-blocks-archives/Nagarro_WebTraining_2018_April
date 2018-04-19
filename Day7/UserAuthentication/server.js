const express = require('express')
const path = require('path')
const { User } = require('./db')
const session = require('express-session')
const passport = require('./passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'some very very secret thing',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        if (user) {
            res.redirect('/signin.html')
        }
    }).catch((err) => res.send("ERROR CREATING USER"))
})

app.post('/signin', passport.authenticate('local', {
    failureRedirect: '/signin.html',
    successRedirect: '/profile'
}))

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

    if (req.user) {
        res.json(req.user)
    } else {
        res.send("YOU ARE NOT LOGGED IN")
    }

})

app.listen(4444)