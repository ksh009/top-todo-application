export const state = {
	// Filter through this with select drop down
	todoData: {
		// Change this dynamically with onClick from projects grid
		selectedProject: 'Default',
		projects: [
			{
				name: 'Default',
				priority: 'high',
				todos: [
					{
						date: '2023-05-15',
						description: 'Finish coding challenge',
						completed: false,
					},
					{
						date: '2023-05-16',
						description: 'Buy groceries',
						completed: false,
					},
				],
			},
			{
				name: 'Project 2',
				priority: 'medium',
				todos: [
					{
						date: '2023-05-15',
						description: 'Book flight tickets',
						completed: true,
					},
					{
						date: '2023-05-16',
						description: 'Call dentist',
						completed: false,
					},
				],
			},
			{
				name: 'Project 3',
				priority: 'low',
				todos: [
					{
						date: '2023-07-15',
						description: 'Watch a movie',
						completed: false,
					},
					{
						date: '2023-03-16',
						description: 'Call dentist',
						completed: false,
					},
				],
			},
		],
	},
};
