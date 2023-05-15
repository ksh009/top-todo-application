export function createAddProjectModal(globalState) {
	console.log('globalState from addProjectModal', globalState);
	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container', 'modal');
	formContainer.id = 'addBookModal';

	const form = document.createElement('form');
	form.action = '#';
	form.method = 'post';

	const title = document.createElement('h1');
	title.textContent = 'Add New Project';
	form.appendChild(title);

	const projectNameLabel = document.createElement('label');
	projectNameLabel.setAttribute('for', 'project_name');
	projectNameLabel.textContent = 'Project Name:';
	form.appendChild(projectNameLabel);

	const projectNameInput = document.createElement('input');
	projectNameInput.setAttribute('type', 'text');
	projectNameInput.setAttribute('name', 'project_name');
	projectNameInput.setAttribute('id', 'project_name');
	form.appendChild(projectNameInput);

	const projectDescriptionLabel = document.createElement('label');
	projectDescriptionLabel.setAttribute('for', 'project_description');
	projectDescriptionLabel.textContent = 'Project Description:';
	form.appendChild(projectDescriptionLabel);

	const projectDescriptionTextarea = document.createElement('textarea');
	projectDescriptionTextarea.setAttribute('name', 'project_description');
	projectDescriptionTextarea.setAttribute('id', 'project_description');
	form.appendChild(projectDescriptionTextarea);

	const priorityLabel = document.createElement('label');
	priorityLabel.setAttribute('for', 'priority');
	priorityLabel.textContent = 'Priority:';
	form.appendChild(priorityLabel);

	const priorityLevelsContainer = document.createElement('div');
	priorityLevelsContainer.classList.add('priority-levels-container');

	const priorityHighInput = document.createElement('input');
	priorityHighInput.setAttribute('type', 'radio');
	priorityHighInput.setAttribute('name', 'priority');
	priorityHighInput.setAttribute('value', 'high');
	priorityHighInput.setAttribute('id', 'priority_high');
	priorityLevelsContainer.appendChild(priorityHighInput);

	const priorityHighLabel = document.createElement('label');
	priorityHighLabel.classList.add('priority-high');
	priorityHighLabel.setAttribute('for', 'priority_high');
	priorityHighLabel.textContent = 'High';
	priorityLevelsContainer.appendChild(priorityHighLabel);

	const priorityMediumInput = document.createElement('input');
	priorityMediumInput.setAttribute('type', 'radio');
	priorityMediumInput.setAttribute('name', 'priority');
	priorityMediumInput.setAttribute('value', 'medium');
	priorityMediumInput.setAttribute('id', 'priority_medium');
	priorityLevelsContainer.appendChild(priorityMediumInput);

	const priorityMediumLabel = document.createElement('label');
	priorityMediumLabel.classList.add('priority-medium');
	priorityMediumLabel.setAttribute('for', 'priority_medium');
	priorityMediumLabel.textContent = 'Medium';
	priorityLevelsContainer.appendChild(priorityMediumLabel);

	const priorityLowInput = document.createElement('input');
	priorityLowInput.setAttribute('type', 'radio');
	priorityLowInput.setAttribute('name', 'priority');
	priorityLowInput.setAttribute('value', 'low');
	priorityLowInput.setAttribute('id', 'priority_low');
	priorityLevelsContainer.appendChild(priorityLowInput);

	const priorityLowLabel = document.createElement('label');
	priorityLowLabel.classList.add('priority-low');
	priorityLowLabel.setAttribute('for', 'priority_low');
	priorityLowLabel.textContent = 'Low';
	priorityLevelsContainer.appendChild(priorityLowLabel);

	form.appendChild(priorityLevelsContainer);

	const formFooter = document.createElement('div');
	formFooter.classList.add('form-footer');

	const cancelButton = document.createElement('button');
	cancelButton.classList.add('cancel-btn');
	cancelButton.setAttribute('type', 'submit');
	cancelButton.textContent = 'CANCEL';
	formFooter.appendChild(cancelButton);

	const createProjectButton = document.createElement('button');
	createProjectButton.classList.add('action-btn');
	createProjectButton.setAttribute('type', 'submit');
	createProjectButton.textContent = 'CREATE PROJECT';
	formFooter.appendChild(createProjectButton);

	form.appendChild(formFooter);

	formContainer.appendChild(form);

	return formContainer;
}
