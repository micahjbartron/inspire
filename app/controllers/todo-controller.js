import TodoService from "../services/todo-service.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  let template = " "
  let todoList = store.State.todos
  //console.log(todoList);

  todoList.forEach(todo => template += todo.template)
  document.getElementById("todolist").innerHTML = template

}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(event) {
    event.preventDefault();
    let formData = event.target
    let todo = {
      description: formData.todo.value,
    }
    // console.log(todo);

    todoService.addTodoAsync(todo);
    formData.reset()
  }


  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    todoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    todoService.removeTodoAsync(todoId);
  }
}
