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
	highOption.textContent = 'o High';
	select.appendChild(highOption);

	const mediumOption = document.createElement('option');
	mediumOption.classList.add('far', 'medium');
	mediumOption.textContent = 'o Medium';
	select.appendChild(mediumOption);

	const lowOption = document.createElement('option');
	lowOption.classList.add('far', 'low');
	lowOption.textContent = 'o Low';
	select.appendChild(lowOption);

	filterMenu.appendChild(select);
	buttonsContainer.appendChild(filterMenu);

	return buttonsContainer;
}

function createProjectsGrid(projects) {
	const projectGrid = document.createElement('div');
	projectGrid.classList.add('grid');

	// Loop through projects
	projects.forEach((project) => {
		const newProject = createProjectCard(project);
		projectGrid.append(newProject);
	});

	return projectGrid;
}

function createProjectCard(project) {
	console.log('project', project);
	const cardDiv = document.createElement('div');
	cardDiv.classList.add('project-card');

	const headerDiv = document.createElement('div');
	headerDiv.classList.add('project-header');

	const projectName = document.createElement('h3');
	projectName.classList.add('project-name');
	projectName.textContent = project.name;

	const projectStats = document.createElement('span');
	projectStats.classList.add('project-stats');

	const todoPriorityLevel = document.createElement('i');
	todoPriorityLevel.id = project.priorityId;
	todoPriorityLevel.classList.add('far', 'fa-circle');
	projectStats.appendChild(todoPriorityLevel);

	const todoCount = document.createElement('h5');
	todoCount.classList.add('project-todo-count');
	todoCount.textContent = `Todos: ${project.todoCount}`;
	projectStats.appendChild(todoCount);

	headerDiv.appendChild(projectName);
	headerDiv.appendChild(projectStats);

	const hr = document.createElement('hr');
	hr.classList.add('project-hr');

	const bodyDiv = document.createElement('div');
	bodyDiv.classList.add('project-body');

	const description = document.createElement('p');
	description.classList.add('project-description');
	description.textContent = project.description;

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
	// const projectCard = createProjectCard();
	const projectsGrid = createProjectsGrid(projectCards);
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
