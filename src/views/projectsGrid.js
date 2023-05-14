import { projectCards } from '../variables/projectSeedData';

function createButtonsContainer() {
	const buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('buttons-container');

	const addProjectBtn = document.createElement('button');
	addProjectBtn.setAttribute('id', 'add-project-btn');
	addProjectBtn.textContent = '+ Add Project';
	buttonsContainer.appendChild(addProjectBtn);

	const filterMenu = document.createElement('div');
	filterMenu.classList.add('filter-menu', 'font-awesome');

	const select = document.createElement('select');
	select.classList.add('far');

	const allOption = document.createElement('option');
	allOption.classList.add('far');
	allOption.textContent = 'All';
	select.appendChild(allOption);

	const highOption = document.createElement('option');
	highOption.classList.add('far', 'high');
	highOption.textContent = '\uf111; High';
	select.appendChild(highOption);

	const mediumOption = document.createElement('option');
	mediumOption.classList.add('far', 'medium');
	mediumOption.textContent = '\uf111; Medium';
	select.appendChild(mediumOption);

	const lowOption = document.createElement('option');
	lowOption.classList.add('far', 'low');
	lowOption.textContent = '\uf111; Low';
	select.appendChild(lowOption);

	filterMenu.appendChild(select);
	buttonsContainer.appendChild(filterMenu);

	return buttonsContainer;
}

function createProjectsGrid(project) {
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
	const buttonsContainer = createButtonsContainer();
	const projectCard = createProjectCard();
	const projectsGrid = createProjectsGrid(projectCard);
	const containerDiv = document.createElement('div');
	containerDiv.append(buttonsContainer);
	containerDiv.append(projectsGrid);
	// Event listeners
	// const addTodoButton = containerDiv.querySelector('.add-todo');
	// addTodoButton.addEventListener('click', () => {
	// 	console.log('ADD TODO BUTTON CLICKED');
	// });
	return containerDiv;
}
