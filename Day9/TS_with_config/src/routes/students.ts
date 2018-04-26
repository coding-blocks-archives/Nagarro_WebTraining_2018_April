import express from 'express'

const route = express.Router()

const students = []

route.get('/', (req, res) => res.json(students))

route.post('/', (req, res) => {
  students.push({
    name: req.body.name,
    grade: req.body.grade,
    age: parseInt(req.body.age)
  })
  res.json(students[students.length - 1])
})

export default route