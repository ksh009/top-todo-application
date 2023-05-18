import './style.css';
import { state } from '../src/state/state.js';
import { createProjectsLayout } from './views/projectsGrid';
import { createNav } from './components/nav';
import { createAddProjectModal } from './components/addProjectModal';
import { createAddTodoModal } from './components/addTodoModal';
import { createTodoList } from './views/projectTodos';

// Entry point element
const content = document.getElementById('content');

// Selectors
const headerContainer = document.createElement('header');
const mainContainer = document.createElement('main');

export function index(renderMessage) {
	if (!localStorage.getItem('state')) {
		localStorage.setItem('state', JSON.stringify(state));
	}

	const appState = JSON.parse(localStorage.getItem('state'));

	// Check if index rerender was triggered by child comp
	if (renderMessage) {
		console.log(renderMessage);
		// Remove old appended child
		headerContainer.innerHTML = '';
		mainContainer.innerHTML = '';
	} else {
		console.log('This is my default render when app first starts up!');
	}

	// Components - Initialized sections/components here
	const navBar = createNav(appState);
	const projectsGrid = createProjectsLayout(appState);
	const addProjectModal = createAddProjectModal(appState);
	const addTodoModal = createAddTodoModal(appState);
	const todoList = createTodoList(appState);

	// Add classes
	headerContainer.classList.add('header-container');
	mainContainer.classList.add('main-container');

	// Append
	headerContainer.appendChild(navBar);
	mainContainer.appendChild(projectsGrid);
	mainContainer.appendChild(todoList);
	mainContainer.appendChild(
		appState.todoData.modalActive &&
			appState.todoData.layoutComponent === 'ProjectsGridLayout'
			? addProjectModal
			: appState.todoData.modalCompVariantTodo === 'Create'
			? addTodoModal
			: addProjectModal
	);
	content.appendChild(headerContainer);
	content.appendChild(mainContainer);
}

// Ensure this only runs once on reload.
if (content.children.length === 1) {
	index();
}
