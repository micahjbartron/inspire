import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/micah/todos/",
  timeout: 8000
});

class TodoService {


  constructor() {
    this.getTodos()
  }
  getTodos() {
    todoApi.get()
      .then(res => {
        console.log(res.data)
        let newTodo = res.data.data.map(todoData => new Todo(todoData))
        store.commit('todos', newTodo)
      })
      .catch(err => console.error(err))
  }

  addTodoAsync(todo) {
    // debugger
    todoApi.post("", todo)
      .then(res => {
        //console.log(res.data);

        let newTodo = new Todo(res.data.data)
        let todo = [newTodo, ...store.State.todos]
        store.commit('todos', todo)
        //this.getTodos()
      })
      .catch(err => console.error(err))

    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let foundTodo = store.State.todos.find(todo => todo.id == todoId);
    if (foundTodo) {
      foundTodo.completed = !foundTodo.completed
      //console.log(foundTodo);
    }

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, foundTodo)
      .then(res => {
        console.log(res);
        this.getTodos()
      })
      .catch(err => console.error(err))
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {

    todoApi.delete(todoId)
      .then(res => {
        console.log(res.data)
        this.getTodos()
      })
      .catch(err => console.error(err))

  }
}

const todoService = new TodoService();
export default todoService;
