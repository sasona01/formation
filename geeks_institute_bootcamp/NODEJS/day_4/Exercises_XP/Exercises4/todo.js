export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, done: false });
  }

  completeTask(index) {
    this.tasks[index].done = true;
  }

  listTasks() {
    console.log(this.tasks);
  }
}