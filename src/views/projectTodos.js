export function createTodoList() {
	// Create the form container element
	const todoListContainer = document.createElement('div');
	todoListContainer.classList.add('todo-list-layout');

	// Set the innerHTML of the form container using a template literal
	todoListContainer.innerHTML = `
    <div class="buttons-container">
        <button id="add-project-btn">Back to projects</button>
    </div>
    <div class="todo-list-container">
				<h2>(Selected Project) Todo List</h2>
				<div class="todo-action-btns">
					<button>+ New Todo</button>
				</div>
				<div class="todo-list">
					<div class="header date">
						<span class="header-span">
							<p>Date</p>
							<hr class="project-hr" />
						</span>
					</div>
					<div class="header description">
						<span class="header-span">
							<p>Title</p>
							<hr class="project-hr" />
						</span>
					</div>
					<div class="header priority">
						<span class="header-span">
							<p>Priority</p>
							<hr class="project-hr" />
						</span>
					</div>
					<div class="header completed">
						<span class="header-span">
							<p>Completed</p>
							<hr class="project-hr" />
						</span>
					</div>
					<div class="header update">
						<span class="header-span">
							<p>Update</p>
							<hr class="project-hr" />
						</span>
					</div>

					<div class="todo-item date">May 1, 2023</div>
					<div class="todo-item description">Buy groceries</div>
					<div id="priorityHigh" class="todo-item priority">High</div>
					<div class="todo-item completed"><i class="fas fa-check"></i></div>
					<div class="todo-item update">
						<i title="Update todo" class="fa fa-eye"></i>
						<i title="Delete todo" class="fa fa-trash"></i>
					</div>

					<div class="todo-item date">May 2, 2023</div>
					<div class="todo-item description">Pay bills</div>
					<div id="priorityMed" class="todo-item priority medium">Medium</div>
					<div class="todo-item completed"><i class="fas fa-check"></i></div>
					<div class="todo-item update">
						<i title="Update todo" class="fa fa-eye"></i>
						<i title="Delete todo" class="fa fa-trash"></i>
					</div>

					<div class="todo-item date">May 3, 2023</div>
					<div class="todo-item description">Do laundry</div>
					<div id="priorityLow" class="todo-item priority low">Low</div>
					<div class="todo-item completed"><i class="fas fa-check"></i></div>
					<div class="todo-item update">
						<i title="Update todo" class="fa fa-eye"></i>
						<i title="Delete todo" class="fa fa-trash"></i>
					</div>

					<div class="todo-item date">May 5, 2023</div>
					<div class="todo-item description">Wash dogs</div>
					<div id="priorityMed" class="todo-item priority medium">Medium</div>
					<div class="todo-item completed"></div>
					<div class="todo-item update">
						<i title="Update todo" class="fa fa-eye"></i>
						<i title="Delete todo" class="fa fa-trash"></i>
					</div>

					<div class="todo-item date">May 7, 2023</div>
					<div class="todo-item description">Change tyres</div>
					<div id="priorityHigh" class="todo-item priority">High</div>
					<div class="todo-item completed"></div>
					<div class="todo-item update">
						<i title="Update todo" class="fa fa-eye"></i>
						<i title="Delete todo" class="fa fa-trash"></i>
					</div>

					<div class="todo-item date">May 9, 2023</div>
					<div class="todo-item description">Replant seeds</div>
					<div id="priorityLow" class="todo-item priority low">Low</div>
					<div class="todo-item completed"></div>
					<div class="todo-item update">
						<i title="Update todo" class="fa fa-eye"></i>
						<i title="Delete todo" class="fa fa-trash"></i>
					</div>
				</div>
			</div>
`;
	return todoListContainer;
}
