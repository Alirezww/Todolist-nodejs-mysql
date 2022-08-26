const sequelize = require('../utils/database');

const { DataTypes } = require('sequelize');

const Todo = sequelize.define('Todo', {
    // Model attribute
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
})

module.exports = Todo