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
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.',
				completed: false,
			},
			{
				name: 'Work Project',
				priority: 'medium',
				priorityId: 'medPriorityTodo',
				todoCount: 18,
				description:
					'Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.',
				completed: false,
			},
			{
				name: 'Personal Project',
				priority: 'high',
				priorityId: 'highPriorityTodo',
				todoCount: 27,
				description:
					'Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.',
				completed: false,
			},
			{
				name: 'Garden Project',
				priority: 'low',
				priorityId: 'lowPriorityTodo',
				todoCount: 12,
				description:
					'Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.',
				completed: false,
			},
			{
				name: 'Party Project',
				priority: 'medium',
				priorityId: 'medPriorityTodo',
				todoCount: 21,
				description:
					'Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.',
				completed: false,
			},
			{
				name: 'Fundraiser',
				priority: 'high',
				priorityId: 'highPriorityTodo',
				todoCount: 30,
				description:
					'Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.',
				completed: false,
			},
		],
	},
};
