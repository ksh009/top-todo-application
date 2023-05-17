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
	// create the todo item container element
	// const todoItemContainer = document.createElement('div');
	// todoItemContainer.classList.add('todo-item-container');

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

	// append all todo item elements to the container
	// todoItemContainer.appendChild(todoItemDate);
	// todoItemContainer.appendChild(todoItemDescription);
	// todoItemContainer.appendChild(todoItemPriority);
	// todoItemContainer.appendChild(todoItemCompleted);
	// todoItemContainer.appendChild(todoItemUpdate);

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
	myH2.textContent = '(Selected Project) Todo List';

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
	newTodoBtn.textContent = '+ New Todo';

	// // append the new todo button to the todo action buttons element
	todoActionBtns.appendChild(newTodoBtn);

	// append the h2 element and todo action buttons element to the todo list container element
	todoListContainer.appendChild(myH2);
	todoListContainer.appendChild(todoActionBtns);
	todoListContainer.appendChild(todoList);

	//* Append to top most parent (TOP LEVEL PARENT)
	todoListLayout.appendChild(buttonsContainer);
	todoListLayout.appendChild(todoListContainer);

	// Todo list container

	// todoListContainer.appendChild(buttonsContainer);

	// Set the innerHTML of the form container using a template literal
	// 	todoListContainer.innerHTML = `${buttonsContainer}
	//     <div class="todo-list-container">
	// 				<h2 class="my-h2">(Selected Project) Todo List</h2>
	// 				<div class="todo-action-btns">
	// 					<button>+ New Todo</button>
	// 				</div>
	// <div class="todo-list">
	// 	<div class="header date">
	// 		<span class="header-span">
	// 			<p>Date</p>
	// 			<hr class="project-hr" />
	// 		</span>
	// 	</div>
	// 	<div class="header description">
	// 		<span class="header-span">
	// 			<p>Title</p>
	// 			<hr class="project-hr" />
	// 		</span>
	// 	</div>
	// 	<div class="header priority">
	// 		<span class="header-span">
	// 			<p>Priority</p>
	// 			<hr class="project-hr" />
	// 		</span>
	// 	</div>
	// 	<div class="header completed">
	// 		<span class="header-span">
	// 			<p>Completed</p>
	// 			<hr class="project-hr" />
	// 		</span>
	// 	</div>
	// 	<div class="header update">
	// 		<span class="header-span">
	// 			<p>Update</p>
	// 			<hr class="project-hr" />
	// 		</span>
	// 	</div>

	// 	<div class="todo-item date">May 1, 2023</div>
	// 	<div class="todo-item description">Buy groceries</div>
	// 	<div id="priorityHigh" class="todo-item priority">High</div>
	// 	<div class="todo-item completed"><i class="fas fa-check"></i></div>
	// 	<div class="todo-item update">
	// 		<i title="Update todo" class="fa fa-eye"></i>
	// 		<i title="Delete todo" class="fa fa-trash"></i>
	// 	</div>
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

	return todoListLayout;
}

/*
// select the parent container element
const container = document.querySelector('.container');

// create the todo list container element
const todoListContainer = document.createElement('div');
todoListContainer.classList.add('todo-list-container');

// create the h2 element
const myH2 = document.createElement('h2');
myH2.classList.add('my-h2');
myH2.textContent = '(Selected Project) Todo List';

// create the todo action buttons element
const todoActionBtns = document.createElement('div');
todoActionBtns.classList.add('todo-action-btns');

// create the new todo button element
const newTodoBtn = document.createElement('button');
newTodoBtn.textContent = '+ New Todo';

// append the new todo button to the todo action buttons element
todoActionBtns.appendChild(newTodoBtn);

// append the h2 element and todo action buttons element to the todo list container element
todoListContainer.appendChild(myH2);
todoListContainer.appendChild(todoActionBtns);

// create the todo list header elements
const todoListHeader = document.createElement('div');
todoListHeader.classList.add('todo-list');

const headerDate = document.createElement('div');
headerDate.classList.add('header', 'date');
const headerDateSpan = document.createElement('span');
headerDateSpan.classList.add('header-span');
const headerDateText = document.createElement('p');
headerDateText.textContent = 'Date';
const headerDateHr = document.createElement('hr');
headerDateHr.classList.add('project-hr');
headerDateSpan.appendChild(headerDateText);
headerDateSpan.appendChild(headerDateHr);
headerDate.appendChild(headerDateSpan);

const headerDescription = document.createElement('div');
headerDescription.classList.add('header', 'description');
const headerDescriptionSpan = document.createElement('span');
headerDescriptionSpan.classList.add('header-span');
const headerDescriptionText = document.createElement('p');
headerDescriptionText.textContent = 'Title';
const headerDescriptionHr = document.createElement('hr');
headerDescriptionHr.classList.add('project-hr');
headerDescriptionSpan.appendChild(headerDescriptionText);
headerDescriptionSpan.appendChild(headerDescriptionHr);
headerDescription.appendChild(headerDescriptionSpan);

const headerPriority = document.createElement('div');
headerPriority.classList.add('header', 'priority');
const headerPrioritySpan = document.createElement('span');
headerPrioritySpan.classList.add('header-span');
const headerPriorityText = document.createElement('p');
headerPriorityText.textContent = 'Priority';
const headerPriorityHr = document.createElement('hr');
headerPriorityHr.classList.add('project-hr');
headerPrioritySpan.appendChild(headerPriorityText);
headerPrioritySpan.appendChild(headerPriorityHr);
headerPriority.appendChild(headerPrioritySpan);

const headerCompleted = document.createElement('div');
headerCompleted.classList.add('header', 'completed');
const headerCompletedSpan = document.createElement('span');
headerCompletedSpan.classList.add('header-span');
const headerCompletedText = document.createElement('p');
headerCompletedText.textContent = 'Completed';
const headerCompletedHr = document.createElement('hr');
headerCompletedHr.classList.add('project-hr');
headerCompletedSpan.appendChild(headerCompletedText);
headerCompletedSpan.appendChild(headerCompletedHr);
headerCompleted.appendChild(headerCompletedSpan);

const headerUpdate = document.createElement('div');
headerUpdate.classList.add('header', 'update');
const headerUpdateSpan = document.createElement('span');
headerUpdateSpan.classList.add('header-span');
const headerUpdateText = document.createElement('p');
headerUpdateText.textContent = 'Update';
const headerUpdateHr = document.createElement('hr');
headerUpdateHr.classList.add('project-hr');
headerUpdateSpan.appendChild(headerUpdateText);
headerUpdateSpan.appendChild(headerUpdateHr);
headerUpdate.appendChild(headerUpdateSpan);

// append

*/
