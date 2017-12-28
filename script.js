// Code goes here

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else {
      console.log('My todos:', this.todos)
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText)
        } else {
          console.log('()', this.todos[i].todoText)
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodos()
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText
    this.displayTodos()
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1)
    this.displayTodos()
  },
  toggledCompleted: function(position) {
    var todo = this.todos[position]
    todo.completed = !todo.completed
    this.displayTodos()
  },
  toggleAll: function() {
    var totalTodos = this.todos.length
    var completedTodos = 0

    // Get number of completed todos.
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++
      }
    }

    // Case 1: If everything's true, make everything false.
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
    // Case 2: Otherwise, make everything true.
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true
      }
    }
    this.displayTodos()
  }
}

var handlers = {
  displayTodos: function(){
    todoList.displayTodos()
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value)
    addTodoTextInput.value = ''
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
    var changeTodoTextInput = document.getElementById('changeTodoTextInput')
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value =''
    changeTodoTextInput.value = ''
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput')
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber)
    deleteTodoPositionInput.value = ''
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput')
    todoList.toggledCompleted(toggleCompletedPositionInput.valueAsNumber)
    toggleCompletedPositionInput.value = ''
  },
  toggleAll: function() {
    todoList.toggleAll()
  }
}
// Render the todo list to the display.
var view = {
  displayTodos: function() {
     // 1. First, find `ul' element which we defined in our `index.html` file.
     var todosUl = document.querySelector('ul')
     // 2. Clear all elements within the child of `ul` before re-drawing all todos.
     todosUl.innerHTML = ''
    for (let i = 0; i<todoList.todos.length; i++){
      // 3. Create an `li` element.
      var todoLi = document.createElement('li')






      // 4. Set the todos text property of each array to each `li` element iteratively.
      todoLi.textContent = todoList.todos[i].todoText
      // 5. Add a child element, in this case the `li` element, to the `ul' element.
      todosUl.appendChild(todoLi)
    }
  }
}
