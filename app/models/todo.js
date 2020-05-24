export default class Todo {

	constructor(data) {
		this.id = data._id
		this.user = data.user
		this.description = data.description || "Things todo"
		this.completed = false
		if (data.completed) {
			this.completed = true
		}
	}

	get template() {
		return /*html*/`
		          <div class="form-check">

								<input class="form-check-input " type="checkbox" value="" ${this.completed ? "checked" : ''} id="toggle" onchange="app.todoController.toggleTodoStatus('${this.id}')">
								<label class="form-check-label ${this.completed ? "done" : ''}" for="defaultCheck1">
									${this.description}
								</label>
								<i class="fas fa-times text-danger action" onclick="app.todoController.removeTodo('${this.id}')"></i>
							</div>

  `
	}
}







// get listItemsTemplate() {
// 	return /*html*/`
// 					<div class="form-check">
// 							 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
// 						<label class="form-check-label" for="defaultCheck1">${this.todo}
// 						 </label>
// 						<i class="fas fa-times text-danger action" onclick="app.todoController.deleteItem('${this.id}')"></i>
// 					 </div>
// `
// }

// <div class="col-3">
// 		<div class="card shadow">
// 			<div class="card-body d-flex flex-column">
// 			<i class="fas fa-times text-danger align-self-end action" onclick="app.todoController.deleteList(${this.id})"></i>
// 				<h4 class="card-title bg-info text-light text-center">${this.user}</h4>
// 				<ul class="pl-3">
// 					${this.listItemsTemplate}
// 				</ul>
// 				<form onsubmit="app.todoController.addItem()">
// 					<div class="form-group d-flex">
// 						<input type="text" class="form-control" name="item" id="item" aria-describedby="helpId"
// 							placeholder="Add Items..." required>
// 						<button type="submit" class="btn btn-outline-success ml-1"><i class="fas fa-plus "></i></button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	</div>
// let template = ' '
// this.todo.forEach((todo) => {
// 	template += /*html*/`
// <div class="form-check">
// 				<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
// 				<label class="form-check-label" for="defaultCheck1">${todo}
// 				</label>
// 				<i class="fas fa-times text-danger action" onclick="app.todoController.deleteItem('${this.id}')"></i>
// 			</div>
// `
// })
// return template;
// completed: false
// description: "adfadsasd"
// user: "micah"
// __v: 0
// _id: "5e8b726be7fc9700177c9956"