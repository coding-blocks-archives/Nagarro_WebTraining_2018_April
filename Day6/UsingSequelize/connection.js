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
    storage: './ngrws.db'
})

const Todo = db.define('todo', {
    task: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})    

async function task () {
    try {
        await db.authenticate()
        await db.sync()
    } catch (err) {
        console.error(err)
    }
}
task ()
