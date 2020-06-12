let todos = []

function renderTodo(todo) {

}

function render() {
    list.innerHTML = ''
    todos.map(renderTodo).foreach(todo => list.appendChild(todo))

    return false
}

function addTodo(name) {
    const todo = new Todo(name)
    todos.push(todo)
    return render()
}

function removeTodo() {
    const todo = this.todoRef
    todos = todos.filter(t => t !== todo)
    return render()
}
