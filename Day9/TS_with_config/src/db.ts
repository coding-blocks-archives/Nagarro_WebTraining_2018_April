import Sequelize from 'sequelize'
import {Student} from './routes/students'

const db = new Sequelize({
  storage: './my.db',
})

const Students = db.define<Student, any>('student', {
  name: {
    type: Sequelize.STRING
  }
})
