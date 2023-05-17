import { index } from '..';

// Todolist table headers
function createTodoHeader(className, headerTitle) {
	// create the todo list header element
	const todoListHeader = document.createElement('div');
	todoListHeader.classList.add('header', `${className}`);

	// create the span element
	const headerSpan = document.createElement('span');
	headerSpan.classList.add('header-span');

	// create the p element
	const headerText = document.createElement('p');
	headerText.textContent = `${headerTitle}`;

	// create the hr element
	const headerHr = document.createElement('hr');
	headerHr.classList.add('project-hr');

	// append the p and hr elements to the span element
	headerSpan.appendChild(headerText);
	headerSpan.appendChild(headerHr);

	// append the span element to the todo list header element
	todoListHeader.appendChild(headerSpan);

	// return the todo list header element
	return todoListHeader;
}

function createTodo(date, title, priority) {
	// create the todo item date element
	const todoItemDate = document.createElement('div');
	todoItemDate.classList.add('todo-item', 'date');
	todoItemDate.textContent = `${date}`;

	// create the todo item description element
	const todoItemDescription = document.createElement('div');
	todoItemDescription.classList.add('todo-item', 'description');
	todoItemDescription.textContent = `${title}`;

	// create the todo item priority element
	const todoItemPriority = document.createElement('div');
	todoItemPriority.classList.add('todo-item', 'priority');
	todoItemPriority.id = 'priorityHigh';
	todoItemPriority.textContent = `${priority}`;

	// create the todo item completed element
	const todoItemCompleted = document.createElement('div');
	todoItemCompleted.classList.add('todo-item', 'completed');
	const checkIcon = document.createElement('i');
	checkIcon.classList.add('fas', 'fa-check');
	todoItemCompleted.appendChild(checkIcon);

	// create the todo item update element
	const todoItemUpdate = document.createElement('div');
	todoItemUpdate.classList.add('todo-item', 'update');
	const updateIcon = document.createElement('i');
	updateIcon.title = 'Update todo';
	updateIcon.classList.add('fa', 'fa-eye');
	const deleteIcon = document.createElement('i');
	deleteIcon.title = 'Delete todo';
	deleteIcon.classList.add('fa', 'fa-trash');
	todoItemUpdate.appendChild(updateIcon);
	todoItemUpdate.appendChild(deleteIcon);

	return [
		todoItemDate,
		todoItemDescription,
		todoItemPriority,
		todoItemCompleted,
		todoItemUpdate,
	];
}

export function createTodoList(appState) {
	// Create the form container element
	const todoListLayout = document.createElement('div');
	todoListLayout.classList.add('todo-list-layout');

	if (appState.todoData.layoutComponent === 'TodosLayout') {
		todoListLayout.style.display = 'flex';
	} else {
		todoListLayout.style.display = 'none';
	}

	// Buttons container
	const buttonsContainer = document.createElement('div');
	buttonsContainer.className = 'buttons-container';

	const backButton = document.createElement('button');
	backButton.textContent = 'Back to projects';

	buttonsContainer.appendChild(backButton);

	// Todo list container (Coming soon...)
	const todoListContainer = document.createElement('div');
	todoListContainer.classList.add('todo-list-container');

	// // create the h2 element
	const myH2 = document.createElement('h2');
	myH2.classList.add('my-h2');
	myH2.textContent = appState.todoData.selectedProject;

	// // create the todo action buttons element
	const todoActionBtns = document.createElement('div');
	todoActionBtns.classList.add('todo-action-btns');

	// // create the todo table
	const todoList = document.createElement('div');
	todoList.classList.add('todo-list');
	const dateHeader = createTodoHeader('date', 'Date');
	const titleHeader = createTodoHeader('description', 'Title');
	const priorityHeader = createTodoHeader('priority', 'Priority');
	const completedHeader = createTodoHeader('completed', 'Completed');
	const updatedHeader = createTodoHeader('update', 'Update');
	const sampleTodo1 = createTodo('May 1, 2023', 'Buy groceries', 'High');
	const sampleTodo2 = createTodo('May 2, 2023', 'Buy item 2', 'High');
	const sampleTodo3 = createTodo('May 3, 2023', 'Buy item 3', 'High');
	// Create table headers
	[
		dateHeader,
		titleHeader,
		priorityHeader,
		completedHeader,
		updatedHeader,
	].forEach((child) => {
		todoList.appendChild(child);
	});

	// Create table items
	sampleTodo1.forEach((todo) => {
		todoList.appendChild(todo);
	});

	// // // create the new todo button element
	const newTodoBtn = document.createElement('button');
	newTodoBtn.textContent = 'New Todo';

	// // append the new todo button to the todo action buttons element
	todoActionBtns.appendChild(newTodoBtn);

	// append the h2 element and todo action buttons element to the todo list container element
	todoListContainer.appendChild(myH2);
	todoListContainer.appendChild(todoActionBtns);
	todoListContainer.appendChild(todoList);

	//* Append to top most parent (TOP LEVEL PARENT)
	todoListLayout.appendChild(buttonsContainer);
	todoListLayout.appendChild(todoListContainer);

	// Event Listeners
	// Back to Project layout
	backButton.addEventListener('click', () => {
		console.log('back to projects btn clicked');
		appState.todoData.layoutComponent = 'ProjectsGridLayout';

		// Update state in LS
		localStorage.setItem('state', JSON.stringify(appState));
		index(
			'I was rerendered because of a state update triggered by the projectsGrid:backButton elm!!!'
		);
	});

	// Open add Todo modal
	// // Open add project modal form
	newTodoBtn.addEventListener('click', () => {
		appState.todoData.modalActive = true;

		// Update state in LS
		localStorage.setItem('state', JSON.stringify(appState));
		index(
			'I was rerendered because of a state update triggered by the projectsGrid elm!!!'
		);
	});

	return todoListLayout;
}
