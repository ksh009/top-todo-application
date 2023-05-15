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

- 14/05/2023 => Tasks
- configure webpack
  - Done 14/05
- For each section in HTML create dynamically with JS and webpack
- Append each module to content id html element
- Keep one default project card
- Click "Add Project button"
- Add Project via form in modal
- New projects appears in grid

Done so far

1. Configured webpack
2. Created a state object
3. Persisted state object to Local Storage
4. Create projects grid component which houses the:

- Add projects button and filter projects by priority select input

5.
