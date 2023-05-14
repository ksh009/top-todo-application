import { projectCards } from '../variables/projectSeedData';

function createProjectsGrid(project) {
	//   <div class="grid">
	//     ${projectCard}
	//   </div>
	const projectGrid = document.createElement('div');
	projectGrid.classList.add('grid');
	projectGrid.append(project);

	return projectGrid;
}

function createProjectCard() {
	const cardDiv = document.createElement('div');
	cardDiv.classList.add('project-card');

	const headerDiv = document.createElement('div');
	headerDiv.classList.add('project-header');

	const projectName = document.createElement('h3');
	projectName.classList.add('project-name');
	projectName.textContent = 'Default Project';

	const projectStats = document.createElement('span');
	projectStats.classList.add('project-stats');

	const lowPriorityTodo = document.createElement('i');
	lowPriorityTodo.id = 'lowPriorityTodo';
	lowPriorityTodo.classList.add('far', 'fa-circle');
	projectStats.appendChild(lowPriorityTodo);

	const todoCount = document.createElement('h5');
	todoCount.classList.add('project-todo-count');
	todoCount.textContent = `Todos: ${9}`;
	projectStats.appendChild(todoCount);

	headerDiv.appendChild(projectName);
	headerDiv.appendChild(projectStats);

	const hr = document.createElement('hr');
	hr.classList.add('project-hr');

	const bodyDiv = document.createElement('div');
	bodyDiv.classList.add('project-body');

	const description = document.createElement('p');
	description.classList.add('project-description');
	description.textContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.';

	bodyDiv.appendChild(description);

	const footerDiv = document.createElement('div');
	footerDiv.classList.add('project-footer');

	const addTodoBtn = document.createElement('button');
	addTodoBtn.classList.add('add-todo');
	addTodoBtn.textContent = 'Add Todo';

	const deleteProjectBtn = document.createElement('button');
	deleteProjectBtn.classList.add('delete-project');
	deleteProjectBtn.textContent = 'Delete Project';

	footerDiv.appendChild(addTodoBtn);
	footerDiv.appendChild(deleteProjectBtn);

	cardDiv.appendChild(headerDiv);
	cardDiv.appendChild(hr);
	cardDiv.appendChild(bodyDiv);
	cardDiv.appendChild(footerDiv);

	return cardDiv;
}

export function createProjectsLayout() {
	const projectCard = createProjectCard();
	const projectsGrid = createProjectsGrid(projectCard);
	const containerDiv = document.createElement('div');
	// containerDiv.innerHTML = `
	//   <div class="buttons-container">
	//     <button id="add-project-btn">+ Add Project</button>
	//     <div class="filter-menu font-awesome">
	//       <select class="far">
	//         <option class="far">All</option>
	//         <option class="far high">&#xf111; High</option>
	//         <option class="far medium">&#xf111; Medium</option>
	//         <option class="far low">&#xf111; Low</option>
	//       </select>
	//     </div>
	//   </div>
	//   <div class="grid">
	//     ${projectCard}
	//   </div>
	// `;
	containerDiv.append(projectsGrid);
	// Event listeners
	// const addTodoButton = containerDiv.querySelector('.add-todo');
	// addTodoButton.addEventListener('click', () => {
	// 	console.log('ADD TODO BUTTON CLICKED');
	// });
	return containerDiv;
}
