import { index } from '..';

export function createTodoList(appState) {
	// Create the form container element
	const todoListContainer = document.createElement('div');
	todoListContainer.classList.add('todo-list-layout');

	if (appState.todoData.layoutComponent === 'TodosLayout') {
		todoListContainer.style.display = 'flex';
	} else {
		todoListContainer.style.display = 'none';
	}

	// Buttons container
	const buttonsContainer = document.createElement('div');
	buttonsContainer.className = 'buttons-container';

	const backButton = document.createElement('button');
	backButton.textContent = 'Back to projects';

	buttonsContainer.appendChild(backButton);

	// Todo list container (Coming soon...)

	// Append to parent
	todoListContainer.appendChild(buttonsContainer);

	// Todo list container

	// todoListContainer.appendChild(buttonsContainer);

	// Set the innerHTML of the form container using a template literal
	// 	todoListContainer.innerHTML = `${buttonsContainer}
	//     <div class="todo-list-container">
	// 				<h2>(Selected Project) Todo List</h2>
	// 				<div class="todo-action-btns">
	// 					<button>+ New Todo</button>
	// 				</div>
	// 				<div class="todo-list">
	// 					<div class="header date">
	// 						<span class="header-span">
	// 							<p>Date</p>
	// 							<hr class="project-hr" />
	// 						</span>
	// 					</div>
	// 					<div class="header description">
	// 						<span class="header-span">
	// 							<p>Title</p>
	// 							<hr class="project-hr" />
	// 						</span>
	// 					</div>
	// 					<div class="header priority">
	// 						<span class="header-span">
	// 							<p>Priority</p>
	// 							<hr class="project-hr" />
	// 						</span>
	// 					</div>
	// 					<div class="header completed">
	// 						<span class="header-span">
	// 							<p>Completed</p>
	// 							<hr class="project-hr" />
	// 						</span>
	// 					</div>
	// 					<div class="header update">
	// 						<span class="header-span">
	// 							<p>Update</p>
	// 							<hr class="project-hr" />
	// 						</span>
	// 					</div>

	// 					<div class="todo-item date">May 1, 2023</div>
	// 					<div class="todo-item description">Buy groceries</div>
	// 					<div id="priorityHigh" class="todo-item priority">High</div>
	// 					<div class="todo-item completed"><i class="fas fa-check"></i></div>
	// 					<div class="todo-item update">
	// 						<i title="Update todo" class="fa fa-eye"></i>
	// 						<i title="Delete todo" class="fa fa-trash"></i>
	// 					</div>
	// 				</div>
	// 			</div>
	// `;

	// Event Listeners
	backButton.addEventListener('click', () => {
		console.log('back to projects btn clicked');
		appState.todoData.layoutComponent = 'ProjectsGridLayout';
		// Update state in LS
		localStorage.setItem('state', JSON.stringify(appState));
		index(
			'I was rerendered because of a state update triggered by the projectsGrid:backButton elm!!!'
		);
	});

	return todoListContainer;
}
