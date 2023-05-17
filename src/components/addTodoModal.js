import { index } from '..';

export function createAddTodoModal(appState) {
	console.log('Logging appState from createTodoModal', appState);

	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container', 'modal');

	if (appState.todoData.modalActive) {
		formContainer.style.display = 'flex';
	}

	const form = document.createElement('form');
	form.setAttribute('action', '#');
	form.setAttribute('method', 'post');

	const h1 = document.createElement('h1');
	h1.textContent = 'Add New Todo';
	form.appendChild(h1);

	const dateLabel = document.createElement('label');
	dateLabel.setAttribute('for', 'date');
	dateLabel.textContent = 'Date:';
	form.appendChild(dateLabel);

	const dateInput = document.createElement('input');
	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('id', 'date');
	dateInput.setAttribute('name', 'date');
	dateInput.setAttribute('required', true);
	form.appendChild(dateInput);

	const titleLabel = document.createElement('label');
	titleLabel.setAttribute('for', 'title');
	titleLabel.textContent = 'Title:';
	form.appendChild(titleLabel);

	const titleInput = document.createElement('input');
	titleInput.setAttribute('type', 'text');
	titleInput.setAttribute('id', 'title');
	titleInput.setAttribute('name', 'title');
	titleInput.setAttribute('required', true);
	form.appendChild(titleInput);

	const descriptionLabel = document.createElement('label');
	descriptionLabel.setAttribute('for', 'project_description');
	descriptionLabel.textContent = 'Todo Description:';
	form.appendChild(descriptionLabel);

	const descriptionTextarea = document.createElement('textarea');
	descriptionTextarea.setAttribute('name', 'project_description');
	descriptionTextarea.setAttribute('id', 'project_description');
	form.appendChild(descriptionTextarea);

	const priorityLabel = document.createElement('label');
	priorityLabel.setAttribute('for', 'priority');
	priorityLabel.textContent = 'Priority:';
	form.appendChild(priorityLabel);

	const priorityLevelsContainerDiv = document.createElement('div');
	priorityLevelsContainerDiv.classList.add('priority-levels-container');

	const highRadioInput = document.createElement('input');
	highRadioInput.setAttribute('type', 'radio');
	highRadioInput.setAttribute('name', 'priority');
	highRadioInput.setAttribute('value', 'high');
	highRadioInput.setAttribute('id', 'priority_high');
	priorityLevelsContainerDiv.appendChild(highRadioInput);

	const highLabel = document.createElement('label');
	highLabel.classList.add('priority-high');
	highLabel.setAttribute('for', 'priority_high');
	highLabel.textContent = 'High';
	priorityLevelsContainerDiv.appendChild(highLabel);

	const mediumRadioInput = document.createElement('input');
	mediumRadioInput.setAttribute('type', 'radio');
	mediumRadioInput.setAttribute('name', 'priority');
	mediumRadioInput.setAttribute('value', 'medium');
	mediumRadioInput.setAttribute('id', 'priority_medium');
	priorityLevelsContainerDiv.appendChild(mediumRadioInput);

	const mediumLabel = document.createElement('label');
	mediumLabel.classList.add('priority-medium');
	mediumLabel.setAttribute('for', 'priority_medium');
	mediumLabel.textContent = 'Medium';
	priorityLevelsContainerDiv.appendChild(mediumLabel);

	const lowRadioInput = document.createElement('input');
	lowRadioInput.setAttribute('type', 'radio');
	lowRadioInput.setAttribute('name', 'priority');
	lowRadioInput.setAttribute('value', 'low');
	lowRadioInput.setAttribute('id', 'priority_low');
	priorityLevelsContainerDiv.appendChild(lowRadioInput);

	const lowLabel = document.createElement('label');
	lowLabel.classList.add('priority-low');
	lowLabel.setAttribute('for', 'priority_low');
	lowLabel.textContent = 'Low';
	priorityLevelsContainerDiv.appendChild(lowLabel);

	form.appendChild(priorityLevelsContainerDiv);

	const formFooterDiv = document.createElement('div');
	formFooterDiv.classList.add('form-footer');

	const cancelButton = document.createElement('button');
	cancelButton.classList.add('cancel-btn');
	cancelButton.setAttribute('type', 'button');
	cancelButton.textContent = 'CANCEL';

	const createTodoBtn = document.createElement('button');
	createTodoBtn.classList.add('action-btn');
	createTodoBtn.setAttribute('type', 'submit');
	createTodoBtn.textContent = 'CREATE TODO';

	formFooterDiv.appendChild(cancelButton);
	formFooterDiv.appendChild(createTodoBtn);

	form.appendChild(formFooterDiv);
	formContainer.appendChild(form);

	// Event Listeners
	cancelButton.addEventListener('click', () => {
		appState.todoData.modalActive = false;

		// Update state in LS
		localStorage.setItem('state', JSON.stringify(appState));
		index(
			'I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!'
		);
	});

	return formContainer;
}
