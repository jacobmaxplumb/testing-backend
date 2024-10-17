const { default: axios } = require("axios");

async function getAllTodos() {
    const { data } = await axios.get('http://localhost:3000/todos');
    console.log(data);
}

async function addTodo(text) {
    const todoItem = {text: text, completed: false};
    await axios.post('http://localhost:3000/todos', todoItem);
    getAllTodos();
}

async function markTodoCompleted(id) {
    await axios.patch(`http://localhost:3000/todos/${id}`, {completed: true});
    getAllTodos();
}

async function deleteTodo(id) {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    getAllTodos();
}

deleteTodo(1);