export const state = {
	// Filter through this with select drop down
	todoData: {
		modalActive: false,
		modalComponent: 'AddNewProject',
		dialogComponent: null,
		layoutComponent: 'ProjectsGridLayout',
		defaultComponent: 'ProjectsGrid',
		selectedProject: 'Default Project',
		projects: [
			{
				name: 'Default Project',
				priority: 'low',
				priorityId: 'lowPriorityTodo',
				todoCount: 9,
				todos: [
					{
						date: '2/19/2023',
						title: 'Take a nap',
						priority: 'Low',
						completed: true,
					},
					{
						date: '1/13/2023',
						title: 'Learn a new skill',
						priority: 'High',
						completed: false,
					},
					{
						date: '11/17/2023',
						title: 'Read a book',
						priority: 'Low',
						completed: true,
					},
					{
						date: '11/6/2023',
						title: 'Read a book',
						priority: 'Medium',
						completed: true,
					},
					{
						date: '12/1/2023',
						title: 'Finish homework',
						priority: 'High',
						completed: true,
					},
					{
						date: '11/25/2023',
						title: 'Go for a run',
						priority: 'Low',
						completed: false,
					},
					{
						date: '1/26/2023',
						title: 'Organize closet',
						priority: 'Medium',
						completed: false,
					},
					{
						date: '9/26/2023',
						title: 'Clean the kitchen',
						priority: 'High',
						completed: true,
					},
					{
						date: '1/11/2023',
						title: 'Take a nap',
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
						date: '12/17/2023',
						title: 'Fix a leaky faucet',
						priority: 'Low',
						completed: true,
					},
					{
						date: '8/26/2023',
						title: 'Go for a run',
						priority: 'Medium',
						completed: false,
					},
					{
						date: '1/20/2023',
						title: 'Organize closet',
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
						date: '1/28/2023',
						title: 'Organize closet',
						priority: 'Medium',
						completed: true,
					},
					{
						date: '9/14/2023',
						title: 'Start a new project',
						priority: 'Medium',
						completed: true,
					},
					{
						date: '5/16/2023',
						title: 'Try a new recipe',
						priority: 'High',
						completed: false,
					},
					{
						date: '4/3/2023',
						title: 'Plan a trip',
						priority: 'Low',
						completed: true,
					},
					{
						date: '7/12/2023',
						title: 'Learn a new language',
						priority: 'Low',
						completed: true,
					},
					{
						date: '6/9/2023',
						title: 'Walk the dog',
						priority: 'Low',
						completed: true,
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
						date: '8/3/2023',
						title: 'Start a new project',
						priority: 'Low',
						completed: false,
					},
					{
						date: '6/18/2023',
						title: 'Walk the dog',
						priority: 'High',
						completed: true,
					},
					{
						date: '12/1/2023',
						title: 'Call mom',
						priority: 'Medium',
						completed: false,
					},
					{
						date: '7/7/2023',
						title: 'Clean the kitchen',
						priority: 'High',
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
						date: '10/10/2023',
						title: 'Learn a new skill',
						priority: 'Low',
						completed: true,
					},
					{
						date: '8/31/2023',
						title: 'Finish homework',
						priority: 'Medium',
						completed: false,
					},
					{
						date: '8/18/2023',
						title: 'Buy groceries',
						priority: 'Low',
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
						date: '5/30/2023',
						title: 'Try a new recipe',
						priority: 'Medium',
						completed: true,
					},
					{
						date: '9/8/2023',
						title: 'Take a nap',
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
