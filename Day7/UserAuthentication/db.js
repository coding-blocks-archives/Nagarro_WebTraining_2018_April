const Sequelize = require('sequelize')

const db = new Sequelize('ngrwsdb', 'ngrusr', 'ngrpass', {
    dialect: 'sqlite',
    // host: 'localhost',
    storage: './users.db'
})


const User = db.define('user', {
    username: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

db.sync()

module.exports = {
    db, User
}