import { index } from '..';

function createButtonsContainer(appState) {
	const buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('buttons-container');

	const addProjectBtn = document.createElement('button');
	addProjectBtn.setAttribute('id', 'add-project-btn');
	addProjectBtn.textContent = 'Add Project';
	buttonsContainer.appendChild(addProjectBtn);

	// Event listeners
	// // Open add project modal form
	addProjectBtn.addEventListener('click', () => {
		appState.todoData.modalActive = true;

		// Update state in LS
		localStorage.setItem('state', JSON.stringify(appState));
		index(
			'I was rerendered because of a state update triggered by the projectsGrid elm!!!'
		);
	});

	return buttonsContainer;
}

function createProjectsGrid(appState) {
	const projectGrid = document.createElement('div');
	projectGrid.classList.add('grid');

	appState.todoData.projects.forEach((project, idx) => {
		const newProject = createProjectCard(project, idx, appState);
		projectGrid.append(newProject);
	});

	return projectGrid;
}

function createProjectCard(project, idx, appState) {
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
	todoCount.textContent = project.todos.length;
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
	addTodoBtn.textContent = 'Todos';

	const deleteProjectBtn = document.createElement('button');
	deleteProjectBtn.classList.add('delete-project');
	deleteProjectBtn.textContent = 'Delete Project';

	footerDiv.appendChild(addTodoBtn);
	footerDiv.appendChild(deleteProjectBtn);

	cardDiv.appendChild(headerDiv);
	cardDiv.appendChild(hr);
	cardDiv.appendChild(bodyDiv);
	cardDiv.appendChild(footerDiv);

	// Event listeners
	// // Add todo to project
	[addTodoBtn, projectStats].forEach((button) => {
		button.addEventListener('click', () => {
			appState.todoData.layoutComponent = 'TodosLayout';
			appState.todoData.selectedProject = project.name;
			appState.todoData.selectedProjectIndex = idx;
			// Update state in LS
			localStorage.setItem('state', JSON.stringify(appState));
			index(
				'I was rerendered because of a state update triggered by the projectsGrid:addTodoBtn||projectStats elm!!!'
			);
		});
	});

	// // Add todo to project
	deleteProjectBtn.addEventListener('click', () => {
		if (project.name === 'Default Project') {
			alert('Default project cannot be deleted!!!');
			return;
		} else {
			appState.todoData.projects.splice(idx, 1);
			appState.todoData.selectedProject = 'Default Project';
			appState.todoData.selectedProjectIndex = 0;

			// Update state in LS
			localStorage.setItem('state', JSON.stringify(appState));
			index(
				'I was rerendered because of a state update triggered by the projectsGrid:deleteProjectBtn elm!!!'
			);
		}
	});

	return cardDiv;
}

export function createProjectsLayout(appState) {
	const containerDiv = document.createElement('div');
	containerDiv.classList.add('project-grid-layout');
	if (appState.todoData.layoutComponent === 'ProjectsGridLayout') {
		containerDiv.style.display = 'flex';
	} else {
		containerDiv.style.display = 'none';
	}
	const buttonsContainer = createButtonsContainer(appState);
	const projectsGrid = createProjectsGrid(appState);
	containerDiv.append(buttonsContainer);
	containerDiv.append(projectsGrid);

	return containerDiv;
}
