# Features

1. I should have an "Add project button"
2. There should be a grid layout displaying each Project as a card

- There should be a default project

3. Each Project card should have an update button and delete button. The update button will allow me to add todos for that project and the delete button will allow me to delete my project (Note I cannot delete the project if there are Todos associated with the project)

- Add three colors (Red, Orange and Yellow)
  - Will later add some functionality to filter projects by color
    - Red = High priority
    - Orange = Medium Priority
    - Yellow = Low priority

4. Each project will house the Todos associated to the project
5. When I open my project a list of Todos should appear for the project
6. The Todos table should have the following headers: Date, Description, Completed
7. When I hover over a Todo a delete button should appear which would enable me to delete the Todo
8. On the Todo list there should be a plus button which would enable me to add a Todo (Build of Library project)
9. All todos should be persisted and read from LocalStorage
10. Individual parts/components of the appliction should be split into there own JS files

- Follow guidelines from restaurant application to get webpack setup
- Note there is a config setting to run webpack with on hot reload so you do not have to run "npx webpack over and over"

11. Add a state object that will be persisted to localStorage. Data structure should look something like this =>

```js
const state = {
	// Filter through this with select drop down
	todoData: {
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
```

### Task 12 and 13 can be tracked using the Todo list length for each project

#### 12 and 13 to be reused with Turnary from state

12. Add a warning dialog box when deleting a project that has uncompleted todos inside

- `Done`

13. Add a success dialog box when a project has been deleted

- `Done`

14. Inside the Todo table opposite the header add a plus icon in green

- `Done - Added new Todo button instead`

15. convert the update and delete buttons to icons instead and add an eye button as a details button so that each todo can be viewed in detail

- `Done buttons are now icons`

16. Build a new Todo form to take new todos

- `Done`

17. Build a todo details component for viewing todo and add update and close button inside

- `Done`

18. Build todo deleted feedback modal

- Will be something similar to the delete Project modal

19. If a filter for todo list is added note that it can be restructed by the way the state is set.

- If by date
  - Sort date in array then populate
- If by priority
  - Sort by priority then populate
- If by completed

  - Sort by completed then populate

- `NOTE`
  - When any state is updated the component function will need to be updated again. Similar behavior to React

20. `Note task 10 is last - webpack`

- 15/05 tasks
- 0. Convert the state to a class for the following
  - The todo list
  - The todo project
  - The todo
- 1. Click on Add project button and add project form appears in modal
  - Modal has glass morphic bg
  - `Done`
- 2. When Add project form submitted the global state is updated
  - `Done`
- 3. The page must be rerendered to take into account the new state update
  - `Done`
- 4. Get the new project to appear in the projects show grid
  - `Done `
- 5. Delete a project and rerender
- 7. Now implement modal which checks for
  <!-- Leave these features for now -->
  - If project has todos in it
  - Success message if no Todos
  - Success message if todos but proceeded with delete even after warn
- 6. Implement project filtering by priority render logic

2/2 Features:

- Added a modal on add project click
- The modal can be canceled
- A new project can be added with associate priority level
- A project can be removed
- The default project cannot be removed

- 16/05/2023 Tasks
  2/2 Tasks:
- 1. Functionality to filter switch
  - `Leave filter functionality for last`
- 2. Click Add todo btn on project cards and Add todo form will open in modal
- 3. Cancel logic on add todo form modal
- 4. Submit logic on add todo form modal
- 5. Add animation to todo count color to indicate that it is clickable
  - `Done`
- 6. When clicking on todo animation open todos table for particular project

- ISSUE

  - When deleting a project in filter mode all projects aside from the default projects is deleted from state
  - When deletign outside of filter and then filtering projects get filtered as per normal

  2/2 Tasks completed:

- 1. Added some animations to the project card
- 2. Moved "Add project" btn to left of layout
- 3. Added event listeners to btns in project card to swap layouts
- 4. Added back btn to Todos layout to get back to projects layout

2/2 Tasks:

- 1. Generate todo table component dynamically with JS
- 2. Click on add todo btn and form pops up in modal
- 3. Cancel and submit logic on add todo form

- 18/05/2023

2/3 Tasks:

1.  Todo table component dynamically with JS
2.  Pop up form type based on layout switch
3.  Click on new todo btn and form pops up in modal
4.  Cancel btn on new todo modal form closes modal
5.  Update todo list title based on project card clicked

3/3 Tasks: 6. Todo count in project cards based to todo array length in state

- "Bug"
- When new project created with Todos & deleted then program crashes
- Fixed

7.  Can create new project and add Todos to it
8.  Display warning alert when all inputs on both forms not complete

1/3 Day 22 of #365DaysofCode and #buildinpublic. Managed to get more done in this session for the Todo app using Webpack on #theodinproject: ⤵️

#####

1/2 In this session of the Webpack Todo List on #theodinproject and #buildinpublic I want to implement these features: ⤵️

2/2 Tasks (For existing and new projects)

- 1. Implement update todo modal to show todo details
  - Created comp with JS
- 2. Implement cancel update logic
  - `Done`
- 3. Dynamically populate update comp based on Todo
- 4. Implement update todo logic
- 5. Delete a todo from the todo list
  - `Done`
    - Demonstrate by deleting all todos in projs and refresh
- 6. Updated webpack config - no longer need rule for image loading

`FIX UPDATE Click`
