class Todo {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.notes = [];
		this.checklist = [];
	}
}

class TodoList {
	constructor() {
		this.projects = [{ name: 'Default', todos: [] }];
		this.currentProjectIndex = 0;
	}

	addProject(name) {
		const project = { name: name, todos: [] };
		this.projects.push(project);
	}

	removeProject(index) {
		if (index === 0) {
			throw new Error('Cannot delete default project');
		}
		this.projects.splice(index, 1);
		if (this.currentProjectIndex >= index) {
			this.currentProjectIndex -= 1;
		}
	}

	getCurrentProject() {
		//*
		return this.projects[this.currentProjectIndex];
	}

	setCurrentProject(index) {
		//*
		this.currentProjectIndex = index;
	}

	addTodoToCurrentProject(todo) {
		//*
		const currentProject = this.getCurrentProject();
		currentProject.todos.push(todo);
	}

	removeTodoFromCurrentProject(index) {
		const currentProject = this.getCurrentProject();
		currentProject.todos.splice(index, 1);
	}
}

// Create a new TodoList instance
const todoList = new TodoList();

// Add a new project
todoList.addProject('Work');
console.log('todoList After add', todoList);
/* Output
  todoList After add TodoList {
    projects: [ { name: 'Default', todos: [] }, { name: 'Work', todos: [] } ],
    currentProjectIndex: 0
  }
*/

/* Modify further a little later when Todo is selected. From the nodelist then select the index based on onClick
  - Could even prompt user after add if they could like to set as current project 
*/
// // Set the current project to the newly created project
todoList.setCurrentProject(1);
console.log('todoList After set project', todoList);
/* Output
  todoList After set project TodoList {
    projects: [ { name: 'Default', todos: [] }, { name: 'Work', todos: [] } ],
    currentProjectIndex: 1
  }
*/

// Create a new Todo instance and add it to the current project
const todo = new Todo(
	'Finish report',
	'Complete the final report for the Q1 project',
	'2023-06-01',
	'High'
);
const todo2 = new Todo(
	'Quarterly report',
	'Quarterly report 2023',
	'2023-01-01',
	'Medium'
);
todoList.addTodoToCurrentProject(todo);
todoList.addTodoToCurrentProject(todo2);
console.log('todoList add todo to current project todo list', todoList);
/* Output
  todoList add todo to current project todo list TodoList {
    projects: [ { name: 'Default', todos: [] }, { name: 'Work', todos: [Array] } ],
    currentProjectIndex: 1
  }
*/

// Get the current project
const currentProject = todoList.getCurrentProject(1);
console.log('Get the current project based on index', currentProject);
/* Output
  {
    name: 'Work',
    todos: [
      Todo {
        title: 'Finish report',
        description: 'Complete the final report for the Q1 project',
        dueDate: '2023-06-01',
        priority: 'High',
        notes: [],
        checklist: []
      },
      Todo {
          title: 'Quarterly report',
          description: 'Quarterly report 2023',
          dueDate: '2023-01-01',
          priority: 'Medium',
          notes: [],
          checklist: []
        }
      ]
    }
*/

// Remove Todo from current project
todoList.removeTodoFromCurrentProject(1);
console.log('Removed todo from current project', currentProject);
