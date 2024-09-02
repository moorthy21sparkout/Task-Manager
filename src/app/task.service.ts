import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [{ id: 1, name: 'simpletask', completed: false }, { id: 2, name: 'another task', completed: true }];

  getTask() {
    return this.tasks;
  }

  addTask(task: any) {
    this.tasks.push(task);
  }
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  constructor() { }
}
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}
