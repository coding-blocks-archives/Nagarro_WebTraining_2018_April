const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const routes = {
    todos: require('./routes/todos')
}

app.use('/todos', routes.todos)

app.listen(4545)