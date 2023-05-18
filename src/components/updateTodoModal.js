import { index } from '..';

export function createUpdateModal(appState) {
	// Create container
	const formContainer = document.createElement('div');
	formContainer.classList.add('form-container', 'modal');

	if (appState.todoData.modalActive) {
		formContainer.style.display = 'flex';
	}

	// Create the container div
	const containerDiv = document.createElement('div');
	containerDiv.classList.add('detailed-todo-container');

	// Create the header div
	const headerDiv = document.createElement('div');
	headerDiv.classList.add('detailed-todo-header');

	// Create the title element
	const titleElement = document.createElement('h3');
	titleElement.setAttribute('contenteditable', true);
	titleElement.textContent =
		appState.todoData.projects[appState.todoData.selectedProjectIndex].todos[
			appState.todoData.selectedTodoIdx
		]?.title;
	headerDiv.appendChild(titleElement);

	// Create the edit icon
	const editIcon = document.createElement('i');
	editIcon.classList.add('fas', 'fa-pencil-alt', 'edit-icon');
	headerDiv.appendChild(editIcon);

	// Append the header div to the container div
	containerDiv.appendChild(headerDiv);

	// Create the stats div
	const statsDiv = document.createElement('div');
	statsDiv.classList.add('detailed-todo-stats');

	// Create the date input
	const dateInput = document.createElement('input');
	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('id', 'date');
	dateInput.setAttribute('name', 'date');
	dateInput.setAttribute('required', true);
	dateInput.setAttribute(
		'value',
		appState.todoData.projects[appState.todoData.selectedProjectIndex].todos[
			appState.todoData.selectedTodoIdx
		]?.date
	);
	statsDiv.appendChild(dateInput);

	// Create the priority span
	const prioritySpan = document.createElement('span');
	prioritySpan.classList.add('todo-stats-level');
	prioritySpan.textContent = 'Priority:';

	// Create the filter menu div
	const filterMenuDiv = document.createElement('div');
	filterMenuDiv.classList.add('filter-menu', 'font-awesome');

	// Create the select element
	const selectElement = document.createElement('select');
	selectElement.classList.add('far');

	// Create the priority options
	const highOption = document.createElement('option');
	highOption.classList.add('far', 'high');
	highOption.value = 'High';
	highOption.textContent = 'High';
	selectElement.appendChild(highOption);

	const mediumOption = document.createElement('option');
	mediumOption.classList.add('far', 'medium');
	mediumOption.value = 'Medium';
	mediumOption.textContent = 'Medium';
	selectElement.appendChild(mediumOption);

	const lowOption = document.createElement('option');
	lowOption.classList.add('far', 'low');
	lowOption.value = 'Low';
	lowOption.textContent = 'Low';
	selectElement.appendChild(lowOption);

	// Append the select element to the filter menu div
	filterMenuDiv.appendChild(selectElement);

	// Append the filter menu div to the priority span
	prioritySpan.appendChild(filterMenuDiv);

	// Append the priority span to the stats div
	statsDiv.appendChild(prioritySpan);

	// Append the stats div to the container div
	containerDiv.appendChild(statsDiv);

	// Create the horizontal rule
	const hrElement = document.createElement('hr');
	hrElement.classList.add('project-hr');

	// Append the horizontal rule to the container div
	containerDiv.appendChild(hrElement);

	// Create the body icon div
	const bodyIconDiv = document.createElement('div');
	bodyIconDiv.classList.add('detailed-body-icon');

	// Create the edit icon
	const bodyEditIcon = document.createElement('i');
	bodyEditIcon.classList.add('fas', 'fa-pencil-alt', 'edit-icon');
	bodyIconDiv.appendChild(bodyEditIcon);

	// Append the body icon div to the container div
	containerDiv.appendChild(bodyIconDiv);

	// Create the body div
	const bodyDiv = document.createElement('div');
	bodyDiv.classList.add('detailed-todo-body');

	// Create the description paragraph
	const descriptionParagraph = document.createElement('p');
	descriptionParagraph.setAttribute('contenteditable', true);
	descriptionParagraph.textContent =
		appState.todoData.projects[appState.todoData.selectedProjectIndex].todos[
			appState.todoData.selectedTodoIdx
		]?.description;
	bodyDiv.appendChild(descriptionParagraph);

	// Append the body div to the container div
	containerDiv.appendChild(bodyDiv);

	// Create the completed div
	const completedDiv = document.createElement('div');
	completedDiv.classList.add('detailed-completed');

	// Create the completed label
	const completedLabel = document.createElement('label');
	completedLabel.setAttribute('for', 'completed');
	completedLabel.textContent = 'Completed:';

	// Create the completed checkbox
	const completedCheckbox = document.createElement('input');
	completedCheckbox.setAttribute('type', 'checkbox');
	completedCheckbox.setAttribute('id', 'completed');
	completedCheckbox.setAttribute('name', 'completed');

	if (
		appState.todoData.projects[appState.todoData.selectedProjectIndex].todos[
			appState.todoData.selectedTodoIdx
		]?.completed
	) {
		completedCheckbox.setAttribute('checked', 'checked');
	}

	// Append the label and checkbox to the completed div
	completedDiv.appendChild(completedLabel);
	completedDiv.appendChild(completedCheckbox);

	// Append the completed div to the container div
	containerDiv.appendChild(completedDiv);

	// Create the footer div
	const footerDiv = document.createElement('div');
	footerDiv.classList.add('detailed-todo-footer');

	// Create the cancel button
	const cancelButton = document.createElement('button');
	cancelButton.classList.add('add-todo');
	cancelButton.textContent = 'Cancel';

	// Create the update button
	const updateButton = document.createElement('button');
	updateButton.classList.add('update-project');
	updateButton.textContent = 'Update';

	// Append the buttons to the footer div
	footerDiv.appendChild(cancelButton);
	footerDiv.appendChild(updateButton);

	// Append the footer div to the container div
	containerDiv.appendChild(footerDiv);

	formContainer.appendChild(containerDiv);

	// Event Listeners
	// // Cancel button
	cancelButton.addEventListener('click', () => {
		appState.todoData.modalActive = false;
		// Apply same on update
		appState.todoData.selectedTodoIdx = 0;

		// Update state in LS
		localStorage.setItem('state', JSON.stringify(appState));
		index(
			'I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!'
		);
	});

	// Update todo
	let updatedTitle;
	let updatedDate;
	let updatedPriority;
	let updatedDescription;
	let updatedCompletion;

	titleElement.addEventListener('blur', (e) => {
		updatedTitle = e.target.textContent;
		console.log('updatedTitle', updatedTitle);
	});

	dateInput.addEventListener('blur', (e) => {
		updatedDate = e.target.value;
		console.log('updatedDate', updatedDate);
	});

	selectElement.addEventListener('change', (e) => {
		updatedPriority = e.target.value;
		console.log('updatedPriority', updatedPriority);
	});

	descriptionParagraph.addEventListener('blur', (e) => {
		updatedDescription = e.target.textContent;
		console.log('updatedDescription', updatedDescription);
	});

	completedCheckbox.addEventListener('change', function () {
		if (completedCheckbox.checked) {
			updatedCompletion = true;
			console.log('updatedCompletion', updatedCompletion);
		} else {
			updatedCompletion = false;
			console.log('updatedCompletion', updatedCompletion);
		}
	});

	// Return the created HTML structure
	return formContainer;
}
