const Todo = require('../model/Todo');

exports.getIndex = async(req, res) => {

    const todos = await Todo.findAll()
    const completedTodos = await Todo.count({ where: { completed: true } })
    const remainingTodos = todos.length - completedTodos

    res.render('index', {
        pageTitle: 'کارهای روزمره',
        todos,
        completedTodos,
        remainingTodos
    })
}