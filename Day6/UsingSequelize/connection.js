const Sequelize = require('sequelize')

const db = new Sequelize('ngrwsdb', 'ngrusr', 'ngrpass', {
    dialect: 'mysql',
    host: 'localhost',
    // port: 3306,
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    // },
})

db.authenticate()
    .then(() => console.log("We can connect to DB"))
    .catch((err) => console.error(err))