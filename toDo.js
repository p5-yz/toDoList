var todos = ['item 1', 'item 2', 'item 3']

//Display todo
function displayTodos(){
  console.log('My todos:', todos)
}

//Add to toDo
function addTodo(todo){
  todos.push(todo)
  displayTodos()
}

//Change toDo
function changeTodo(position, newInfo){
  todos[position] = newInfo
}

//Delete toDo
function deleteTodo(position){
  todo.splace(position, 1)
  displayTodo()
}
