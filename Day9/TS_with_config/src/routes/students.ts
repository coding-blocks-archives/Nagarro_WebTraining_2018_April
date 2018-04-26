import express, {Router, Request} from 'express'


const route = Router()

class Student {
  public name: string
  public grade: string
  public age: number

  constructor(name: string, grade: string, age: number) {
    this.name = name
    this.grade = grade
    this.age = age
  }
  isAdult (): boolean {
    return this.age > 18
  }
}


interface RequestBody {
  [k: string]: string
}

const students: Array<Student> = []

route.get('/', (req, res) => res.json(students))

route.post('/', (req: Request, res) => {
  const body: RequestBody = req.body
  students.push(new Student(
    req.body.name,
    req.body.grade,
    parseInt(req.body.age)
  ))
  res.json(students[students.length - 1])
})

export default route