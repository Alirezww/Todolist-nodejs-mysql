const fs = require("fs");
const path = require("path");

const { v4: uuidv4 } = require('uuid');

const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "data", "todos.json");

exports.genrateRAndomID = () => {
    return uuidv4()
}

exports.getTodos = (callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback([])
        callback(JSON.parse(content))
    })
}

exports.saveTodos = (todos, callback) => {
    fs.writeFile(filePath, JSON.stringify(todos), err => {
        callback(err)
    })
}

exports.getIsAvailable = (text) => {
    this.getTodos(todos => {
        return todos.some(todo => todo.text === text);;
    })
}

exports.getCompletedTodos = (callback) => {
    this.getTodos(todos => {
        const completedTodos = todos.filter(todo => todo.completed == true)
        callback(completedTodos.length)
    })
}

exports.getRemainingTodos = (callback) => {
    this.getTodos(todos => {
        const remainingTodos = todos.filter(todo => todo.completed != true)
        callback(remainingTodos.length)
    })
}