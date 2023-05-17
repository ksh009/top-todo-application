// Array of possible todo titles
const todoTitles = [
	'Buy groceries',
	'Do laundry',
	'Pay bills',
	'Call mom',
	'Finish homework',
	'Walk the dog',
	'Clean the kitchen',
	'Go for a run',
	'Read a book',
	'Write a blog post',
	'Watch a movie',
	'Learn a new skill',
	'Organize closet',
	'Start a new project',
	'Take a nap',
	'Plan a trip',
	'Try a new recipe',
	'Volunteer at a shelter',
	'Fix a leaky faucet',
	'Learn a new language',
];

// Array of possible priorities
const priorities = ['High', 'Medium', 'Low'];

// Function to generate random todo object
function generateRandomTodo() {
	const date = new Date(Date.now() + Math.random() * 1000000000000); // Random date within the next few months
	const title = todoTitles[Math.floor(Math.random() * todoTitles.length)]; // Random title from the array of possible titles
	const priority = priorities[Math.floor(Math.random() * priorities.length)]; // Random priority level
	const completed = Math.random() < 0.5; // Randomly set completed to true or false
	return { date: date.toLocaleDateString('en-US'), title, priority, completed };
}

// Generate 27 random todos
const todos = [];
for (let i = 0; i < 27; i++) {
	todos.push(generateRandomTodo());
}

console.log(todos);
