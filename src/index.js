import './style.css';
// Global state object will be created here
// State object will be shared with each comp
// // First persist to LS
// // then create var pointing to LS
// // state should probably be an object with getter and setter methods
// Need to somehow check when the state changes so that the particular component can be rerendered

export function index(state) {
	console.log('Check if webpack config working!!!');

	// Components
	// Initialized sections/components here

	// Selectors
	const content = document.getElementById('content');
	const headerContainer = document.createElement('header');
	const mainContainer = document.createElement('main');

	// Add classes
	headerContainer.classList.add('header-container');
	mainContainer.classList.add('main-container');

	// Append
	content.appendChild(headerContainer);
	// Append components to main as needed then append main to content
	content.appendChild(mainContainer);
}

index();
