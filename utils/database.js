const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_db', 'root', 'yazdan97', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize