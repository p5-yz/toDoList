// ** Manipulate list item: model**
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1)
  },
  toggledCompleted: function(position) {
    var todo = this.todos[position]
    todo.completed = !todo.completed
    this.todos[position].completed = todo.completed
  },
  toggleAll: function() {
    var totalTodos = this.todos.length
    var completedTodos = 0

    // Get number of completed todos.
    this.todos.forEach(function(todo){
      if (todo.completed === true) {
        completedTodos++
      }
    })  
    
    this.todos.forEach( function(todo) {
      // Case 1: If everything's true, make everything false.
      if (completedTodos === totalTodos){
        todo.completed = false
      // Case 2: Otherwise, make everything true.
      } else {
        todo.completed = true
      }
    }) 
  }
}
// ** Button handlers: controller **
var handlers = {
    addTodo: function() {
      var addTodoTextInput = document.getElementById('addTodoTextInput')
      todoList.addTodo(addTodoTextInput.value)
      addTodoTextInput.value = ''
      view.displayTodos()
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
      var changeTodoTextInput = document.getElementById('changeTodoTextInput')
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
      changeTodoPositionInput.value = ''
      changeTodoTextInput.value = ''
      view.displayTodos()
    },
    deleteTodo: function(position) {
      todoList.deleteTodo(position)
      view.displayTodos()
    },
    toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput')
      todoList.toggledCompleted(toggleCompletedPositionInput.valueAsNumber)
      toggleCompletedPositionInput.value = ''
      view.displayTodos()
    },
    toggleAll: function() {
      todoList.toggleAll()
      view.displayTodos()
    }
  }
// ** Render the todo list to the display: view **
var view = {
  displayTodos: function() {
    // 1. First, find `ul' element which we defined in our `index.html` file.
    var todosUl = document.querySelector('ul')
      // 2. Clear all elements within the child of `ul` before re-drawing all todos.
    todosUl.innerHTML = ''
    // 3. Re-draw the `li` elements
    todoList.todos.forEach(function(todo, position){
      // 4. Create an `li` element.
        var todoLi = document.createElement('li')
        var todoTextWithCompletion = ''

        if (todo.completed === true) {
          todoTextWithCompletion = '(x) ' + todo.todoText
        } else {
          todoTextWithCompletion = '( ) ' + todo.todoText
        }
        // 5. Create a unique id for each position so it knows which item in the array to delete.
        todoLi.id = position
      
        // 6. Set the todos text of each array to each `li` element.
        todoLi.textContent = todoTextWithCompletion
        // 7. Append a `Delete` button on `li`
        todoLi.appendChild(this.createDeleteButton())
        // 8. Add a child element, in this case the `li` element, to the `ul' element.
        todosUl.appendChild(todoLi)
    }, this)  
  },
  // Create a `Delete button to be appended on to each `li` element.
  createDeleteButton: function(){
    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'deleteButton'
    return deleteButton
  }
}

var todosUl = document.querySelector('ul')
todosUl.addEventListener('click', function(event) {
  console.log(event.target.parentNode.id)
  
  // Get the element that was clicked on.
  var elementClicked = event.target
  
  // Check the element clicked is a delete button: Delegation
  if (elementClicked.className === 'deleteButton'){
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
  }
})
   
// Helper function to debug functions
var debug = {
  runWithDebugger: function(ourFunction, args) {
    debugger
    ourFunction.apply(null, args)
  }
}








