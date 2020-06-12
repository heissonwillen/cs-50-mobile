const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function createTodo() {
    const li = document.createElement('li')
    li.innerHTML = `
        <input type="checkbox" />
        <button>delete</button>
        <span>text</span>
    `
}

function newTodo() {
    // get text
    // create li
    // create input checkbox
    // create span
    // update the counts
}

function deleteTodo() {
    // find the todo
    // delete
    // update the counts
}
