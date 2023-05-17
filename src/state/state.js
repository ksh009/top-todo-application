export const state = {
	// Filter through this with select drop down
	todoData: {
		modalActive: false,
		modalComponent: 'AddNewProject',
		dialogComponent: null,
		layoutComponent: 'ProjectsGridLayout',
		defaultComponent: 'ProjectsGrid',
		selectedProject: 'Default Project',
		selectedProjectIndex: 0,
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
			{
				name: 'Work Project',
				priority: 'medium',
				priorityId: 'medPriorityTodo',
				todoCount: 3,
				todos: [
					{
						date: '2023-12-17',
						title: 'Fix a leaky faucet',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: true,
					},
					{
						date: '2023-08-26',
						title: 'Go for a run',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Medium',
						completed: false,
					},
					{
						date: '2023-01-20',
						title: 'Organize closet',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: false,
					},
				],
				description:
					'Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.',
				completed: false,
			},
			{
				name: 'Personal Project',
				priority: 'high',
				priorityId: 'highPriorityTodo',
				todoCount: 6,
				todos: [
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
				],
				description:
					'Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.',
				completed: false,
			},
			{
				name: 'Garden Project',
				priority: 'low',
				priorityId: 'lowPriorityTodo',
				todoCount: 4,
				todos: [
					{
						date: '2023-12-17',
						title: 'Fix a leaky faucet',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: true,
					},
					{
						date: '2023-08-26',
						title: 'Go for a run',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Medium',
						completed: false,
					},
					{
						date: '2023-01-20',
						title: 'Organize closet',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: false,
					},
					{
						date: '2023-11-25',
						title: 'Go for a run',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue',
						priority: 'Low',
						completed: false,
					},
				],
				description:
					'Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.',
				completed: false,
			},
			{
				name: 'Party Project',
				priority: 'medium',
				priorityId: 'medPriorityTodo',
				todoCount: 3,
				todos: [
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
				],
				description:
					'Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.',
				completed: false,
			},
			{
				name: 'Fundraiser',
				priority: 'high',
				priorityId: 'highPriorityTodo',
				todoCount: 2,
				todos: [
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
				],
				description:
					'Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.',
				completed: false,
			},
		],
	},
};
