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
    this.projects = [{ name: "Default", todos: [] }];
    this.currentProjectIndex = 0;
  }

  addProject(name) {
    const project = { name: name, todos: [] };
    this.projects.push(project);
  }

  removeProject(index) {
    if (index === 0) {
      throw new Error("Cannot delete default project");
    }
    this.projects.splice(index, 1);
    if (this.currentProjectIndex >= index) {
      this.currentProjectIndex -= 1;
    }
  }

  getCurrentProject() {
    return this.projects[this.currentProjectIndex];
  }

  setCurrentProject(index) {
    this.currentProjectIndex = index;
  }

  addTodoToCurrentProject(todo) {
    const currentProject = this.getCurrentProject();
    currentProject.todos.push(todo);
  }

  removeTodoFromCurrentProject(index) {
    const currentProject = this.getCurrentProject();
    currentProject.todos.splice(index, 1);
  }
}

