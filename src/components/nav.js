export function createNav(globalState) {
	// console.log('globalState from nav.js', globalState);
	const nav = document.createElement('nav');
	nav.classList.add('nav');

	const logo = createLogo();
	const auth = createAuth();

	nav.appendChild(logo);
	nav.appendChild(auth);

	return nav;
}

function createLogo() {
	const logo = document.createElement('div');
	logo.classList.add('logo');

	const link = document.createElement('a');
	link.setAttribute('href', '#');
	link.textContent = 'TASKIFY';

	logo.appendChild(link);

	return logo;
}

function createAuth() {
	const auth = document.createElement('div');
	auth.classList.add('auth');

	const signUpButton = createButton('Sign up');
	const signInButton = createButton('Sign in');

	auth.appendChild(signUpButton);
	auth.appendChild(signInButton);

	return auth;
}

function createButton(text) {
	const button = document.createElement('button');
	button.textContent = text;
	return button;
}
