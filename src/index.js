import './style.css';
import { state } from '../src/state/state.js';
import { createProjectsLayout } from './views/projectsGrid';
import { createNav } from './components/nav';
import { createAddProjectModal } from './components/addProjectModal';
// Global state object will be created here
// State object will be shared with each comp
// // First persist to LS
// // then create var pointing to LS
// // state should probably be an object with getter and setter methods
// Need to somehow check when the state changes so that the particular component can be rerendered

// Entry point element
const content = document.getElementById('content');

// Selectors
const headerContainer = document.createElement('header');
const mainContainer = document.createElement('main');

export function index(renderMessage) {
	// Check if state object exists in localStorage
	if (!localStorage.getItem('state')) {
		// console.log('Default state set');
		// If not, persist to localStorage
		localStorage.setItem('state', JSON.stringify(state));
	}

	// This is passed down to index and index will pass it down to any child components.
	// // If state is changed then update and overwrite old state with set state
	const appState = JSON.parse(localStorage.getItem('state'));
	// console.log('globalState from inside index.js', appState);

	// Check if index rerender was triggered by child comp
	if (renderMessage) {
		console.log(renderMessage);
		// TEST
		// console.log('filterOption', filterOption);
		// if (filterOption && filterOption === 'high') {
		// 	appState.todoData.projects = appState.todoData.projects.filter(
		// 		(project) => {
		// 			return project.priority === 'high';
		// 		}
		// 	);
		// } else if (filterOption && filterOption === 'medium') {
		// 	appState.todoData.projects = appState.todoData.projects.filter(
		// 		(project) => {
		// 			return project.priority === 'medium';
		// 		}
		// 	);
		// } else if (filterOption && filterOption === 'low') {
		// 	appState.todoData.projects = appState.todoData.projects.filter(
		// 		(project) => {
		// 			return project.priority === 'low';
		// 		}
		// 	);
		// } else {
		// 	return appState.todoData.projects;
		// }
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

	// Add classes
	headerContainer.classList.add('header-container');
	mainContainer.classList.add('main-container');

	// Append
	headerContainer.appendChild(navBar);
	mainContainer.appendChild(projectsGrid);
	mainContainer.appendChild(addProjectModal);
	content.appendChild(headerContainer);
	content.appendChild(mainContainer);
}

// Ensure this only runs once on reload. Index will be triggered from other functions when state is updated. This is only fo initial load
if (content.children.length === 1) {
	// console.log('I only run once on reload!!!');
	// Later find a condition so that this function will only run once
	index();
}
