import { TodoList } from './todo.js';

const todo = new TodoList();

todo.addTask("Learn JS");
todo.addTask("Build project");

todo.completeTask(0);

todo.listTasks();