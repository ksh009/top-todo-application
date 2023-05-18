export const state = {
	todoData: {
		modalActive: false,
		modalCompVariantTodo: 'Create',
		layoutComponent: 'ProjectsGridLayout',
		defaultComponent: 'ProjectsGrid',
		selectedProject: 'Default Project',
		selectedProjectIndex: 0,
		selectedTodoIdx: 0,
		projects: [
			{
				name: 'Default Project',
				priority: 'low',
				priorityId: 'lowPriorityTodo',
				todoCount: 9,
				todos: [
					{
						date: '2023-02-19',
						title: 'Take a nap',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: true,
					},
					{
						date: '2023-01-13',
						title: 'Learn a new skill',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'High',
						completed: false,
					},
					{
						date: '2023-11-17',
						title: 'Read a book',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: true,
					},
					{
						date: '2023-11-06',
						title: 'Read a book',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Medium',
						completed: true,
					},
					{
						date: '2023-12-01',
						title: 'Finish homework',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'High',
						completed: true,
					},
					{
						date: '2023-11-25',
						title: 'Go for a run',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: false,
					},
					{
						date: '2023-01-26',
						title: 'Organize closet',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Medium',
						completed: false,
					},
					{
						date: '2023-09-26',
						title: 'Clean the kitchen',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'High',
						completed: true,
					},
					{
						date: '2023-01-11',
						title: 'Take a nap',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: false,
					},
				],
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.',
				completed: false,
			},
		],
	},
};
