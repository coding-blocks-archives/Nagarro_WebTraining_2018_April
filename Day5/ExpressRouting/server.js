const express = require('express')

const routes = {
    teachers: require('./routes/teachers'),
    students: require('./routes/students')
}

const app = express()

app.use('/students', routes.students)
app.use('/mentors', routes.teachers)

app.listen(5555)