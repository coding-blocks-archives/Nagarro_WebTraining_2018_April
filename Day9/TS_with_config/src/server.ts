import express from 'express'
import studentRoute from './routes/students'

const app = express();

const routes = {
  students: studentRoute
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/students', routes.students)

app.get('/', (req, res) => {
  console.log("HELLO")
})

app.listen(3535, function () {
    console.log("Server started on http://localhost:3535");
});