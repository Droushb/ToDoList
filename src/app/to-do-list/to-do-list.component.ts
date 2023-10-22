import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  newTask = '';
  tasks: Task[] = [];

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.tasks = this.toDoService.getTasks();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      let newTask = {
        text: this.newTask,
        isDone: false,
      } as Task;

      this.tasks.unshift(newTask);
      this.newTask = '';
    }
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  toggleDone() {
    const completedTasks = this.tasks.filter(task => task.isDone);
    const uncompletedTasks = this.tasks.filter(task => !task.isDone);

    this.tasks = [...uncompletedTasks, ...completedTasks];
  }

  saveTasks() {
    this.toDoService.saveTasks(this.tasks);
  }
}