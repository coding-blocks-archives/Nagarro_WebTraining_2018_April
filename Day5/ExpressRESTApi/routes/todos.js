const route = require('express').Router()

/**
 * Each todo would be of type - 
 * {task: 'some task', done: true}
 */
let todos = []

route.get('/', (req, res) => res.json(todos.map((t, i) =>
    ({
        id: i,
        task: t.task,
        done: t.done
    })
)))

route.post('/', (req, res) => {
    if (typeof req.body.done === 'string') {
        req.body.done = (req.body.done === 'true')
    }

    let newTodo = {
        task: req.body.task,
        done: req.body.done
    }
    todos.push(newTodo)
    res.json({
        success: true,
        id: todos.length - 1
    })
})

route.get('/:id', (req, res) => res.json(todos[req.params.id]))

route.delete('/:id', (req, res) => {
    todos.splice(req.params.id, 1)
    res.json({
        success: true,
        length: todos.length
    })
})


module.exports = route