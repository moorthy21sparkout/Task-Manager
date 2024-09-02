import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterTasksPipe } from '../filter-tasks.pipe';
import { RouterModule } from '@angular/router';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterTasksPipe, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  // tasks: { id: number; name: string }[] = [];
  tasks: Task[] = [];
  showCompleted: boolean = true;

  constructor(private taskServices: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskServices.getTask();
  }

  get filteredTasks(): Task[] {

    return this.showCompleted
      ? this.tasks
      : this.tasks.filter(task => !task.completed);
  }

  deleteTask(id: number): void {
    if (confirm("are you delete this task ?")) {
      this.taskServices.deleteTask(id);
      this.tasks = this.taskServices.getTask();

    }
  }
}
