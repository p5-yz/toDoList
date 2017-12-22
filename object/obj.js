// Code goes here

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My todos:', this.todos)
  },

  addTodo: function(todo) {
    this.todos.push(todo)
    this.displayTodos()
  },
  changeTodo: function(position, newInfo) {
    this.todos[position] = newInfo
    this.displayTodos()
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1)
    this.displayTodos()
  }
}
