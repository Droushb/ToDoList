import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private storageKey = 'toDoList';

  constructor() {}

  getTasks(): Task[] {
    const savedTasks = localStorage.getItem(this.storageKey);
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
