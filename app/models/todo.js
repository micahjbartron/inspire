export default class Todo {

  constructor(data) {
    this.id = data._id
    this.user = data.user
    this.completed = false
    this.item = data.description
  }

  get template() {
    return /*html*/`
  <div class="col-3">
				<div class="card shadow">
					<div class="card-body d-flex flex-column">
						<h4 class="card-title bg-info text-light text-center">ToDo</h4>
						<ul class="pl-3">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
								<label class="form-check-label" for="defaultCheck1">
									Default checkbox
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
								<label class="form-check-label" for="defaultCheck2">
									Disabled checkbox
								</label>
							</div>
						</ul>
						<form onsubmit="app.listController.addItem()">
							<div class="form-group d-flex">
								<input type="text" class="form-control" name="item" id="item" aria-describedby="helpId"
									placeholder="Add Items..." required>
								<button type="submit" class="btn btn-outline-success ml-1"><i class="fas fa-plus "></i></button>
							</div>
						</form>
					</div>
				</div>
			</div>

  `
  }



}