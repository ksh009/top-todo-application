import { index } from '..';

function createButtonsContainer(appState) {
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
	allOption.value = 'all';
	select.appendChild(allOption);

	const highOption = document.createElement('option');
	highOption.classList.add('far', 'high');
	highOption.textContent = 'o High';
	highOption.value = 'high';
	select.appendChild(highOption);

	const mediumOption = document.createElement('option');
	mediumOption.classList.add('far', 'medium');
	mediumOption.textContent = 'o Medium';
	mediumOption.value = 'medium';
	select.appendChild(mediumOption);

	const lowOption = document.createElement('option');
	lowOption.classList.add('far', 'low');
	lowOption.textContent = 'o Low';
	lowOption.value = 'low';
	select.appendChild(lowOption);

	filterMenu.appendChild(select);
	buttonsContainer.appendChild(filterMenu);

	// Event listeners
	// // Open add project modal form
	addProjectBtn.addEventListener('click', () => {
		appState.todoData.modalActive = true;
		appState.todoData.modalComponent = 'AddNewProject';
		console.log('appState logged from addProjectBtn', appState);

		// Update state in LS
		localStorage.setItem('state', JSON.stringify(appState));
		index(
			'I was rerendered because of a state update triggered by the projectsGrid elm!!!'
		);
	});

	select.addEventListener('change', (event) => {
		const selectedOption = event.target.value;
		console.log('selectedOption', selectedOption);

		// 16/05 - Pass select option into index when working on filter
		index(
			'I was rerendered because of a state update triggered by the projectsGrid elm!!!'
		);
	});

	allOption.addEventListener('click', () => {
		console.log('clicked All');
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
	todoCount.textContent = project.todoCount;
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

	// Event listeners
	// // Add todo to project
	addTodoBtn.addEventListener('click', () => {
		console.log(`ADD TODO BUTTON CLICKED at index ${idx}`);
	});

	// // Add todo to project
	deleteProjectBtn.addEventListener('click', () => {
		console.log(`DELETE BUTTON CLICKED at index ${idx}`);

		if (project.name === 'Default Project') {
			alert('Default project cannot be deleted!!!');
			console.log('Default Project cannot be deleted!!');
			return;
		} else {
			appState.todoData.projects.splice(idx, 1);
			console.log('Project removed ad state updated', appState);
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
	// console.log('appState in createProjectsLayout', appState);
	const buttonsContainer = createButtonsContainer(appState);
	const projectsGrid = createProjectsGrid(appState);
	const containerDiv = document.createElement('div');
	containerDiv.append(buttonsContainer);
	containerDiv.append(projectsGrid);

	return containerDiv;
}
